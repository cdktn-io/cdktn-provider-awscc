# `cloudformationChangeSet` Submodule <a name="`cloudformationChangeSet` Submodule" id="@cdktn/provider-awscc.cloudformationChangeSet"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudformationChangeSet <a name="CloudformationChangeSet" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudformation_change_set awscc_cloudformation_change_set}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.Initializer"></a>

```typescript
import { cloudformationChangeSet } from '@cdktn/provider-awscc'

new cloudformationChangeSet.CloudformationChangeSet(scope: Construct, id: string, config: CloudformationChangeSetConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetConfig">CloudformationChangeSetConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetConfig">CloudformationChangeSetConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.resetCapabilities">resetCapabilities</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.resetChangeSetType">resetChangeSetType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.resetDeploymentMode">resetDeploymentMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.resetImportExistingResources">resetImportExistingResources</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.resetIncludeNestedStacks">resetIncludeNestedStacks</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.resetNotificationArNs">resetNotificationArNs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.resetOnStackFailure">resetOnStackFailure</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.resetRoleArn">resetRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.resetTemplateBody">resetTemplateBody</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.resetTemplateUrl">resetTemplateUrl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.resetUsePreviousTemplate">resetUsePreviousTemplate</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.putTags"></a>

```typescript
public putTags(value: IResolvable | CloudformationChangeSetTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTags">CloudformationChangeSetTags</a>[]

---

##### `resetCapabilities` <a name="resetCapabilities" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.resetCapabilities"></a>

```typescript
public resetCapabilities(): void
```

##### `resetChangeSetType` <a name="resetChangeSetType" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.resetChangeSetType"></a>

```typescript
public resetChangeSetType(): void
```

##### `resetDeploymentMode` <a name="resetDeploymentMode" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.resetDeploymentMode"></a>

```typescript
public resetDeploymentMode(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetImportExistingResources` <a name="resetImportExistingResources" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.resetImportExistingResources"></a>

```typescript
public resetImportExistingResources(): void
```

##### `resetIncludeNestedStacks` <a name="resetIncludeNestedStacks" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.resetIncludeNestedStacks"></a>

```typescript
public resetIncludeNestedStacks(): void
```

##### `resetNotificationArNs` <a name="resetNotificationArNs" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.resetNotificationArNs"></a>

```typescript
public resetNotificationArNs(): void
```

##### `resetOnStackFailure` <a name="resetOnStackFailure" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.resetOnStackFailure"></a>

```typescript
public resetOnStackFailure(): void
```

##### `resetRoleArn` <a name="resetRoleArn" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.resetRoleArn"></a>

```typescript
public resetRoleArn(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTemplateBody` <a name="resetTemplateBody" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.resetTemplateBody"></a>

```typescript
public resetTemplateBody(): void
```

##### `resetTemplateUrl` <a name="resetTemplateUrl" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.resetTemplateUrl"></a>

```typescript
public resetTemplateUrl(): void
```

##### `resetUsePreviousTemplate` <a name="resetUsePreviousTemplate" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.resetUsePreviousTemplate"></a>

```typescript
public resetUsePreviousTemplate(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a CloudformationChangeSet resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.isConstruct"></a>

```typescript
import { cloudformationChangeSet } from '@cdktn/provider-awscc'

cloudformationChangeSet.CloudformationChangeSet.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.isTerraformElement"></a>

```typescript
import { cloudformationChangeSet } from '@cdktn/provider-awscc'

cloudformationChangeSet.CloudformationChangeSet.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.isTerraformResource"></a>

```typescript
import { cloudformationChangeSet } from '@cdktn/provider-awscc'

cloudformationChangeSet.CloudformationChangeSet.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.generateConfigForImport"></a>

```typescript
import { cloudformationChangeSet } from '@cdktn/provider-awscc'

cloudformationChangeSet.CloudformationChangeSet.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a CloudformationChangeSet resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the CloudformationChangeSet to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing CloudformationChangeSet that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudformation_change_set#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the CloudformationChangeSet to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.changeSetId">changeSetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.creationTime">creationTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.stackId">stackId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsList">CloudformationChangeSetTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.capabilitiesInput">capabilitiesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.changeSetNameInput">changeSetNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.changeSetTypeInput">changeSetTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.deploymentModeInput">deploymentModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.importExistingResourcesInput">importExistingResourcesInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.includeNestedStacksInput">includeNestedStacksInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.notificationArNsInput">notificationArNsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.onStackFailureInput">onStackFailureInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.roleArnInput">roleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.stackNameInput">stackNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTags">CloudformationChangeSetTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.templateBodyInput">templateBodyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.templateUrlInput">templateUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.usePreviousTemplateInput">usePreviousTemplateInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.capabilities">capabilities</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.changeSetName">changeSetName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.changeSetType">changeSetType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.deploymentMode">deploymentMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.importExistingResources">importExistingResources</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.includeNestedStacks">includeNestedStacks</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.notificationArNs">notificationArNs</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.onStackFailure">onStackFailure</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.roleArn">roleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.stackName">stackName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.templateBody">templateBody</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.templateUrl">templateUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.usePreviousTemplate">usePreviousTemplate</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `changeSetId`<sup>Required</sup> <a name="changeSetId" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.changeSetId"></a>

```typescript
public readonly changeSetId: string;
```

- *Type:* string

---

##### `creationTime`<sup>Required</sup> <a name="creationTime" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.creationTime"></a>

```typescript
public readonly creationTime: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `stackId`<sup>Required</sup> <a name="stackId" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.stackId"></a>

```typescript
public readonly stackId: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.tags"></a>

```typescript
public readonly tags: CloudformationChangeSetTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsList">CloudformationChangeSetTagsList</a>

---

##### `capabilitiesInput`<sup>Optional</sup> <a name="capabilitiesInput" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.capabilitiesInput"></a>

```typescript
public readonly capabilitiesInput: string[];
```

- *Type:* string[]

---

##### `changeSetNameInput`<sup>Optional</sup> <a name="changeSetNameInput" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.changeSetNameInput"></a>

```typescript
public readonly changeSetNameInput: string;
```

- *Type:* string

---

##### `changeSetTypeInput`<sup>Optional</sup> <a name="changeSetTypeInput" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.changeSetTypeInput"></a>

```typescript
public readonly changeSetTypeInput: string;
```

- *Type:* string

---

##### `deploymentModeInput`<sup>Optional</sup> <a name="deploymentModeInput" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.deploymentModeInput"></a>

```typescript
public readonly deploymentModeInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `importExistingResourcesInput`<sup>Optional</sup> <a name="importExistingResourcesInput" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.importExistingResourcesInput"></a>

```typescript
public readonly importExistingResourcesInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `includeNestedStacksInput`<sup>Optional</sup> <a name="includeNestedStacksInput" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.includeNestedStacksInput"></a>

```typescript
public readonly includeNestedStacksInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `notificationArNsInput`<sup>Optional</sup> <a name="notificationArNsInput" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.notificationArNsInput"></a>

```typescript
public readonly notificationArNsInput: string[];
```

- *Type:* string[]

---

##### `onStackFailureInput`<sup>Optional</sup> <a name="onStackFailureInput" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.onStackFailureInput"></a>

```typescript
public readonly onStackFailureInput: string;
```

- *Type:* string

---

##### `roleArnInput`<sup>Optional</sup> <a name="roleArnInput" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.roleArnInput"></a>

```typescript
public readonly roleArnInput: string;
```

- *Type:* string

---

##### `stackNameInput`<sup>Optional</sup> <a name="stackNameInput" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.stackNameInput"></a>

```typescript
public readonly stackNameInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | CloudformationChangeSetTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTags">CloudformationChangeSetTags</a>[]

---

##### `templateBodyInput`<sup>Optional</sup> <a name="templateBodyInput" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.templateBodyInput"></a>

```typescript
public readonly templateBodyInput: string;
```

- *Type:* string

---

##### `templateUrlInput`<sup>Optional</sup> <a name="templateUrlInput" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.templateUrlInput"></a>

```typescript
public readonly templateUrlInput: string;
```

- *Type:* string

---

##### `usePreviousTemplateInput`<sup>Optional</sup> <a name="usePreviousTemplateInput" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.usePreviousTemplateInput"></a>

```typescript
public readonly usePreviousTemplateInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `capabilities`<sup>Required</sup> <a name="capabilities" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.capabilities"></a>

```typescript
public readonly capabilities: string[];
```

- *Type:* string[]

---

##### `changeSetName`<sup>Required</sup> <a name="changeSetName" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.changeSetName"></a>

```typescript
public readonly changeSetName: string;
```

- *Type:* string

---

##### `changeSetType`<sup>Required</sup> <a name="changeSetType" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.changeSetType"></a>

```typescript
public readonly changeSetType: string;
```

- *Type:* string

---

##### `deploymentMode`<sup>Required</sup> <a name="deploymentMode" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.deploymentMode"></a>

```typescript
public readonly deploymentMode: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `importExistingResources`<sup>Required</sup> <a name="importExistingResources" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.importExistingResources"></a>

```typescript
public readonly importExistingResources: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `includeNestedStacks`<sup>Required</sup> <a name="includeNestedStacks" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.includeNestedStacks"></a>

```typescript
public readonly includeNestedStacks: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `notificationArNs`<sup>Required</sup> <a name="notificationArNs" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.notificationArNs"></a>

```typescript
public readonly notificationArNs: string[];
```

- *Type:* string[]

---

##### `onStackFailure`<sup>Required</sup> <a name="onStackFailure" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.onStackFailure"></a>

```typescript
public readonly onStackFailure: string;
```

- *Type:* string

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

---

##### `stackName`<sup>Required</sup> <a name="stackName" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.stackName"></a>

```typescript
public readonly stackName: string;
```

- *Type:* string

---

##### `templateBody`<sup>Required</sup> <a name="templateBody" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.templateBody"></a>

```typescript
public readonly templateBody: string;
```

- *Type:* string

---

##### `templateUrl`<sup>Required</sup> <a name="templateUrl" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.templateUrl"></a>

```typescript
public readonly templateUrl: string;
```

- *Type:* string

---

##### `usePreviousTemplate`<sup>Required</sup> <a name="usePreviousTemplate" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.usePreviousTemplate"></a>

```typescript
public readonly usePreviousTemplate: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSet.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CloudformationChangeSetConfig <a name="CloudformationChangeSetConfig" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetConfig.Initializer"></a>

```typescript
import { cloudformationChangeSet } from '@cdktn/provider-awscc'

const cloudformationChangeSetConfig: cloudformationChangeSet.CloudformationChangeSetConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetConfig.property.changeSetName">changeSetName</a></code> | <code>string</code> | The name of the change set. Must be unique among all change sets associated with the specified stack. |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetConfig.property.stackName">stackName</a></code> | <code>string</code> | The name or unique ID of the stack for which you are creating a change set. |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetConfig.property.capabilities">capabilities</a></code> | <code>string[]</code> | The capabilities that are allowed in the stack. |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetConfig.property.changeSetType">changeSetType</a></code> | <code>string</code> | The type of change set operation. |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetConfig.property.deploymentMode">deploymentMode</a></code> | <code>string</code> | Determines how CloudFormation handles configuration drift during deployment. |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetConfig.property.description">description</a></code> | <code>string</code> | A description to help you identify this change set. |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetConfig.property.importExistingResources">importExistingResources</a></code> | <code>boolean \| cdktn.IResolvable</code> | Indicates if the change set imports resources that already exist. |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetConfig.property.includeNestedStacks">includeNestedStacks</a></code> | <code>boolean \| cdktn.IResolvable</code> | Creates a change set for all nested stacks specified in the template. |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetConfig.property.notificationArNs">notificationArNs</a></code> | <code>string[]</code> | The ARNs of Amazon SNS topics that CloudFormation associates with the stack. |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetConfig.property.onStackFailure">onStackFailure</a></code> | <code>string</code> | Determines what action will be taken if stack creation fails. |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetConfig.property.roleArn">roleArn</a></code> | <code>string</code> | The ARN of an IAM role that CloudFormation assumes when executing the change set. |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTags">CloudformationChangeSetTags</a>[]</code> | Key-value pairs to associate with the change set. |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetConfig.property.templateBody">templateBody</a></code> | <code>string</code> | A structure that contains the body of the revised template. |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetConfig.property.templateUrl">templateUrl</a></code> | <code>string</code> | The URL of the file that contains the revised template. |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetConfig.property.usePreviousTemplate">usePreviousTemplate</a></code> | <code>boolean \| cdktn.IResolvable</code> | Whether to reuse the template associated with the stack to create the change set. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `changeSetName`<sup>Required</sup> <a name="changeSetName" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetConfig.property.changeSetName"></a>

```typescript
public readonly changeSetName: string;
```

- *Type:* string

The name of the change set. Must be unique among all change sets associated with the specified stack.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudformation_change_set#change_set_name CloudformationChangeSet#change_set_name}

---

##### `stackName`<sup>Required</sup> <a name="stackName" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetConfig.property.stackName"></a>

```typescript
public readonly stackName: string;
```

- *Type:* string

The name or unique ID of the stack for which you are creating a change set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudformation_change_set#stack_name CloudformationChangeSet#stack_name}

---

##### `capabilities`<sup>Optional</sup> <a name="capabilities" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetConfig.property.capabilities"></a>

```typescript
public readonly capabilities: string[];
```

- *Type:* string[]

The capabilities that are allowed in the stack.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudformation_change_set#capabilities CloudformationChangeSet#capabilities}

---

##### `changeSetType`<sup>Optional</sup> <a name="changeSetType" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetConfig.property.changeSetType"></a>

```typescript
public readonly changeSetType: string;
```

- *Type:* string

The type of change set operation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudformation_change_set#change_set_type CloudformationChangeSet#change_set_type}

---

##### `deploymentMode`<sup>Optional</sup> <a name="deploymentMode" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetConfig.property.deploymentMode"></a>

```typescript
public readonly deploymentMode: string;
```

- *Type:* string

Determines how CloudFormation handles configuration drift during deployment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudformation_change_set#deployment_mode CloudformationChangeSet#deployment_mode}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

A description to help you identify this change set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudformation_change_set#description CloudformationChangeSet#description}

---

##### `importExistingResources`<sup>Optional</sup> <a name="importExistingResources" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetConfig.property.importExistingResources"></a>

```typescript
public readonly importExistingResources: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Indicates if the change set imports resources that already exist.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudformation_change_set#import_existing_resources CloudformationChangeSet#import_existing_resources}

---

##### `includeNestedStacks`<sup>Optional</sup> <a name="includeNestedStacks" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetConfig.property.includeNestedStacks"></a>

```typescript
public readonly includeNestedStacks: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Creates a change set for all nested stacks specified in the template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudformation_change_set#include_nested_stacks CloudformationChangeSet#include_nested_stacks}

---

##### `notificationArNs`<sup>Optional</sup> <a name="notificationArNs" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetConfig.property.notificationArNs"></a>

```typescript
public readonly notificationArNs: string[];
```

- *Type:* string[]

The ARNs of Amazon SNS topics that CloudFormation associates with the stack.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudformation_change_set#notification_ar_ns CloudformationChangeSet#notification_ar_ns}

---

##### `onStackFailure`<sup>Optional</sup> <a name="onStackFailure" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetConfig.property.onStackFailure"></a>

```typescript
public readonly onStackFailure: string;
```

- *Type:* string

Determines what action will be taken if stack creation fails.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudformation_change_set#on_stack_failure CloudformationChangeSet#on_stack_failure}

---

##### `roleArn`<sup>Optional</sup> <a name="roleArn" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetConfig.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

The ARN of an IAM role that CloudFormation assumes when executing the change set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudformation_change_set#role_arn CloudformationChangeSet#role_arn}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | CloudformationChangeSetTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTags">CloudformationChangeSetTags</a>[]

Key-value pairs to associate with the change set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudformation_change_set#tags CloudformationChangeSet#tags}

---

##### `templateBody`<sup>Optional</sup> <a name="templateBody" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetConfig.property.templateBody"></a>

```typescript
public readonly templateBody: string;
```

- *Type:* string

A structure that contains the body of the revised template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudformation_change_set#template_body CloudformationChangeSet#template_body}

---

##### `templateUrl`<sup>Optional</sup> <a name="templateUrl" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetConfig.property.templateUrl"></a>

```typescript
public readonly templateUrl: string;
```

- *Type:* string

The URL of the file that contains the revised template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudformation_change_set#template_url CloudformationChangeSet#template_url}

---

##### `usePreviousTemplate`<sup>Optional</sup> <a name="usePreviousTemplate" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetConfig.property.usePreviousTemplate"></a>

```typescript
public readonly usePreviousTemplate: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Whether to reuse the template associated with the stack to create the change set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudformation_change_set#use_previous_template CloudformationChangeSet#use_previous_template}

---

### CloudformationChangeSetTags <a name="CloudformationChangeSetTags" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTags.Initializer"></a>

```typescript
import { cloudformationChangeSet } from '@cdktn/provider-awscc'

const cloudformationChangeSetTags: cloudformationChangeSet.CloudformationChangeSetTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTags.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudformation_change_set#key CloudformationChangeSet#key}. |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTags.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudformation_change_set#value CloudformationChangeSet#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudformation_change_set#key CloudformationChangeSet#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudformation_change_set#value CloudformationChangeSet#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### CloudformationChangeSetTagsList <a name="CloudformationChangeSetTagsList" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsList.Initializer"></a>

```typescript
import { cloudformationChangeSet } from '@cdktn/provider-awscc'

new cloudformationChangeSet.CloudformationChangeSetTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsList.get"></a>

```typescript
public get(index: number): CloudformationChangeSetTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTags">CloudformationChangeSetTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CloudformationChangeSetTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTags">CloudformationChangeSetTags</a>[]

---


### CloudformationChangeSetTagsOutputReference <a name="CloudformationChangeSetTagsOutputReference" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsOutputReference.Initializer"></a>

```typescript
import { cloudformationChangeSet } from '@cdktn/provider-awscc'

new cloudformationChangeSet.CloudformationChangeSetTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTags">CloudformationChangeSetTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CloudformationChangeSetTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudformationChangeSet.CloudformationChangeSetTags">CloudformationChangeSetTags</a>

---



