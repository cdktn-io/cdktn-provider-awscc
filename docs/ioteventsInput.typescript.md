# `ioteventsInput` Submodule <a name="`ioteventsInput` Submodule" id="@cdktn/provider-awscc.ioteventsInput"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IoteventsInput <a name="IoteventsInput" id="@cdktn/provider-awscc.ioteventsInput.IoteventsInput"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotevents_input awscc_iotevents_input}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ioteventsInput.IoteventsInput.Initializer"></a>

```typescript
import { ioteventsInput } from '@cdktn/provider-awscc'

new ioteventsInput.IoteventsInput(scope: Construct, id: string, config: IoteventsInputConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsInput.IoteventsInput.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.ioteventsInput.IoteventsInput.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.ioteventsInput.IoteventsInput.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.ioteventsInput.IoteventsInputConfig">IoteventsInputConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ioteventsInput.IoteventsInput.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ioteventsInput.IoteventsInput.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.ioteventsInput.IoteventsInput.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ioteventsInput.IoteventsInputConfig">IoteventsInputConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsInput.IoteventsInput.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.ioteventsInput.IoteventsInput.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.ioteventsInput.IoteventsInput.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsInput.IoteventsInput.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.ioteventsInput.IoteventsInput.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.ioteventsInput.IoteventsInput.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsInput.IoteventsInput.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsInput.IoteventsInput.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.ioteventsInput.IoteventsInput.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.ioteventsInput.IoteventsInput.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsInput.IoteventsInput.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsInput.IoteventsInput.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsInput.IoteventsInput.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsInput.IoteventsInput.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsInput.IoteventsInput.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsInput.IoteventsInput.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsInput.IoteventsInput.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsInput.IoteventsInput.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsInput.IoteventsInput.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsInput.IoteventsInput.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsInput.IoteventsInput.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsInput.IoteventsInput.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.ioteventsInput.IoteventsInput.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.ioteventsInput.IoteventsInput.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.ioteventsInput.IoteventsInput.putInputDefinition">putInputDefinition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsInput.IoteventsInput.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsInput.IoteventsInput.resetInputDescription">resetInputDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsInput.IoteventsInput.resetInputName">resetInputName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsInput.IoteventsInput.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ioteventsInput.IoteventsInput.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.ioteventsInput.IoteventsInput.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.ioteventsInput.IoteventsInput.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.ioteventsInput.IoteventsInput.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.ioteventsInput.IoteventsInput.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ioteventsInput.IoteventsInput.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.ioteventsInput.IoteventsInput.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.ioteventsInput.IoteventsInput.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.ioteventsInput.IoteventsInput.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.ioteventsInput.IoteventsInput.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.ioteventsInput.IoteventsInput.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.ioteventsInput.IoteventsInput.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.ioteventsInput.IoteventsInput.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.ioteventsInput.IoteventsInput.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ioteventsInput.IoteventsInput.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsInput.IoteventsInput.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ioteventsInput.IoteventsInput.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsInput.IoteventsInput.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ioteventsInput.IoteventsInput.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsInput.IoteventsInput.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ioteventsInput.IoteventsInput.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsInput.IoteventsInput.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ioteventsInput.IoteventsInput.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsInput.IoteventsInput.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ioteventsInput.IoteventsInput.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsInput.IoteventsInput.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ioteventsInput.IoteventsInput.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsInput.IoteventsInput.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ioteventsInput.IoteventsInput.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsInput.IoteventsInput.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ioteventsInput.IoteventsInput.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsInput.IoteventsInput.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.ioteventsInput.IoteventsInput.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.ioteventsInput.IoteventsInput.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ioteventsInput.IoteventsInput.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ioteventsInput.IoteventsInput.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ioteventsInput.IoteventsInput.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsInput.IoteventsInput.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.ioteventsInput.IoteventsInput.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ioteventsInput.IoteventsInput.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.ioteventsInput.IoteventsInput.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.ioteventsInput.IoteventsInput.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.ioteventsInput.IoteventsInput.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.ioteventsInput.IoteventsInput.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ioteventsInput.IoteventsInput.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putInputDefinition` <a name="putInputDefinition" id="@cdktn/provider-awscc.ioteventsInput.IoteventsInput.putInputDefinition"></a>

