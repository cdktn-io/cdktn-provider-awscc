# `iotBillingGroup` Submodule <a name="`iotBillingGroup` Submodule" id="@cdktn/provider-awscc.iotBillingGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IotBillingGroup <a name="IotBillingGroup" id="@cdktn/provider-awscc.iotBillingGroup.IotBillingGroup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iot_billing_group awscc_iot_billing_group}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotBillingGroup.IotBillingGroup.Initializer"></a>

```typescript
import { iotBillingGroup } from '@cdktn/provider-awscc'

new iotBillingGroup.IotBillingGroup(scope: Construct, id: string, config?: IotBillingGroupConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotBillingGroup.IotBillingGroup.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.iotBillingGroup.IotBillingGroup.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.iotBillingGroup.IotBillingGroup.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.iotBillingGroup.IotBillingGroupConfig">IotBillingGroupConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.iotBillingGroup.IotBillingGroup.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotBillingGroup.IotBillingGroup.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-awscc.iotBillingGroup.IotBillingGroup.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotBillingGroup.IotBillingGroupConfig">IotBillingGroupConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotBillingGroup.IotBillingGroup.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.iotBillingGroup.IotBillingGroup.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.iotBillingGroup.IotBillingGroup.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotBillingGroup.IotBillingGroup.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.iotBillingGroup.IotBillingGroup.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.iotBillingGroup.IotBillingGroup.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotBillingGroup.IotBillingGroup.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotBillingGroup.IotBillingGroup.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.iotBillingGroup.IotBillingGroup.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.iotBillingGroup.IotBillingGroup.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotBillingGroup.IotBillingGroup.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotBillingGroup.IotBillingGroup.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotBillingGroup.IotBillingGroup.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotBillingGroup.IotBillingGroup.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotBillingGroup.IotBillingGroup.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotBillingGroup.IotBillingGroup.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotBillingGroup.IotBillingGroup.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotBillingGroup.IotBillingGroup.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotBillingGroup.IotBillingGroup.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotBillingGroup.IotBillingGroup.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotBillingGroup.IotBillingGroup.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotBillingGroup.IotBillingGroup.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.iotBillingGroup.IotBillingGroup.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.iotBillingGroup.IotBillingGroup.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.iotBillingGroup.IotBillingGroup.putBillingGroupProperties">putBillingGroupProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotBillingGroup.IotBillingGroup.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotBillingGroup.IotBillingGroup.resetBillingGroupName">resetBillingGroupName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotBillingGroup.IotBillingGroup.resetBillingGroupProperties">resetBillingGroupProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotBillingGroup.IotBillingGroup.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotBillingGroup.IotBillingGroup.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.iotBillingGroup.IotBillingGroup.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.iotBillingGroup.IotBillingGroup.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.iotBillingGroup.IotBillingGroup.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.iotBillingGroup.IotBillingGroup.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotBillingGroup.IotBillingGroup.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.iotBillingGroup.IotBillingGroup.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.iotBillingGroup.IotBillingGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.iotBillingGroup.IotBillingGroup.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.iotBillingGroup.IotBillingGroup.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.iotBillingGroup.IotBillingGroup.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.iotBillingGroup.IotBillingGroup.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.iotBillingGroup.IotBillingGroup.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.iotBillingGroup.IotBillingGroup.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotBillingGroup.IotBillingGroup.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotBillingGroup.IotBillingGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotBillingGroup.IotBillingGroup.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotBillingGroup.IotBillingGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotBillingGroup.IotBillingGroup.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotBillingGroup.IotBillingGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotBillingGroup.IotBillingGroup.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotBillingGroup.IotBillingGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotBillingGroup.IotBillingGroup.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotBillingGroup.IotBillingGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotBillingGroup.IotBillingGroup.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotBillingGroup.IotBillingGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotBillingGroup.IotBillingGroup.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotBillingGroup.IotBillingGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotBillingGroup.IotBillingGroup.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotBillingGroup.IotBillingGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotBillingGroup.IotBillingGroup.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotBillingGroup.IotBillingGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.iotBillingGroup.IotBillingGroup.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.iotBillingGroup.IotBillingGroup.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotBillingGroup.IotBillingGroup.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotBillingGroup.IotBillingGroup.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotBillingGroup.IotBillingGroup.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotBillingGroup.IotBillingGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.iotBillingGroup.IotBillingGroup.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotBillingGroup.IotBillingGroup.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.iotBillingGroup.IotBillingGroup.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.iotBillingGroup.IotBillingGroup.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.iotBillingGroup.IotBillingGroup.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.iotBillingGroup.IotBillingGroup.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotBillingGroup.IotBillingGroup.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putBillingGroupProperties` <a name="putBillingGroupProperties" id="@cdktn/provider-awscc.iotBillingGroup.IotBillingGroup.putBillingGroupProperties"></a>

