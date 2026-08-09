# `cloudformationStack` Submodule <a name="`cloudformationStack` Submodule" id="@cdktn/provider-awscc.cloudformationStack"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudformationStack <a name="CloudformationStack" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStack"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cloudformation_stack awscc_cloudformation_stack}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStack.Initializer"></a>

```typescript
import { cloudformationStack } from '@cdktn/provider-awscc'

new cloudformationStack.CloudformationStack(scope: Construct, id: string, config: CloudformationStackConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStack.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStack.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStack.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStackConfig">CloudformationStackConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStack.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStack.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStack.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStackConfig">CloudformationStackConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStack.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStack.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStack.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStack.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStack.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStack.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStack.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStack.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStack.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStack.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStack.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStack.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStack.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStack.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStack.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStack.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStack.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStack.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStack.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStack.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStack.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStack.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStack.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStack.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStack.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStack.resetCapabilities">resetCapabilities</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStack.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStack.resetDisableRollback">resetDisableRollback</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStack.resetEnableTerminationProtection">resetEnableTerminationProtection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStack.resetNotificationArNs">resetNotificationArNs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStack.resetParameters">resetParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStack.resetRoleArn">resetRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStack.resetStackPolicyBody">resetStackPolicyBody</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStack.resetStackPolicyUrl">resetStackPolicyUrl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStack.resetStackStatusReason">resetStackStatusReason</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStack.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStack.resetTemplateBody">resetTemplateBody</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStack.resetTemplateUrl">resetTemplateUrl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStack.resetTimeoutInMinutes">resetTimeoutInMinutes</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStack.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStack.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStack.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStack.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStack.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStack.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStack.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStack.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStack.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStack.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStack.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStack.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStack.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStack.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStack.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStack.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStack.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStack.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStack.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStack.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStack.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStack.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStack.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStack.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStack.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStack.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStack.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStack.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStack.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStack.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStack.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStack.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStack.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStack.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStack.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStack.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStack.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStack.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStack.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStack.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStack.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStack.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStack.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStack.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStack.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStack.putTags"></a>

```typescript
public putTags(value: IResolvable | CloudformationStackTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStack.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStackTags">CloudformationStackTags</a>[]

---

##### `resetCapabilities` <a name="resetCapabilities" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStack.resetCapabilities"></a>

```typescript
public resetCapabilities(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStack.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetDisableRollback` <a name="resetDisableRollback" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStack.resetDisableRollback"></a>

```typescript
public resetDisableRollback(): void
```

##### `resetEnableTerminationProtection` <a name="resetEnableTerminationProtection" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStack.resetEnableTerminationProtection"></a>

```typescript
public resetEnableTerminationProtection(): void
```

##### `resetNotificationArNs` <a name="resetNotificationArNs" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStack.resetNotificationArNs"></a>

```typescript
public resetNotificationArNs(): void
```

##### `resetParameters` <a name="resetParameters" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStack.resetParameters"></a>

```typescript
public resetParameters(): void
```

##### `resetRoleArn` <a name="resetRoleArn" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStack.resetRoleArn"></a>

```typescript
public resetRoleArn(): void
```

##### `resetStackPolicyBody` <a name="resetStackPolicyBody" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStack.resetStackPolicyBody"></a>

```typescript
public resetStackPolicyBody(): void
```

##### `resetStackPolicyUrl` <a name="resetStackPolicyUrl" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStack.resetStackPolicyUrl"></a>

```typescript
public resetStackPolicyUrl(): void
```

##### `resetStackStatusReason` <a name="resetStackStatusReason" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStack.resetStackStatusReason"></a>

```typescript
public resetStackStatusReason(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStack.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTemplateBody` <a name="resetTemplateBody" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStack.resetTemplateBody"></a>

```typescript
public resetTemplateBody(): void
```

##### `resetTemplateUrl` <a name="resetTemplateUrl" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStack.resetTemplateUrl"></a>

```typescript
public resetTemplateUrl(): void
```

##### `resetTimeoutInMinutes` <a name="resetTimeoutInMinutes" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStack.resetTimeoutInMinutes"></a>

```typescript
public resetTimeoutInMinutes(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStack.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStack.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStack.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStack.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a CloudformationStack resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStack.isConstruct"></a>

```typescript
import { cloudformationStack } from '@cdktn/provider-awscc'

cloudformationStack.CloudformationStack.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStack.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStack.isTerraformElement"></a>

```typescript
import { cloudformationStack } from '@cdktn/provider-awscc'

cloudformationStack.CloudformationStack.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStack.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStack.isTerraformResource"></a>

```typescript
import { cloudformationStack } from '@cdktn/provider-awscc'

cloudformationStack.CloudformationStack.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStack.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStack.generateConfigForImport"></a>

```typescript
import { cloudformationStack } from '@cdktn/provider-awscc'

cloudformationStack.CloudformationStack.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a CloudformationStack resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStack.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStack.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the CloudformationStack to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStack.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing CloudformationStack that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cloudformation_stack#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStack.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the CloudformationStack to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStack.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStack.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStack.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStack.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStack.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStack.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStack.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStack.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStack.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStack.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStack.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStack.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStack.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStack.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStack.property.changeSetId">changeSetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStack.property.creationTime">creationTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStack.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStack.property.lastUpdateTime">lastUpdateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStack.property.outputs">outputs</a></code> | <code><a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStackOutputsList">CloudformationStackOutputsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStack.property.parentId">parentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStack.property.rootId">rootId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStack.property.stackId">stackId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStack.property.stackStatus">stackStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStack.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStackTagsList">CloudformationStackTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStack.property.capabilitiesInput">capabilitiesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStack.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStack.property.disableRollbackInput">disableRollbackInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStack.property.enableTerminationProtectionInput">enableTerminationProtectionInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStack.property.notificationArNsInput">notificationArNsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStack.property.parametersInput">parametersInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStack.property.roleArnInput">roleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStack.property.stackNameInput">stackNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStack.property.stackPolicyBodyInput">stackPolicyBodyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStack.property.stackPolicyUrlInput">stackPolicyUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStack.property.stackStatusReasonInput">stackStatusReasonInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStack.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStackTags">CloudformationStackTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStack.property.templateBodyInput">templateBodyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStack.property.templateUrlInput">templateUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStack.property.timeoutInMinutesInput">timeoutInMinutesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStack.property.capabilities">capabilities</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStack.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStack.property.disableRollback">disableRollback</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStack.property.enableTerminationProtection">enableTerminationProtection</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStack.property.notificationArNs">notificationArNs</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStack.property.parameters">parameters</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStack.property.roleArn">roleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStack.property.stackName">stackName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStack.property.stackPolicyBody">stackPolicyBody</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStack.property.stackPolicyUrl">stackPolicyUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStack.property.stackStatusReason">stackStatusReason</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStack.property.templateBody">templateBody</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStack.property.templateUrl">templateUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStack.property.timeoutInMinutes">timeoutInMinutes</a></code> | <code>number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStack.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStack.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStack.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStack.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStack.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStack.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStack.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStack.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStack.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStack.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStack.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStack.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStack.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStack.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `changeSetId`<sup>Required</sup> <a name="changeSetId" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStack.property.changeSetId"></a>

```typescript
public readonly changeSetId: string;
```

- *Type:* string

---

##### `creationTime`<sup>Required</sup> <a name="creationTime" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStack.property.creationTime"></a>

```typescript
public readonly creationTime: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStack.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `lastUpdateTime`<sup>Required</sup> <a name="lastUpdateTime" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStack.property.lastUpdateTime"></a>

```typescript
public readonly lastUpdateTime: string;
```

- *Type:* string

---

##### `outputs`<sup>Required</sup> <a name="outputs" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStack.property.outputs"></a>

```typescript
public readonly outputs: CloudformationStackOutputsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStackOutputsList">CloudformationStackOutputsList</a>

---

##### `parentId`<sup>Required</sup> <a name="parentId" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStack.property.parentId"></a>

```typescript
public readonly parentId: string;
```

- *Type:* string

---

##### `rootId`<sup>Required</sup> <a name="rootId" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStack.property.rootId"></a>

```typescript
public readonly rootId: string;
```

- *Type:* string

---

##### `stackId`<sup>Required</sup> <a name="stackId" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStack.property.stackId"></a>

```typescript
public readonly stackId: string;
```

- *Type:* string

---

##### `stackStatus`<sup>Required</sup> <a name="stackStatus" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStack.property.stackStatus"></a>

```typescript
public readonly stackStatus: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStack.property.tags"></a>

```typescript
public readonly tags: CloudformationStackTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStackTagsList">CloudformationStackTagsList</a>

---

##### `capabilitiesInput`<sup>Optional</sup> <a name="capabilitiesInput" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStack.property.capabilitiesInput"></a>

```typescript
public readonly capabilitiesInput: string[];
```

- *Type:* string[]

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStack.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `disableRollbackInput`<sup>Optional</sup> <a name="disableRollbackInput" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStack.property.disableRollbackInput"></a>

```typescript
public readonly disableRollbackInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `enableTerminationProtectionInput`<sup>Optional</sup> <a name="enableTerminationProtectionInput" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStack.property.enableTerminationProtectionInput"></a>

```typescript
public readonly enableTerminationProtectionInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `notificationArNsInput`<sup>Optional</sup> <a name="notificationArNsInput" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStack.property.notificationArNsInput"></a>

```typescript
public readonly notificationArNsInput: string[];
```

- *Type:* string[]

---

##### `parametersInput`<sup>Optional</sup> <a name="parametersInput" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStack.property.parametersInput"></a>

```typescript
public readonly parametersInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `roleArnInput`<sup>Optional</sup> <a name="roleArnInput" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStack.property.roleArnInput"></a>

```typescript
public readonly roleArnInput: string;
```

- *Type:* string

---

##### `stackNameInput`<sup>Optional</sup> <a name="stackNameInput" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStack.property.stackNameInput"></a>

```typescript
public readonly stackNameInput: string;
```

- *Type:* string

---

##### `stackPolicyBodyInput`<sup>Optional</sup> <a name="stackPolicyBodyInput" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStack.property.stackPolicyBodyInput"></a>

```typescript
public readonly stackPolicyBodyInput: string;
```

- *Type:* string

---

##### `stackPolicyUrlInput`<sup>Optional</sup> <a name="stackPolicyUrlInput" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStack.property.stackPolicyUrlInput"></a>

```typescript
public readonly stackPolicyUrlInput: string;
```

- *Type:* string

---

##### `stackStatusReasonInput`<sup>Optional</sup> <a name="stackStatusReasonInput" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStack.property.stackStatusReasonInput"></a>

```typescript
public readonly stackStatusReasonInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStack.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | CloudformationStackTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStackTags">CloudformationStackTags</a>[]

---

##### `templateBodyInput`<sup>Optional</sup> <a name="templateBodyInput" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStack.property.templateBodyInput"></a>

```typescript
public readonly templateBodyInput: string;
```

- *Type:* string

---

##### `templateUrlInput`<sup>Optional</sup> <a name="templateUrlInput" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStack.property.templateUrlInput"></a>

```typescript
public readonly templateUrlInput: string;
```

- *Type:* string

---

##### `timeoutInMinutesInput`<sup>Optional</sup> <a name="timeoutInMinutesInput" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStack.property.timeoutInMinutesInput"></a>

```typescript
public readonly timeoutInMinutesInput: number;
```

- *Type:* number

---

##### `capabilities`<sup>Required</sup> <a name="capabilities" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStack.property.capabilities"></a>

```typescript
public readonly capabilities: string[];
```

- *Type:* string[]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStack.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `disableRollback`<sup>Required</sup> <a name="disableRollback" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStack.property.disableRollback"></a>

```typescript
public readonly disableRollback: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `enableTerminationProtection`<sup>Required</sup> <a name="enableTerminationProtection" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStack.property.enableTerminationProtection"></a>

```typescript
public readonly enableTerminationProtection: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `notificationArNs`<sup>Required</sup> <a name="notificationArNs" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStack.property.notificationArNs"></a>

```typescript
public readonly notificationArNs: string[];
```

- *Type:* string[]

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStack.property.parameters"></a>

```typescript
public readonly parameters: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStack.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

---

##### `stackName`<sup>Required</sup> <a name="stackName" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStack.property.stackName"></a>

```typescript
public readonly stackName: string;
```

- *Type:* string

---

##### `stackPolicyBody`<sup>Required</sup> <a name="stackPolicyBody" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStack.property.stackPolicyBody"></a>

```typescript
public readonly stackPolicyBody: string;
```

- *Type:* string

---

##### `stackPolicyUrl`<sup>Required</sup> <a name="stackPolicyUrl" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStack.property.stackPolicyUrl"></a>

```typescript
public readonly stackPolicyUrl: string;
```

- *Type:* string

---

##### `stackStatusReason`<sup>Required</sup> <a name="stackStatusReason" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStack.property.stackStatusReason"></a>

```typescript
public readonly stackStatusReason: string;
```

- *Type:* string

---

##### `templateBody`<sup>Required</sup> <a name="templateBody" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStack.property.templateBody"></a>

```typescript
public readonly templateBody: string;
```

- *Type:* string

---

##### `templateUrl`<sup>Required</sup> <a name="templateUrl" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStack.property.templateUrl"></a>

```typescript
public readonly templateUrl: string;
```

- *Type:* string

---

##### `timeoutInMinutes`<sup>Required</sup> <a name="timeoutInMinutes" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStack.property.timeoutInMinutes"></a>

```typescript
public readonly timeoutInMinutes: number;
```

- *Type:* number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStack.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStack.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CloudformationStackConfig <a name="CloudformationStackConfig" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStackConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStackConfig.Initializer"></a>

```typescript
import { cloudformationStack } from '@cdktn/provider-awscc'

const cloudformationStackConfig: cloudformationStack.CloudformationStackConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStackConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStackConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStackConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStackConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStackConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStackConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStackConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStackConfig.property.stackName">stackName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cloudformation_stack#stack_name CloudformationStack#stack_name}. |
| <code><a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStackConfig.property.capabilities">capabilities</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cloudformation_stack#capabilities CloudformationStack#capabilities}. |
| <code><a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStackConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cloudformation_stack#description CloudformationStack#description}. |
| <code><a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStackConfig.property.disableRollback">disableRollback</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cloudformation_stack#disable_rollback CloudformationStack#disable_rollback}. |
| <code><a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStackConfig.property.enableTerminationProtection">enableTerminationProtection</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cloudformation_stack#enable_termination_protection CloudformationStack#enable_termination_protection}. |
| <code><a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStackConfig.property.notificationArNs">notificationArNs</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cloudformation_stack#notification_ar_ns CloudformationStack#notification_ar_ns}. |
| <code><a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStackConfig.property.parameters">parameters</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cloudformation_stack#parameters CloudformationStack#parameters}. |
| <code><a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStackConfig.property.roleArn">roleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cloudformation_stack#role_arn CloudformationStack#role_arn}. |
| <code><a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStackConfig.property.stackPolicyBody">stackPolicyBody</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cloudformation_stack#stack_policy_body CloudformationStack#stack_policy_body}. |
| <code><a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStackConfig.property.stackPolicyUrl">stackPolicyUrl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cloudformation_stack#stack_policy_url CloudformationStack#stack_policy_url}. |
| <code><a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStackConfig.property.stackStatusReason">stackStatusReason</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cloudformation_stack#stack_status_reason CloudformationStack#stack_status_reason}. |
| <code><a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStackConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStackTags">CloudformationStackTags</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cloudformation_stack#tags CloudformationStack#tags}. |
| <code><a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStackConfig.property.templateBody">templateBody</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cloudformation_stack#template_body CloudformationStack#template_body}. |
| <code><a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStackConfig.property.templateUrl">templateUrl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cloudformation_stack#template_url CloudformationStack#template_url}. |
| <code><a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStackConfig.property.timeoutInMinutes">timeoutInMinutes</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cloudformation_stack#timeout_in_minutes CloudformationStack#timeout_in_minutes}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStackConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStackConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStackConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStackConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStackConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStackConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStackConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `stackName`<sup>Required</sup> <a name="stackName" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStackConfig.property.stackName"></a>

```typescript
public readonly stackName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cloudformation_stack#stack_name CloudformationStack#stack_name}.

---

##### `capabilities`<sup>Optional</sup> <a name="capabilities" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStackConfig.property.capabilities"></a>

```typescript
public readonly capabilities: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cloudformation_stack#capabilities CloudformationStack#capabilities}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStackConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cloudformation_stack#description CloudformationStack#description}.

---

##### `disableRollback`<sup>Optional</sup> <a name="disableRollback" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStackConfig.property.disableRollback"></a>

```typescript
public readonly disableRollback: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cloudformation_stack#disable_rollback CloudformationStack#disable_rollback}.

---

##### `enableTerminationProtection`<sup>Optional</sup> <a name="enableTerminationProtection" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStackConfig.property.enableTerminationProtection"></a>

```typescript
public readonly enableTerminationProtection: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cloudformation_stack#enable_termination_protection CloudformationStack#enable_termination_protection}.

---

##### `notificationArNs`<sup>Optional</sup> <a name="notificationArNs" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStackConfig.property.notificationArNs"></a>

```typescript
public readonly notificationArNs: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cloudformation_stack#notification_ar_ns CloudformationStack#notification_ar_ns}.

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStackConfig.property.parameters"></a>

```typescript
public readonly parameters: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cloudformation_stack#parameters CloudformationStack#parameters}.

---

##### `roleArn`<sup>Optional</sup> <a name="roleArn" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStackConfig.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cloudformation_stack#role_arn CloudformationStack#role_arn}.

---

##### `stackPolicyBody`<sup>Optional</sup> <a name="stackPolicyBody" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStackConfig.property.stackPolicyBody"></a>

```typescript
public readonly stackPolicyBody: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cloudformation_stack#stack_policy_body CloudformationStack#stack_policy_body}.

---

##### `stackPolicyUrl`<sup>Optional</sup> <a name="stackPolicyUrl" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStackConfig.property.stackPolicyUrl"></a>

```typescript
public readonly stackPolicyUrl: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cloudformation_stack#stack_policy_url CloudformationStack#stack_policy_url}.

---

##### `stackStatusReason`<sup>Optional</sup> <a name="stackStatusReason" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStackConfig.property.stackStatusReason"></a>

```typescript
public readonly stackStatusReason: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cloudformation_stack#stack_status_reason CloudformationStack#stack_status_reason}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStackConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | CloudformationStackTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStackTags">CloudformationStackTags</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cloudformation_stack#tags CloudformationStack#tags}.

---

##### `templateBody`<sup>Optional</sup> <a name="templateBody" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStackConfig.property.templateBody"></a>

```typescript
public readonly templateBody: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cloudformation_stack#template_body CloudformationStack#template_body}.

---

##### `templateUrl`<sup>Optional</sup> <a name="templateUrl" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStackConfig.property.templateUrl"></a>

```typescript
public readonly templateUrl: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cloudformation_stack#template_url CloudformationStack#template_url}.

---

##### `timeoutInMinutes`<sup>Optional</sup> <a name="timeoutInMinutes" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStackConfig.property.timeoutInMinutes"></a>

```typescript
public readonly timeoutInMinutes: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cloudformation_stack#timeout_in_minutes CloudformationStack#timeout_in_minutes}.

---

### CloudformationStackOutputs <a name="CloudformationStackOutputs" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStackOutputs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStackOutputs.Initializer"></a>

```typescript
import { cloudformationStack } from '@cdktn/provider-awscc'

const cloudformationStackOutputs: cloudformationStack.CloudformationStackOutputs = { ... }
```


### CloudformationStackTags <a name="CloudformationStackTags" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStackTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStackTags.Initializer"></a>

```typescript
import { cloudformationStack } from '@cdktn/provider-awscc'

const cloudformationStackTags: cloudformationStack.CloudformationStackTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStackTags.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cloudformation_stack#key CloudformationStack#key}. |
| <code><a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStackTags.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cloudformation_stack#value CloudformationStack#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStackTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cloudformation_stack#key CloudformationStack#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStackTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cloudformation_stack#value CloudformationStack#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### CloudformationStackOutputsList <a name="CloudformationStackOutputsList" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStackOutputsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStackOutputsList.Initializer"></a>

```typescript
import { cloudformationStack } from '@cdktn/provider-awscc'

new cloudformationStack.CloudformationStackOutputsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStackOutputsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStackOutputsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStackOutputsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStackOutputsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStackOutputsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStackOutputsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStackOutputsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStackOutputsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStackOutputsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStackOutputsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStackOutputsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStackOutputsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStackOutputsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStackOutputsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStackOutputsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStackOutputsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStackOutputsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStackOutputsList.get"></a>

```typescript
public get(index: number): CloudformationStackOutputsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStackOutputsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStackOutputsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStackOutputsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStackOutputsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStackOutputsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### CloudformationStackOutputsOutputReference <a name="CloudformationStackOutputsOutputReference" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStackOutputsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStackOutputsOutputReference.Initializer"></a>

```typescript
import { cloudformationStack } from '@cdktn/provider-awscc'

new cloudformationStack.CloudformationStackOutputsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStackOutputsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStackOutputsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStackOutputsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStackOutputsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStackOutputsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStackOutputsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStackOutputsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStackOutputsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStackOutputsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStackOutputsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStackOutputsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStackOutputsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStackOutputsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStackOutputsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStackOutputsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStackOutputsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStackOutputsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStackOutputsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStackOutputsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStackOutputsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStackOutputsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStackOutputsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStackOutputsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStackOutputsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStackOutputsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStackOutputsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStackOutputsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStackOutputsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStackOutputsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStackOutputsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStackOutputsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStackOutputsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStackOutputsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStackOutputsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStackOutputsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStackOutputsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStackOutputsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStackOutputsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStackOutputsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStackOutputsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStackOutputsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStackOutputsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStackOutputsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStackOutputsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStackOutputsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStackOutputsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStackOutputsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStackOutputsOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStackOutputsOutputReference.property.exportName">exportName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStackOutputsOutputReference.property.outputKey">outputKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStackOutputsOutputReference.property.outputValue">outputValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStackOutputsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStackOutputs">CloudformationStackOutputs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStackOutputsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStackOutputsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStackOutputsOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `exportName`<sup>Required</sup> <a name="exportName" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStackOutputsOutputReference.property.exportName"></a>

```typescript
public readonly exportName: string;
```

- *Type:* string

---

##### `outputKey`<sup>Required</sup> <a name="outputKey" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStackOutputsOutputReference.property.outputKey"></a>

```typescript
public readonly outputKey: string;
```

- *Type:* string

---

##### `outputValue`<sup>Required</sup> <a name="outputValue" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStackOutputsOutputReference.property.outputValue"></a>

```typescript
public readonly outputValue: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStackOutputsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CloudformationStackOutputs;
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStackOutputs">CloudformationStackOutputs</a>

---


### CloudformationStackTagsList <a name="CloudformationStackTagsList" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStackTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStackTagsList.Initializer"></a>

```typescript
import { cloudformationStack } from '@cdktn/provider-awscc'

new cloudformationStack.CloudformationStackTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStackTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStackTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStackTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStackTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStackTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStackTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStackTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStackTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStackTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStackTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStackTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStackTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStackTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStackTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStackTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStackTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStackTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStackTagsList.get"></a>

```typescript
public get(index: number): CloudformationStackTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStackTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStackTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStackTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStackTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStackTags">CloudformationStackTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStackTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStackTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStackTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CloudformationStackTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStackTags">CloudformationStackTags</a>[]

---


### CloudformationStackTagsOutputReference <a name="CloudformationStackTagsOutputReference" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStackTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStackTagsOutputReference.Initializer"></a>

```typescript
import { cloudformationStack } from '@cdktn/provider-awscc'

new cloudformationStack.CloudformationStackTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStackTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStackTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStackTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStackTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStackTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStackTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStackTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStackTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStackTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStackTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStackTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStackTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStackTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStackTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStackTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStackTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStackTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStackTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStackTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStackTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStackTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStackTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStackTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStackTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStackTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStackTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStackTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStackTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStackTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStackTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStackTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStackTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStackTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStackTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStackTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStackTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStackTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStackTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStackTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStackTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStackTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStackTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStackTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStackTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStackTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStackTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStackTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStackTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStackTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStackTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStackTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStackTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStackTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStackTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStackTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStackTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStackTags">CloudformationStackTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStackTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStackTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStackTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStackTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStackTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStackTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cloudformationStack.CloudformationStackTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CloudformationStackTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudformationStack.CloudformationStackTags">CloudformationStackTags</a>

---