```typescript
public putInputDefinition(value: IoteventsInputInputDefinition): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ioteventsInput.IoteventsInput.putInputDefinition.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ioteventsInput.IoteventsInputInputDefinition">IoteventsInputInputDefinition</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.ioteventsInput.IoteventsInput.putTags"></a>

```typescript
public putTags(value: IResolvable | IoteventsInputTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ioteventsInput.IoteventsInput.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ioteventsInput.IoteventsInputTags">IoteventsInputTags</a>[]

---

##### `resetInputDescription` <a name="resetInputDescription" id="@cdktn/provider-awscc.ioteventsInput.IoteventsInput.resetInputDescription"></a>

```typescript
public resetInputDescription(): void
```

##### `resetInputName` <a name="resetInputName" id="@cdktn/provider-awscc.ioteventsInput.IoteventsInput.resetInputName"></a>

```typescript
public resetInputName(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.ioteventsInput.IoteventsInput.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsInput.IoteventsInput.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.ioteventsInput.IoteventsInput.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsInput.IoteventsInput.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsInput.IoteventsInput.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a IoteventsInput resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.ioteventsInput.IoteventsInput.isConstruct"></a>

```typescript
import { ioteventsInput } from '@cdktn/provider-awscc'

ioteventsInput.IoteventsInput.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ioteventsInput.IoteventsInput.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.ioteventsInput.IoteventsInput.isTerraformElement"></a>

```typescript
import { ioteventsInput } from '@cdktn/provider-awscc'

ioteventsInput.IoteventsInput.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ioteventsInput.IoteventsInput.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.ioteventsInput.IoteventsInput.isTerraformResource"></a>

```typescript
import { ioteventsInput } from '@cdktn/provider-awscc'

ioteventsInput.IoteventsInput.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ioteventsInput.IoteventsInput.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.ioteventsInput.IoteventsInput.generateConfigForImport"></a>

```typescript
import { ioteventsInput } from '@cdktn/provider-awscc'

ioteventsInput.IoteventsInput.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a IoteventsInput resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ioteventsInput.IoteventsInput.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.ioteventsInput.IoteventsInput.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the IoteventsInput to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.ioteventsInput.IoteventsInput.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing IoteventsInput that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotevents_input#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ioteventsInput.IoteventsInput.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the IoteventsInput to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsInput.IoteventsInput.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.ioteventsInput.IoteventsInput.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsInput.IoteventsInput.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsInput.IoteventsInput.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsInput.IoteventsInput.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsInput.IoteventsInput.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsInput.IoteventsInput.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsInput.IoteventsInput.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsInput.IoteventsInput.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsInput.IoteventsInput.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsInput.IoteventsInput.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsInput.IoteventsInput.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsInput.IoteventsInput.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsInput.IoteventsInput.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsInput.IoteventsInput.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsInput.IoteventsInput.property.inputDefinition">inputDefinition</a></code> | <code><a href="#@cdktn/provider-awscc.ioteventsInput.IoteventsInputInputDefinitionOutputReference">IoteventsInputInputDefinitionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsInput.IoteventsInput.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.ioteventsInput.IoteventsInputTagsList">IoteventsInputTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsInput.IoteventsInput.property.inputDefinitionInput">inputDefinitionInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ioteventsInput.IoteventsInputInputDefinition">IoteventsInputInputDefinition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsInput.IoteventsInput.property.inputDescriptionInput">inputDescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsInput.IoteventsInput.property.inputNameInput">inputNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsInput.IoteventsInput.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ioteventsInput.IoteventsInputTags">IoteventsInputTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsInput.IoteventsInput.property.inputDescription">inputDescription</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsInput.IoteventsInput.property.inputName">inputName</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.ioteventsInput.IoteventsInput.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.ioteventsInput.IoteventsInput.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ioteventsInput.IoteventsInput.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.ioteventsInput.IoteventsInput.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.ioteventsInput.IoteventsInput.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.ioteventsInput.IoteventsInput.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.ioteventsInput.IoteventsInput.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ioteventsInput.IoteventsInput.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ioteventsInput.IoteventsInput.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.ioteventsInput.IoteventsInput.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.ioteventsInput.IoteventsInput.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ioteventsInput.IoteventsInput.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ioteventsInput.IoteventsInput.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ioteventsInput.IoteventsInput.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ioteventsInput.IoteventsInput.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `inputDefinition`<sup>Required</sup> <a name="inputDefinition" id="@cdktn/provider-awscc.ioteventsInput.IoteventsInput.property.inputDefinition"></a>

```typescript
public readonly inputDefinition: IoteventsInputInputDefinitionOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.ioteventsInput.IoteventsInputInputDefinitionOutputReference">IoteventsInputInputDefinitionOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.ioteventsInput.IoteventsInput.property.tags"></a>

```typescript
public readonly tags: IoteventsInputTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.ioteventsInput.IoteventsInputTagsList">IoteventsInputTagsList</a>

---

##### `inputDefinitionInput`<sup>Optional</sup> <a name="inputDefinitionInput" id="@cdktn/provider-awscc.ioteventsInput.IoteventsInput.property.inputDefinitionInput"></a>

```typescript
public readonly inputDefinitionInput: IResolvable | IoteventsInputInputDefinition;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ioteventsInput.IoteventsInputInputDefinition">IoteventsInputInputDefinition</a>

---

##### `inputDescriptionInput`<sup>Optional</sup> <a name="inputDescriptionInput" id="@cdktn/provider-awscc.ioteventsInput.IoteventsInput.property.inputDescriptionInput"></a>

```typescript
public readonly inputDescriptionInput: string;
```

- *Type:* string

---

##### `inputNameInput`<sup>Optional</sup> <a name="inputNameInput" id="@cdktn/provider-awscc.ioteventsInput.IoteventsInput.property.inputNameInput"></a>

```typescript
public readonly inputNameInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.ioteventsInput.IoteventsInput.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | IoteventsInputTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ioteventsInput.IoteventsInputTags">IoteventsInputTags</a>[]

---

##### `inputDescription`<sup>Required</sup> <a name="inputDescription" id="@cdktn/provider-awscc.ioteventsInput.IoteventsInput.property.inputDescription"></a>

```typescript
public readonly inputDescription: string;
```

- *Type:* string

---

##### `inputName`<sup>Required</sup> <a name="inputName" id="@cdktn/provider-awscc.ioteventsInput.IoteventsInput.property.inputName"></a>

```typescript
public readonly inputName: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsInput.IoteventsInput.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.ioteventsInput.IoteventsInput.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### IoteventsInputConfig <a name="IoteventsInputConfig" id="@cdktn/provider-awscc.ioteventsInput.IoteventsInputConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ioteventsInput.IoteventsInputConfig.Initializer"></a>

```typescript
import { ioteventsInput } from '@cdktn/provider-awscc'

const ioteventsInputConfig: ioteventsInput.IoteventsInputConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsInput.IoteventsInputConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsInput.IoteventsInputConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsInput.IoteventsInputConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsInput.IoteventsInputConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsInput.IoteventsInputConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsInput.IoteventsInputConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsInput.IoteventsInputConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsInput.IoteventsInputConfig.property.inputDefinition">inputDefinition</a></code> | <code><a href="#@cdktn/provider-awscc.ioteventsInput.IoteventsInputInputDefinition">IoteventsInputInputDefinition</a></code> | The definition of the input. |
| <code><a href="#@cdktn/provider-awscc.ioteventsInput.IoteventsInputConfig.property.inputDescription">inputDescription</a></code> | <code>string</code> | A brief description of the input. |
| <code><a href="#@cdktn/provider-awscc.ioteventsInput.IoteventsInputConfig.property.inputName">inputName</a></code> | <code>string</code> | The name of the input. |
| <code><a href="#@cdktn/provider-awscc.ioteventsInput.IoteventsInputConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ioteventsInput.IoteventsInputTags">IoteventsInputTags</a>[]</code> | An array of key-value pairs to apply to this resource.  For more information, see [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html). |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ioteventsInput.IoteventsInputConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ioteventsInput.IoteventsInputConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.ioteventsInput.IoteventsInputConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.ioteventsInput.IoteventsInputConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ioteventsInput.IoteventsInputConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ioteventsInput.IoteventsInputConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ioteventsInput.IoteventsInputConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `inputDefinition`<sup>Required</sup> <a name="inputDefinition" id="@cdktn/provider-awscc.ioteventsInput.IoteventsInputConfig.property.inputDefinition"></a>

```typescript
public readonly inputDefinition: IoteventsInputInputDefinition;
```

- *Type:* <a href="#@cdktn/provider-awscc.ioteventsInput.IoteventsInputInputDefinition">IoteventsInputInputDefinition</a>

The definition of the input.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotevents_input#input_definition IoteventsInput#input_definition}

---

##### `inputDescription`<sup>Optional</sup> <a name="inputDescription" id="@cdktn/provider-awscc.ioteventsInput.IoteventsInputConfig.property.inputDescription"></a>

```typescript
public readonly inputDescription: string;
```

- *Type:* string

A brief description of the input.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotevents_input#input_description IoteventsInput#input_description}

---

##### `inputName`<sup>Optional</sup> <a name="inputName" id="@cdktn/provider-awscc.ioteventsInput.IoteventsInputConfig.property.inputName"></a>

```typescript
public readonly inputName: string;
```

- *Type:* string

The name of the input.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotevents_input#input_name IoteventsInput#input_name}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.ioteventsInput.IoteventsInputConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | IoteventsInputTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ioteventsInput.IoteventsInputTags">IoteventsInputTags</a>[]

An array of key-value pairs to apply to this resource.  For more information, see [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotevents_input#tags IoteventsInput#tags}

---

### IoteventsInputInputDefinition <a name="IoteventsInputInputDefinition" id="@cdktn/provider-awscc.ioteventsInput.IoteventsInputInputDefinition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ioteventsInput.IoteventsInputInputDefinition.Initializer"></a>

```typescript
import { ioteventsInput } from '@cdktn/provider-awscc'

const ioteventsInputInputDefinition: ioteventsInput.IoteventsInputInputDefinition = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsInput.IoteventsInputInputDefinition.property.attributes">attributes</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ioteventsInput.IoteventsInputInputDefinitionAttributes">IoteventsInputInputDefinitionAttributes</a>[]</code> | The attributes from the JSON payload that are made available by the input. |

---

##### `attributes`<sup>Required</sup> <a name="attributes" id="@cdktn/provider-awscc.ioteventsInput.IoteventsInputInputDefinition.property.attributes"></a>

```typescript
public readonly attributes: IResolvable | IoteventsInputInputDefinitionAttributes[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ioteventsInput.IoteventsInputInputDefinitionAttributes">IoteventsInputInputDefinitionAttributes</a>[]

The attributes from the JSON payload that are made available by the input.

Inputs are derived from messages sent to the ITE system using ``BatchPutMessage``. Each such message contains a JSON payload, and those attributes (and their paired values) specified here are available for use in the ``condition`` expressions used by detectors that monitor this input.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotevents_input#attributes IoteventsInput#attributes}

---

### IoteventsInputInputDefinitionAttributes <a name="IoteventsInputInputDefinitionAttributes" id="@cdktn/provider-awscc.ioteventsInput.IoteventsInputInputDefinitionAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ioteventsInput.IoteventsInputInputDefinitionAttributes.Initializer"></a>

```typescript
import { ioteventsInput } from '@cdktn/provider-awscc'

const ioteventsInputInputDefinitionAttributes: ioteventsInput.IoteventsInputInputDefinitionAttributes = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsInput.IoteventsInputInputDefinitionAttributes.property.jsonPath">jsonPath</a></code> | <code>string</code> | An expression that specifies an attribute-value pair in a JSON structure. |

---

##### `jsonPath`<sup>Required</sup> <a name="jsonPath" id="@cdktn/provider-awscc.ioteventsInput.IoteventsInputInputDefinitionAttributes.property.jsonPath"></a>

```typescript
public readonly jsonPath: string;
```

- *Type:* string

An expression that specifies an attribute-value pair in a JSON structure.

Use this to specify an attribute from the JSON payload that is made available by the input. Inputs are derived from messages sent to ITE (``BatchPutMessage``). Each such message contains a JSON payload. The attribute (and its paired value) specified here are available for use in the ``condition`` expressions used by detectors. 
 Syntax: ``<field-name>.<field-name>...``

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotevents_input#json_path IoteventsInput#json_path}

---

### IoteventsInputTags <a name="IoteventsInputTags" id="@cdktn/provider-awscc.ioteventsInput.IoteventsInputTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ioteventsInput.IoteventsInputTags.Initializer"></a>

```typescript
import { ioteventsInput } from '@cdktn/provider-awscc'

const ioteventsInputTags: ioteventsInput.IoteventsInputTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsInput.IoteventsInputTags.property.key">key</a></code> | <code>string</code> | The tag's key. |
| <code><a href="#@cdktn/provider-awscc.ioteventsInput.IoteventsInputTags.property.value">value</a></code> | <code>string</code> | The tag's value. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.ioteventsInput.IoteventsInputTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

The tag's key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotevents_input#key IoteventsInput#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.ioteventsInput.IoteventsInputTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The tag's value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotevents_input#value IoteventsInput#value}

---

## Classes <a name="Classes" id="Classes"></a>

### IoteventsInputInputDefinitionAttributesList <a name="IoteventsInputInputDefinitionAttributesList" id="@cdktn/provider-awscc.ioteventsInput.IoteventsInputInputDefinitionAttributesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ioteventsInput.IoteventsInputInputDefinitionAttributesList.Initializer"></a>

```typescript
import { ioteventsInput } from '@cdktn/provider-awscc'

new ioteventsInput.IoteventsInputInputDefinitionAttributesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsInput.IoteventsInputInputDefinitionAttributesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ioteventsInput.IoteventsInputInputDefinitionAttributesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ioteventsInput.IoteventsInputInputDefinitionAttributesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ioteventsInput.IoteventsInputInputDefinitionAttributesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsInput.IoteventsInputInputDefinitionAttributesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.ioteventsInput.IoteventsInputInputDefinitionAttributesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsInput.IoteventsInputInputDefinitionAttributesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ioteventsInput.IoteventsInputInputDefinitionAttributesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsInput.IoteventsInputInputDefinitionAttributesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ioteventsInput.IoteventsInputInputDefinitionAttributesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ioteventsInput.IoteventsInputInputDefinitionAttributesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.ioteventsInput.IoteventsInputInputDefinitionAttributesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.ioteventsInput.IoteventsInputInputDefinitionAttributesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ioteventsInput.IoteventsInputInputDefinitionAttributesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ioteventsInput.IoteventsInputInputDefinitionAttributesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ioteventsInput.IoteventsInputInputDefinitionAttributesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ioteventsInput.IoteventsInputInputDefinitionAttributesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.ioteventsInput.IoteventsInputInputDefinitionAttributesList.get"></a>

```typescript
public get(index: number): IoteventsInputInputDefinitionAttributesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ioteventsInput.IoteventsInputInputDefinitionAttributesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsInput.IoteventsInputInputDefinitionAttributesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ioteventsInput.IoteventsInputInputDefinitionAttributesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsInput.IoteventsInputInputDefinitionAttributesList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ioteventsInput.IoteventsInputInputDefinitionAttributes">IoteventsInputInputDefinitionAttributes</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ioteventsInput.IoteventsInputInputDefinitionAttributesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ioteventsInput.IoteventsInputInputDefinitionAttributesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ioteventsInput.IoteventsInputInputDefinitionAttributesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IoteventsInputInputDefinitionAttributes[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ioteventsInput.IoteventsInputInputDefinitionAttributes">IoteventsInputInputDefinitionAttributes</a>[]

---


### IoteventsInputInputDefinitionAttributesOutputReference <a name="IoteventsInputInputDefinitionAttributesOutputReference" id="@cdktn/provider-awscc.ioteventsInput.IoteventsInputInputDefinitionAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ioteventsInput.IoteventsInputInputDefinitionAttributesOutputReference.Initializer"></a>

```typescript
import { ioteventsInput } from '@cdktn/provider-awscc'

new ioteventsInput.IoteventsInputInputDefinitionAttributesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsInput.IoteventsInputInputDefinitionAttributesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ioteventsInput.IoteventsInputInputDefinitionAttributesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ioteventsInput.IoteventsInputInputDefinitionAttributesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ioteventsInput.IoteventsInputInputDefinitionAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ioteventsInput.IoteventsInputInputDefinitionAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsInput.IoteventsInputInputDefinitionAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.ioteventsInput.IoteventsInputInputDefinitionAttributesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.ioteventsInput.IoteventsInputInputDefinitionAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsInput.IoteventsInputInputDefinitionAttributesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsInput.IoteventsInputInputDefinitionAttributesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsInput.IoteventsInputInputDefinitionAttributesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsInput.IoteventsInputInputDefinitionAttributesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsInput.IoteventsInputInputDefinitionAttributesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsInput.IoteventsInputInputDefinitionAttributesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsInput.IoteventsInputInputDefinitionAttributesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsInput.IoteventsInputInputDefinitionAttributesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsInput.IoteventsInputInputDefinitionAttributesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsInput.IoteventsInputInputDefinitionAttributesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsInput.IoteventsInputInputDefinitionAttributesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsInput.IoteventsInputInputDefinitionAttributesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ioteventsInput.IoteventsInputInputDefinitionAttributesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ioteventsInput.IoteventsInputInputDefinitionAttributesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ioteventsInput.IoteventsInputInputDefinitionAttributesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsInput.IoteventsInputInputDefinitionAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ioteventsInput.IoteventsInputInputDefinitionAttributesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsInput.IoteventsInputInputDefinitionAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ioteventsInput.IoteventsInputInputDefinitionAttributesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsInput.IoteventsInputInputDefinitionAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ioteventsInput.IoteventsInputInputDefinitionAttributesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsInput.IoteventsInputInputDefinitionAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ioteventsInput.IoteventsInputInputDefinitionAttributesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsInput.IoteventsInputInputDefinitionAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ioteventsInput.IoteventsInputInputDefinitionAttributesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsInput.IoteventsInputInputDefinitionAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ioteventsInput.IoteventsInputInputDefinitionAttributesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsInput.IoteventsInputInputDefinitionAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ioteventsInput.IoteventsInputInputDefinitionAttributesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsInput.IoteventsInputInputDefinitionAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ioteventsInput.IoteventsInputInputDefinitionAttributesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsInput.IoteventsInputInputDefinitionAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ioteventsInput.IoteventsInputInputDefinitionAttributesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ioteventsInput.IoteventsInputInputDefinitionAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ioteventsInput.IoteventsInputInputDefinitionAttributesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ioteventsInput.IoteventsInputInputDefinitionAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ioteventsInput.IoteventsInputInputDefinitionAttributesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsInput.IoteventsInputInputDefinitionAttributesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ioteventsInput.IoteventsInputInputDefinitionAttributesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsInput.IoteventsInputInputDefinitionAttributesOutputReference.property.jsonPathInput">jsonPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsInput.IoteventsInputInputDefinitionAttributesOutputReference.property.jsonPath">jsonPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsInput.IoteventsInputInputDefinitionAttributesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ioteventsInput.IoteventsInputInputDefinitionAttributes">IoteventsInputInputDefinitionAttributes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ioteventsInput.IoteventsInputInputDefinitionAttributesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ioteventsInput.IoteventsInputInputDefinitionAttributesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `jsonPathInput`<sup>Optional</sup> <a name="jsonPathInput" id="@cdktn/provider-awscc.ioteventsInput.IoteventsInputInputDefinitionAttributesOutputReference.property.jsonPathInput"></a>

```typescript
public readonly jsonPathInput: string;
```

- *Type:* string

---

##### `jsonPath`<sup>Required</sup> <a name="jsonPath" id="@cdktn/provider-awscc.ioteventsInput.IoteventsInputInputDefinitionAttributesOutputReference.property.jsonPath"></a>

```typescript
public readonly jsonPath: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ioteventsInput.IoteventsInputInputDefinitionAttributesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IoteventsInputInputDefinitionAttributes;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ioteventsInput.IoteventsInputInputDefinitionAttributes">IoteventsInputInputDefinitionAttributes</a>

---


### IoteventsInputInputDefinitionOutputReference <a name="IoteventsInputInputDefinitionOutputReference" id="@cdktn/provider-awscc.ioteventsInput.IoteventsInputInputDefinitionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ioteventsInput.IoteventsInputInputDefinitionOutputReference.Initializer"></a>

```typescript
import { ioteventsInput } from '@cdktn/provider-awscc'

new ioteventsInput.IoteventsInputInputDefinitionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsInput.IoteventsInputInputDefinitionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ioteventsInput.IoteventsInputInputDefinitionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ioteventsInput.IoteventsInputInputDefinitionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsInput.IoteventsInputInputDefinitionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsInput.IoteventsInputInputDefinitionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsInput.IoteventsInputInputDefinitionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsInput.IoteventsInputInputDefinitionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsInput.IoteventsInputInputDefinitionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsInput.IoteventsInputInputDefinitionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsInput.IoteventsInputInputDefinitionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsInput.IoteventsInputInputDefinitionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsInput.IoteventsInputInputDefinitionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsInput.IoteventsInputInputDefinitionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsInput.IoteventsInputInputDefinitionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsInput.IoteventsInputInputDefinitionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsInput.IoteventsInputInputDefinitionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ioteventsInput.IoteventsInputInputDefinitionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ioteventsInput.IoteventsInputInputDefinitionOutputReference.putAttributes">putAttributes</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ioteventsInput.IoteventsInputInputDefinitionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ioteventsInput.IoteventsInputInputDefinitionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsInput.IoteventsInputInputDefinitionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ioteventsInput.IoteventsInputInputDefinitionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsInput.IoteventsInputInputDefinitionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ioteventsInput.IoteventsInputInputDefinitionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsInput.IoteventsInputInputDefinitionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ioteventsInput.IoteventsInputInputDefinitionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsInput.IoteventsInputInputDefinitionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ioteventsInput.IoteventsInputInputDefinitionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsInput.IoteventsInputInputDefinitionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ioteventsInput.IoteventsInputInputDefinitionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsInput.IoteventsInputInputDefinitionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ioteventsInput.IoteventsInputInputDefinitionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsInput.IoteventsInputInputDefinitionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ioteventsInput.IoteventsInputInputDefinitionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsInput.IoteventsInputInputDefinitionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ioteventsInput.IoteventsInputInputDefinitionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsInput.IoteventsInputInputDefinitionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ioteventsInput.IoteventsInputInputDefinitionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ioteventsInput.IoteventsInputInputDefinitionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ioteventsInput.IoteventsInputInputDefinitionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ioteventsInput.IoteventsInputInputDefinitionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ioteventsInput.IoteventsInputInputDefinitionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAttributes` <a name="putAttributes" id="@cdktn/provider-awscc.ioteventsInput.IoteventsInputInputDefinitionOutputReference.putAttributes"></a>

```typescript
public putAttributes(value: IResolvable | IoteventsInputInputDefinitionAttributes[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ioteventsInput.IoteventsInputInputDefinitionOutputReference.putAttributes.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ioteventsInput.IoteventsInputInputDefinitionAttributes">IoteventsInputInputDefinitionAttributes</a>[]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsInput.IoteventsInputInputDefinitionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ioteventsInput.IoteventsInputInputDefinitionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsInput.IoteventsInputInputDefinitionOutputReference.property.attributes">attributes</a></code> | <code><a href="#@cdktn/provider-awscc.ioteventsInput.IoteventsInputInputDefinitionAttributesList">IoteventsInputInputDefinitionAttributesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsInput.IoteventsInputInputDefinitionOutputReference.property.attributesInput">attributesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ioteventsInput.IoteventsInputInputDefinitionAttributes">IoteventsInputInputDefinitionAttributes</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsInput.IoteventsInputInputDefinitionOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ioteventsInput.IoteventsInputInputDefinition">IoteventsInputInputDefinition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ioteventsInput.IoteventsInputInputDefinitionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ioteventsInput.IoteventsInputInputDefinitionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `attributes`<sup>Required</sup> <a name="attributes" id="@cdktn/provider-awscc.ioteventsInput.IoteventsInputInputDefinitionOutputReference.property.attributes"></a>

```typescript
public readonly attributes: IoteventsInputInputDefinitionAttributesList;
```

- *Type:* <a href="#@cdktn/provider-awscc.ioteventsInput.IoteventsInputInputDefinitionAttributesList">IoteventsInputInputDefinitionAttributesList</a>

---

##### `attributesInput`<sup>Optional</sup> <a name="attributesInput" id="@cdktn/provider-awscc.ioteventsInput.IoteventsInputInputDefinitionOutputReference.property.attributesInput"></a>

```typescript
public readonly attributesInput: IResolvable | IoteventsInputInputDefinitionAttributes[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ioteventsInput.IoteventsInputInputDefinitionAttributes">IoteventsInputInputDefinitionAttributes</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ioteventsInput.IoteventsInputInputDefinitionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IoteventsInputInputDefinition;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ioteventsInput.IoteventsInputInputDefinition">IoteventsInputInputDefinition</a>

---


### IoteventsInputTagsList <a name="IoteventsInputTagsList" id="@cdktn/provider-awscc.ioteventsInput.IoteventsInputTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ioteventsInput.IoteventsInputTagsList.Initializer"></a>

```typescript
import { ioteventsInput } from '@cdktn/provider-awscc'

new ioteventsInput.IoteventsInputTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsInput.IoteventsInputTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ioteventsInput.IoteventsInputTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ioteventsInput.IoteventsInputTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ioteventsInput.IoteventsInputTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsInput.IoteventsInputTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.ioteventsInput.IoteventsInputTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsInput.IoteventsInputTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ioteventsInput.IoteventsInputTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsInput.IoteventsInputTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ioteventsInput.IoteventsInputTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ioteventsInput.IoteventsInputTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.ioteventsInput.IoteventsInputTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.ioteventsInput.IoteventsInputTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ioteventsInput.IoteventsInputTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ioteventsInput.IoteventsInputTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ioteventsInput.IoteventsInputTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ioteventsInput.IoteventsInputTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.ioteventsInput.IoteventsInputTagsList.get"></a>

```typescript
public get(index: number): IoteventsInputTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ioteventsInput.IoteventsInputTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsInput.IoteventsInputTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ioteventsInput.IoteventsInputTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsInput.IoteventsInputTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ioteventsInput.IoteventsInputTags">IoteventsInputTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ioteventsInput.IoteventsInputTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ioteventsInput.IoteventsInputTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ioteventsInput.IoteventsInputTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IoteventsInputTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ioteventsInput.IoteventsInputTags">IoteventsInputTags</a>[]

---


### IoteventsInputTagsOutputReference <a name="IoteventsInputTagsOutputReference" id="@cdktn/provider-awscc.ioteventsInput.IoteventsInputTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ioteventsInput.IoteventsInputTagsOutputReference.Initializer"></a>

```typescript
import { ioteventsInput } from '@cdktn/provider-awscc'

new ioteventsInput.IoteventsInputTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsInput.IoteventsInputTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ioteventsInput.IoteventsInputTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ioteventsInput.IoteventsInputTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ioteventsInput.IoteventsInputTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ioteventsInput.IoteventsInputTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsInput.IoteventsInputTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.ioteventsInput.IoteventsInputTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.ioteventsInput.IoteventsInputTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsInput.IoteventsInputTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsInput.IoteventsInputTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsInput.IoteventsInputTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsInput.IoteventsInputTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsInput.IoteventsInputTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsInput.IoteventsInputTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsInput.IoteventsInputTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsInput.IoteventsInputTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsInput.IoteventsInputTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsInput.IoteventsInputTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsInput.IoteventsInputTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsInput.IoteventsInputTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ioteventsInput.IoteventsInputTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ioteventsInput.IoteventsInputTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsInput.IoteventsInputTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ioteventsInput.IoteventsInputTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ioteventsInput.IoteventsInputTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsInput.IoteventsInputTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ioteventsInput.IoteventsInputTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsInput.IoteventsInputTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ioteventsInput.IoteventsInputTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsInput.IoteventsInputTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ioteventsInput.IoteventsInputTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsInput.IoteventsInputTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ioteventsInput.IoteventsInputTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsInput.IoteventsInputTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ioteventsInput.IoteventsInputTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsInput.IoteventsInputTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ioteventsInput.IoteventsInputTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsInput.IoteventsInputTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ioteventsInput.IoteventsInputTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsInput.IoteventsInputTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ioteventsInput.IoteventsInputTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ioteventsInput.IoteventsInputTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ioteventsInput.IoteventsInputTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ioteventsInput.IoteventsInputTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ioteventsInput.IoteventsInputTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ioteventsInput.IoteventsInputTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ioteventsInput.IoteventsInputTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.ioteventsInput.IoteventsInputTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.ioteventsInput.IoteventsInputTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ioteventsInput.IoteventsInputTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ioteventsInput.IoteventsInputTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsInput.IoteventsInputTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsInput.IoteventsInputTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsInput.IoteventsInputTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsInput.IoteventsInputTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ioteventsInput.IoteventsInputTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ioteventsInput.IoteventsInputTags">IoteventsInputTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ioteventsInput.IoteventsInputTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ioteventsInput.IoteventsInputTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.ioteventsInput.IoteventsInputTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.ioteventsInput.IoteventsInputTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.ioteventsInput.IoteventsInputTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ioteventsInput.IoteventsInputTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ioteventsInput.IoteventsInputTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IoteventsInputTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ioteventsInput.IoteventsInputTags">IoteventsInputTags</a>

---