```typescript
public putBillingGroupProperties(value: IotBillingGroupBillingGroupProperties): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotBillingGroup.IotBillingGroup.putBillingGroupProperties.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotBillingGroup.IotBillingGroupBillingGroupProperties">IotBillingGroupBillingGroupProperties</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.iotBillingGroup.IotBillingGroup.putTags"></a>

```typescript
public putTags(value: IResolvable | IotBillingGroupTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotBillingGroup.IotBillingGroup.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotBillingGroup.IotBillingGroupTags">IotBillingGroupTags</a>[]

---

##### `resetBillingGroupName` <a name="resetBillingGroupName" id="@cdktn/provider-awscc.iotBillingGroup.IotBillingGroup.resetBillingGroupName"></a>

```typescript
public resetBillingGroupName(): void
```

##### `resetBillingGroupProperties` <a name="resetBillingGroupProperties" id="@cdktn/provider-awscc.iotBillingGroup.IotBillingGroup.resetBillingGroupProperties"></a>

```typescript
public resetBillingGroupProperties(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.iotBillingGroup.IotBillingGroup.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotBillingGroup.IotBillingGroup.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.iotBillingGroup.IotBillingGroup.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotBillingGroup.IotBillingGroup.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotBillingGroup.IotBillingGroup.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a IotBillingGroup resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.iotBillingGroup.IotBillingGroup.isConstruct"></a>

```typescript
import { iotBillingGroup } from '@cdktn/provider-awscc'

iotBillingGroup.IotBillingGroup.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.iotBillingGroup.IotBillingGroup.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.iotBillingGroup.IotBillingGroup.isTerraformElement"></a>

```typescript
import { iotBillingGroup } from '@cdktn/provider-awscc'

iotBillingGroup.IotBillingGroup.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.iotBillingGroup.IotBillingGroup.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.iotBillingGroup.IotBillingGroup.isTerraformResource"></a>

```typescript
import { iotBillingGroup } from '@cdktn/provider-awscc'

iotBillingGroup.IotBillingGroup.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.iotBillingGroup.IotBillingGroup.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.iotBillingGroup.IotBillingGroup.generateConfigForImport"></a>

```typescript
import { iotBillingGroup } from '@cdktn/provider-awscc'

iotBillingGroup.IotBillingGroup.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a IotBillingGroup resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.iotBillingGroup.IotBillingGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.iotBillingGroup.IotBillingGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the IotBillingGroup to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.iotBillingGroup.IotBillingGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing IotBillingGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iot_billing_group#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotBillingGroup.IotBillingGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the IotBillingGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotBillingGroup.IotBillingGroup.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.iotBillingGroup.IotBillingGroup.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotBillingGroup.IotBillingGroup.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotBillingGroup.IotBillingGroup.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotBillingGroup.IotBillingGroup.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotBillingGroup.IotBillingGroup.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotBillingGroup.IotBillingGroup.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotBillingGroup.IotBillingGroup.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotBillingGroup.IotBillingGroup.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotBillingGroup.IotBillingGroup.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotBillingGroup.IotBillingGroup.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotBillingGroup.IotBillingGroup.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotBillingGroup.IotBillingGroup.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotBillingGroup.IotBillingGroup.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotBillingGroup.IotBillingGroup.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotBillingGroup.IotBillingGroup.property.billingGroupId">billingGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotBillingGroup.IotBillingGroup.property.billingGroupProperties">billingGroupProperties</a></code> | <code><a href="#@cdktn/provider-awscc.iotBillingGroup.IotBillingGroupBillingGroupPropertiesOutputReference">IotBillingGroupBillingGroupPropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotBillingGroup.IotBillingGroup.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotBillingGroup.IotBillingGroup.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.iotBillingGroup.IotBillingGroupTagsList">IotBillingGroupTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotBillingGroup.IotBillingGroup.property.billingGroupNameInput">billingGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotBillingGroup.IotBillingGroup.property.billingGroupPropertiesInput">billingGroupPropertiesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotBillingGroup.IotBillingGroupBillingGroupProperties">IotBillingGroupBillingGroupProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotBillingGroup.IotBillingGroup.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotBillingGroup.IotBillingGroupTags">IotBillingGroupTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotBillingGroup.IotBillingGroup.property.billingGroupName">billingGroupName</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.iotBillingGroup.IotBillingGroup.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.iotBillingGroup.IotBillingGroup.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotBillingGroup.IotBillingGroup.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.iotBillingGroup.IotBillingGroup.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.iotBillingGroup.IotBillingGroup.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.iotBillingGroup.IotBillingGroup.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.iotBillingGroup.IotBillingGroup.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.iotBillingGroup.IotBillingGroup.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.iotBillingGroup.IotBillingGroup.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.iotBillingGroup.IotBillingGroup.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.iotBillingGroup.IotBillingGroup.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.iotBillingGroup.IotBillingGroup.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotBillingGroup.IotBillingGroup.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.iotBillingGroup.IotBillingGroup.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.iotBillingGroup.IotBillingGroup.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `billingGroupId`<sup>Required</sup> <a name="billingGroupId" id="@cdktn/provider-awscc.iotBillingGroup.IotBillingGroup.property.billingGroupId"></a>

```typescript
public readonly billingGroupId: string;
```

- *Type:* string

---

##### `billingGroupProperties`<sup>Required</sup> <a name="billingGroupProperties" id="@cdktn/provider-awscc.iotBillingGroup.IotBillingGroup.property.billingGroupProperties"></a>

```typescript
public readonly billingGroupProperties: IotBillingGroupBillingGroupPropertiesOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.iotBillingGroup.IotBillingGroupBillingGroupPropertiesOutputReference">IotBillingGroupBillingGroupPropertiesOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotBillingGroup.IotBillingGroup.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.iotBillingGroup.IotBillingGroup.property.tags"></a>

```typescript
public readonly tags: IotBillingGroupTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.iotBillingGroup.IotBillingGroupTagsList">IotBillingGroupTagsList</a>

---

##### `billingGroupNameInput`<sup>Optional</sup> <a name="billingGroupNameInput" id="@cdktn/provider-awscc.iotBillingGroup.IotBillingGroup.property.billingGroupNameInput"></a>

```typescript
public readonly billingGroupNameInput: string;
```

- *Type:* string

---

##### `billingGroupPropertiesInput`<sup>Optional</sup> <a name="billingGroupPropertiesInput" id="@cdktn/provider-awscc.iotBillingGroup.IotBillingGroup.property.billingGroupPropertiesInput"></a>

```typescript
public readonly billingGroupPropertiesInput: IResolvable | IotBillingGroupBillingGroupProperties;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotBillingGroup.IotBillingGroupBillingGroupProperties">IotBillingGroupBillingGroupProperties</a>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.iotBillingGroup.IotBillingGroup.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | IotBillingGroupTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotBillingGroup.IotBillingGroupTags">IotBillingGroupTags</a>[]

---

##### `billingGroupName`<sup>Required</sup> <a name="billingGroupName" id="@cdktn/provider-awscc.iotBillingGroup.IotBillingGroup.property.billingGroupName"></a>

```typescript
public readonly billingGroupName: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotBillingGroup.IotBillingGroup.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.iotBillingGroup.IotBillingGroup.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### IotBillingGroupBillingGroupProperties <a name="IotBillingGroupBillingGroupProperties" id="@cdktn/provider-awscc.iotBillingGroup.IotBillingGroupBillingGroupProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotBillingGroup.IotBillingGroupBillingGroupProperties.Initializer"></a>

```typescript
import { iotBillingGroup } from '@cdktn/provider-awscc'

const iotBillingGroupBillingGroupProperties: iotBillingGroup.IotBillingGroupBillingGroupProperties = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotBillingGroup.IotBillingGroupBillingGroupProperties.property.billingGroupDescription">billingGroupDescription</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iot_billing_group#billing_group_description IotBillingGroup#billing_group_description}. |

---

##### `billingGroupDescription`<sup>Optional</sup> <a name="billingGroupDescription" id="@cdktn/provider-awscc.iotBillingGroup.IotBillingGroupBillingGroupProperties.property.billingGroupDescription"></a>

```typescript
public readonly billingGroupDescription: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iot_billing_group#billing_group_description IotBillingGroup#billing_group_description}.

---

### IotBillingGroupConfig <a name="IotBillingGroupConfig" id="@cdktn/provider-awscc.iotBillingGroup.IotBillingGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotBillingGroup.IotBillingGroupConfig.Initializer"></a>

```typescript
import { iotBillingGroup } from '@cdktn/provider-awscc'

const iotBillingGroupConfig: iotBillingGroup.IotBillingGroupConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotBillingGroup.IotBillingGroupConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotBillingGroup.IotBillingGroupConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotBillingGroup.IotBillingGroupConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotBillingGroup.IotBillingGroupConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotBillingGroup.IotBillingGroupConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotBillingGroup.IotBillingGroupConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotBillingGroup.IotBillingGroupConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotBillingGroup.IotBillingGroupConfig.property.billingGroupName">billingGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iot_billing_group#billing_group_name IotBillingGroup#billing_group_name}. |
| <code><a href="#@cdktn/provider-awscc.iotBillingGroup.IotBillingGroupConfig.property.billingGroupProperties">billingGroupProperties</a></code> | <code><a href="#@cdktn/provider-awscc.iotBillingGroup.IotBillingGroupBillingGroupProperties">IotBillingGroupBillingGroupProperties</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iot_billing_group#billing_group_properties IotBillingGroup#billing_group_properties}. |
| <code><a href="#@cdktn/provider-awscc.iotBillingGroup.IotBillingGroupConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotBillingGroup.IotBillingGroupTags">IotBillingGroupTags</a>[]</code> | An array of key-value pairs to apply to this resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.iotBillingGroup.IotBillingGroupConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.iotBillingGroup.IotBillingGroupConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.iotBillingGroup.IotBillingGroupConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.iotBillingGroup.IotBillingGroupConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.iotBillingGroup.IotBillingGroupConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotBillingGroup.IotBillingGroupConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.iotBillingGroup.IotBillingGroupConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `billingGroupName`<sup>Optional</sup> <a name="billingGroupName" id="@cdktn/provider-awscc.iotBillingGroup.IotBillingGroupConfig.property.billingGroupName"></a>

```typescript
public readonly billingGroupName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iot_billing_group#billing_group_name IotBillingGroup#billing_group_name}.

---

##### `billingGroupProperties`<sup>Optional</sup> <a name="billingGroupProperties" id="@cdktn/provider-awscc.iotBillingGroup.IotBillingGroupConfig.property.billingGroupProperties"></a>

```typescript
public readonly billingGroupProperties: IotBillingGroupBillingGroupProperties;
```

- *Type:* <a href="#@cdktn/provider-awscc.iotBillingGroup.IotBillingGroupBillingGroupProperties">IotBillingGroupBillingGroupProperties</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iot_billing_group#billing_group_properties IotBillingGroup#billing_group_properties}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.iotBillingGroup.IotBillingGroupConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | IotBillingGroupTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotBillingGroup.IotBillingGroupTags">IotBillingGroupTags</a>[]

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iot_billing_group#tags IotBillingGroup#tags}

---

### IotBillingGroupTags <a name="IotBillingGroupTags" id="@cdktn/provider-awscc.iotBillingGroup.IotBillingGroupTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotBillingGroup.IotBillingGroupTags.Initializer"></a>

```typescript
import { iotBillingGroup } from '@cdktn/provider-awscc'

const iotBillingGroupTags: iotBillingGroup.IotBillingGroupTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotBillingGroup.IotBillingGroupTags.property.key">key</a></code> | <code>string</code> | Tag key (1-128 chars). No 'aws:' prefix. Allows: [A-Za-z0-9 _.:/=+-]. |
| <code><a href="#@cdktn/provider-awscc.iotBillingGroup.IotBillingGroupTags.property.value">value</a></code> | <code>string</code> | Tag value (1-256 chars). No 'aws:' prefix. Allows: [A-Za-z0-9 _.:/=+-]. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.iotBillingGroup.IotBillingGroupTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Tag key (1-128 chars). No 'aws:' prefix. Allows: [A-Za-z0-9 _.:/=+-].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iot_billing_group#key IotBillingGroup#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.iotBillingGroup.IotBillingGroupTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Tag value (1-256 chars). No 'aws:' prefix. Allows: [A-Za-z0-9 _.:/=+-].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iot_billing_group#value IotBillingGroup#value}

---

## Classes <a name="Classes" id="Classes"></a>

### IotBillingGroupBillingGroupPropertiesOutputReference <a name="IotBillingGroupBillingGroupPropertiesOutputReference" id="@cdktn/provider-awscc.iotBillingGroup.IotBillingGroupBillingGroupPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotBillingGroup.IotBillingGroupBillingGroupPropertiesOutputReference.Initializer"></a>

```typescript
import { iotBillingGroup } from '@cdktn/provider-awscc'

new iotBillingGroup.IotBillingGroupBillingGroupPropertiesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotBillingGroup.IotBillingGroupBillingGroupPropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotBillingGroup.IotBillingGroupBillingGroupPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotBillingGroup.IotBillingGroupBillingGroupPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotBillingGroup.IotBillingGroupBillingGroupPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotBillingGroup.IotBillingGroupBillingGroupPropertiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotBillingGroup.IotBillingGroupBillingGroupPropertiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotBillingGroup.IotBillingGroupBillingGroupPropertiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotBillingGroup.IotBillingGroupBillingGroupPropertiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotBillingGroup.IotBillingGroupBillingGroupPropertiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotBillingGroup.IotBillingGroupBillingGroupPropertiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotBillingGroup.IotBillingGroupBillingGroupPropertiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotBillingGroup.IotBillingGroupBillingGroupPropertiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotBillingGroup.IotBillingGroupBillingGroupPropertiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotBillingGroup.IotBillingGroupBillingGroupPropertiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotBillingGroup.IotBillingGroupBillingGroupPropertiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotBillingGroup.IotBillingGroupBillingGroupPropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotBillingGroup.IotBillingGroupBillingGroupPropertiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotBillingGroup.IotBillingGroupBillingGroupPropertiesOutputReference.resetBillingGroupDescription">resetBillingGroupDescription</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotBillingGroup.IotBillingGroupBillingGroupPropertiesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotBillingGroup.IotBillingGroupBillingGroupPropertiesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotBillingGroup.IotBillingGroupBillingGroupPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotBillingGroup.IotBillingGroupBillingGroupPropertiesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotBillingGroup.IotBillingGroupBillingGroupPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotBillingGroup.IotBillingGroupBillingGroupPropertiesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotBillingGroup.IotBillingGroupBillingGroupPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotBillingGroup.IotBillingGroupBillingGroupPropertiesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotBillingGroup.IotBillingGroupBillingGroupPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotBillingGroup.IotBillingGroupBillingGroupPropertiesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotBillingGroup.IotBillingGroupBillingGroupPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotBillingGroup.IotBillingGroupBillingGroupPropertiesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotBillingGroup.IotBillingGroupBillingGroupPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotBillingGroup.IotBillingGroupBillingGroupPropertiesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotBillingGroup.IotBillingGroupBillingGroupPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotBillingGroup.IotBillingGroupBillingGroupPropertiesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotBillingGroup.IotBillingGroupBillingGroupPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotBillingGroup.IotBillingGroupBillingGroupPropertiesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotBillingGroup.IotBillingGroupBillingGroupPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotBillingGroup.IotBillingGroupBillingGroupPropertiesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotBillingGroup.IotBillingGroupBillingGroupPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotBillingGroup.IotBillingGroupBillingGroupPropertiesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotBillingGroup.IotBillingGroupBillingGroupPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotBillingGroup.IotBillingGroupBillingGroupPropertiesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBillingGroupDescription` <a name="resetBillingGroupDescription" id="@cdktn/provider-awscc.iotBillingGroup.IotBillingGroupBillingGroupPropertiesOutputReference.resetBillingGroupDescription"></a>

```typescript
public resetBillingGroupDescription(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotBillingGroup.IotBillingGroupBillingGroupPropertiesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotBillingGroup.IotBillingGroupBillingGroupPropertiesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotBillingGroup.IotBillingGroupBillingGroupPropertiesOutputReference.property.billingGroupDescriptionInput">billingGroupDescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotBillingGroup.IotBillingGroupBillingGroupPropertiesOutputReference.property.billingGroupDescription">billingGroupDescription</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotBillingGroup.IotBillingGroupBillingGroupPropertiesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotBillingGroup.IotBillingGroupBillingGroupProperties">IotBillingGroupBillingGroupProperties</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotBillingGroup.IotBillingGroupBillingGroupPropertiesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotBillingGroup.IotBillingGroupBillingGroupPropertiesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `billingGroupDescriptionInput`<sup>Optional</sup> <a name="billingGroupDescriptionInput" id="@cdktn/provider-awscc.iotBillingGroup.IotBillingGroupBillingGroupPropertiesOutputReference.property.billingGroupDescriptionInput"></a>

```typescript
public readonly billingGroupDescriptionInput: string;
```

- *Type:* string

---

##### `billingGroupDescription`<sup>Required</sup> <a name="billingGroupDescription" id="@cdktn/provider-awscc.iotBillingGroup.IotBillingGroupBillingGroupPropertiesOutputReference.property.billingGroupDescription"></a>

```typescript
public readonly billingGroupDescription: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotBillingGroup.IotBillingGroupBillingGroupPropertiesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IotBillingGroupBillingGroupProperties;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotBillingGroup.IotBillingGroupBillingGroupProperties">IotBillingGroupBillingGroupProperties</a>

---


### IotBillingGroupTagsList <a name="IotBillingGroupTagsList" id="@cdktn/provider-awscc.iotBillingGroup.IotBillingGroupTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotBillingGroup.IotBillingGroupTagsList.Initializer"></a>

```typescript
import { iotBillingGroup } from '@cdktn/provider-awscc'

new iotBillingGroup.IotBillingGroupTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotBillingGroup.IotBillingGroupTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotBillingGroup.IotBillingGroupTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotBillingGroup.IotBillingGroupTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotBillingGroup.IotBillingGroupTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotBillingGroup.IotBillingGroupTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.iotBillingGroup.IotBillingGroupTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotBillingGroup.IotBillingGroupTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.iotBillingGroup.IotBillingGroupTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotBillingGroup.IotBillingGroupTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotBillingGroup.IotBillingGroupTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotBillingGroup.IotBillingGroupTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.iotBillingGroup.IotBillingGroupTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.iotBillingGroup.IotBillingGroupTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotBillingGroup.IotBillingGroupTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotBillingGroup.IotBillingGroupTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotBillingGroup.IotBillingGroupTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotBillingGroup.IotBillingGroupTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.iotBillingGroup.IotBillingGroupTagsList.get"></a>

```typescript
public get(index: number): IotBillingGroupTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.iotBillingGroup.IotBillingGroupTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotBillingGroup.IotBillingGroupTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotBillingGroup.IotBillingGroupTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotBillingGroup.IotBillingGroupTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotBillingGroup.IotBillingGroupTags">IotBillingGroupTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotBillingGroup.IotBillingGroupTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotBillingGroup.IotBillingGroupTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotBillingGroup.IotBillingGroupTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IotBillingGroupTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotBillingGroup.IotBillingGroupTags">IotBillingGroupTags</a>[]

---


### IotBillingGroupTagsOutputReference <a name="IotBillingGroupTagsOutputReference" id="@cdktn/provider-awscc.iotBillingGroup.IotBillingGroupTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotBillingGroup.IotBillingGroupTagsOutputReference.Initializer"></a>

```typescript
import { iotBillingGroup } from '@cdktn/provider-awscc'

new iotBillingGroup.IotBillingGroupTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotBillingGroup.IotBillingGroupTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotBillingGroup.IotBillingGroupTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotBillingGroup.IotBillingGroupTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.iotBillingGroup.IotBillingGroupTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotBillingGroup.IotBillingGroupTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotBillingGroup.IotBillingGroupTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.iotBillingGroup.IotBillingGroupTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.iotBillingGroup.IotBillingGroupTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotBillingGroup.IotBillingGroupTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotBillingGroup.IotBillingGroupTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotBillingGroup.IotBillingGroupTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotBillingGroup.IotBillingGroupTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotBillingGroup.IotBillingGroupTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotBillingGroup.IotBillingGroupTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotBillingGroup.IotBillingGroupTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotBillingGroup.IotBillingGroupTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotBillingGroup.IotBillingGroupTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotBillingGroup.IotBillingGroupTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotBillingGroup.IotBillingGroupTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotBillingGroup.IotBillingGroupTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotBillingGroup.IotBillingGroupTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotBillingGroup.IotBillingGroupTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotBillingGroup.IotBillingGroupTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotBillingGroup.IotBillingGroupTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotBillingGroup.IotBillingGroupTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotBillingGroup.IotBillingGroupTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotBillingGroup.IotBillingGroupTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotBillingGroup.IotBillingGroupTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotBillingGroup.IotBillingGroupTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotBillingGroup.IotBillingGroupTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotBillingGroup.IotBillingGroupTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotBillingGroup.IotBillingGroupTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotBillingGroup.IotBillingGroupTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotBillingGroup.IotBillingGroupTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotBillingGroup.IotBillingGroupTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotBillingGroup.IotBillingGroupTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotBillingGroup.IotBillingGroupTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotBillingGroup.IotBillingGroupTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotBillingGroup.IotBillingGroupTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotBillingGroup.IotBillingGroupTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotBillingGroup.IotBillingGroupTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotBillingGroup.IotBillingGroupTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotBillingGroup.IotBillingGroupTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotBillingGroup.IotBillingGroupTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotBillingGroup.IotBillingGroupTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotBillingGroup.IotBillingGroupTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotBillingGroup.IotBillingGroupTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.iotBillingGroup.IotBillingGroupTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.iotBillingGroup.IotBillingGroupTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotBillingGroup.IotBillingGroupTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotBillingGroup.IotBillingGroupTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotBillingGroup.IotBillingGroupTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotBillingGroup.IotBillingGroupTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotBillingGroup.IotBillingGroupTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotBillingGroup.IotBillingGroupTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotBillingGroup.IotBillingGroupTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotBillingGroup.IotBillingGroupTags">IotBillingGroupTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotBillingGroup.IotBillingGroupTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotBillingGroup.IotBillingGroupTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.iotBillingGroup.IotBillingGroupTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.iotBillingGroup.IotBillingGroupTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.iotBillingGroup.IotBillingGroupTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotBillingGroup.IotBillingGroupTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotBillingGroup.IotBillingGroupTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IotBillingGroupTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotBillingGroup.IotBillingGroupTags">IotBillingGroupTags</a>

---



