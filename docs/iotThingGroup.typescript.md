# `iotThingGroup` Submodule <a name="`iotThingGroup` Submodule" id="@cdktn/provider-awscc.iotThingGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IotThingGroup <a name="IotThingGroup" id="@cdktn/provider-awscc.iotThingGroup.IotThingGroup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_thing_group awscc_iot_thing_group}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotThingGroup.IotThingGroup.Initializer"></a>

```typescript
import { iotThingGroup } from '@cdktn/provider-awscc'

new iotThingGroup.IotThingGroup(scope: Construct, id: string, config?: IotThingGroupConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotThingGroup.IotThingGroup.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.iotThingGroup.IotThingGroup.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.iotThingGroup.IotThingGroup.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.iotThingGroup.IotThingGroupConfig">IotThingGroupConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.iotThingGroup.IotThingGroup.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotThingGroup.IotThingGroup.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-awscc.iotThingGroup.IotThingGroup.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotThingGroup.IotThingGroupConfig">IotThingGroupConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotThingGroup.IotThingGroup.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.iotThingGroup.IotThingGroup.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.iotThingGroup.IotThingGroup.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingGroup.IotThingGroup.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.iotThingGroup.IotThingGroup.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.iotThingGroup.IotThingGroup.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingGroup.IotThingGroup.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingGroup.IotThingGroup.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.iotThingGroup.IotThingGroup.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.iotThingGroup.IotThingGroup.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingGroup.IotThingGroup.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingGroup.IotThingGroup.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingGroup.IotThingGroup.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingGroup.IotThingGroup.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingGroup.IotThingGroup.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingGroup.IotThingGroup.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingGroup.IotThingGroup.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingGroup.IotThingGroup.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingGroup.IotThingGroup.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingGroup.IotThingGroup.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingGroup.IotThingGroup.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingGroup.IotThingGroup.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.iotThingGroup.IotThingGroup.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.iotThingGroup.IotThingGroup.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.iotThingGroup.IotThingGroup.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingGroup.IotThingGroup.putThingGroupProperties">putThingGroupProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingGroup.IotThingGroup.resetParentGroupName">resetParentGroupName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingGroup.IotThingGroup.resetQueryString">resetQueryString</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingGroup.IotThingGroup.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingGroup.IotThingGroup.resetThingGroupName">resetThingGroupName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingGroup.IotThingGroup.resetThingGroupProperties">resetThingGroupProperties</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotThingGroup.IotThingGroup.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.iotThingGroup.IotThingGroup.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.iotThingGroup.IotThingGroup.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.iotThingGroup.IotThingGroup.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.iotThingGroup.IotThingGroup.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotThingGroup.IotThingGroup.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.iotThingGroup.IotThingGroup.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.iotThingGroup.IotThingGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.iotThingGroup.IotThingGroup.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.iotThingGroup.IotThingGroup.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.iotThingGroup.IotThingGroup.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.iotThingGroup.IotThingGroup.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.iotThingGroup.IotThingGroup.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.iotThingGroup.IotThingGroup.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotThingGroup.IotThingGroup.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotThingGroup.IotThingGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotThingGroup.IotThingGroup.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotThingGroup.IotThingGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotThingGroup.IotThingGroup.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotThingGroup.IotThingGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotThingGroup.IotThingGroup.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotThingGroup.IotThingGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotThingGroup.IotThingGroup.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotThingGroup.IotThingGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotThingGroup.IotThingGroup.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotThingGroup.IotThingGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotThingGroup.IotThingGroup.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotThingGroup.IotThingGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotThingGroup.IotThingGroup.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotThingGroup.IotThingGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotThingGroup.IotThingGroup.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotThingGroup.IotThingGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.iotThingGroup.IotThingGroup.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.iotThingGroup.IotThingGroup.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotThingGroup.IotThingGroup.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotThingGroup.IotThingGroup.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotThingGroup.IotThingGroup.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotThingGroup.IotThingGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.iotThingGroup.IotThingGroup.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotThingGroup.IotThingGroup.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.iotThingGroup.IotThingGroup.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.iotThingGroup.IotThingGroup.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.iotThingGroup.IotThingGroup.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.iotThingGroup.IotThingGroup.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotThingGroup.IotThingGroup.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.iotThingGroup.IotThingGroup.putTags"></a>

```typescript
public putTags(value: IResolvable | IotThingGroupTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotThingGroup.IotThingGroup.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotThingGroup.IotThingGroupTags">IotThingGroupTags</a>[]

---

##### `putThingGroupProperties` <a name="putThingGroupProperties" id="@cdktn/provider-awscc.iotThingGroup.IotThingGroup.putThingGroupProperties"></a>

```typescript
public putThingGroupProperties(value: IotThingGroupThingGroupProperties): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotThingGroup.IotThingGroup.putThingGroupProperties.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotThingGroup.IotThingGroupThingGroupProperties">IotThingGroupThingGroupProperties</a>

---

##### `resetParentGroupName` <a name="resetParentGroupName" id="@cdktn/provider-awscc.iotThingGroup.IotThingGroup.resetParentGroupName"></a>

```typescript
public resetParentGroupName(): void
```

##### `resetQueryString` <a name="resetQueryString" id="@cdktn/provider-awscc.iotThingGroup.IotThingGroup.resetQueryString"></a>

```typescript
public resetQueryString(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.iotThingGroup.IotThingGroup.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetThingGroupName` <a name="resetThingGroupName" id="@cdktn/provider-awscc.iotThingGroup.IotThingGroup.resetThingGroupName"></a>

```typescript
public resetThingGroupName(): void
```

##### `resetThingGroupProperties` <a name="resetThingGroupProperties" id="@cdktn/provider-awscc.iotThingGroup.IotThingGroup.resetThingGroupProperties"></a>

```typescript
public resetThingGroupProperties(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotThingGroup.IotThingGroup.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.iotThingGroup.IotThingGroup.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingGroup.IotThingGroup.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingGroup.IotThingGroup.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a IotThingGroup resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.iotThingGroup.IotThingGroup.isConstruct"></a>

```typescript
import { iotThingGroup } from '@cdktn/provider-awscc'

iotThingGroup.IotThingGroup.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.iotThingGroup.IotThingGroup.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.iotThingGroup.IotThingGroup.isTerraformElement"></a>

```typescript
import { iotThingGroup } from '@cdktn/provider-awscc'

iotThingGroup.IotThingGroup.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.iotThingGroup.IotThingGroup.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.iotThingGroup.IotThingGroup.isTerraformResource"></a>

```typescript
import { iotThingGroup } from '@cdktn/provider-awscc'

iotThingGroup.IotThingGroup.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.iotThingGroup.IotThingGroup.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.iotThingGroup.IotThingGroup.generateConfigForImport"></a>

```typescript
import { iotThingGroup } from '@cdktn/provider-awscc'

iotThingGroup.IotThingGroup.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a IotThingGroup resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.iotThingGroup.IotThingGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.iotThingGroup.IotThingGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the IotThingGroup to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.iotThingGroup.IotThingGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing IotThingGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_thing_group#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotThingGroup.IotThingGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the IotThingGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotThingGroup.IotThingGroup.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.iotThingGroup.IotThingGroup.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingGroup.IotThingGroup.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingGroup.IotThingGroup.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingGroup.IotThingGroup.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingGroup.IotThingGroup.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingGroup.IotThingGroup.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingGroup.IotThingGroup.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingGroup.IotThingGroup.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingGroup.IotThingGroup.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingGroup.IotThingGroup.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingGroup.IotThingGroup.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingGroup.IotThingGroup.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingGroup.IotThingGroup.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingGroup.IotThingGroup.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingGroup.IotThingGroup.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingGroup.IotThingGroup.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.iotThingGroup.IotThingGroupTagsList">IotThingGroupTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingGroup.IotThingGroup.property.thingGroupId">thingGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingGroup.IotThingGroup.property.thingGroupProperties">thingGroupProperties</a></code> | <code><a href="#@cdktn/provider-awscc.iotThingGroup.IotThingGroupThingGroupPropertiesOutputReference">IotThingGroupThingGroupPropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingGroup.IotThingGroup.property.parentGroupNameInput">parentGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingGroup.IotThingGroup.property.queryStringInput">queryStringInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingGroup.IotThingGroup.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotThingGroup.IotThingGroupTags">IotThingGroupTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingGroup.IotThingGroup.property.thingGroupNameInput">thingGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingGroup.IotThingGroup.property.thingGroupPropertiesInput">thingGroupPropertiesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotThingGroup.IotThingGroupThingGroupProperties">IotThingGroupThingGroupProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingGroup.IotThingGroup.property.parentGroupName">parentGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingGroup.IotThingGroup.property.queryString">queryString</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingGroup.IotThingGroup.property.thingGroupName">thingGroupName</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.iotThingGroup.IotThingGroup.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.iotThingGroup.IotThingGroup.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotThingGroup.IotThingGroup.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.iotThingGroup.IotThingGroup.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.iotThingGroup.IotThingGroup.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.iotThingGroup.IotThingGroup.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.iotThingGroup.IotThingGroup.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.iotThingGroup.IotThingGroup.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.iotThingGroup.IotThingGroup.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.iotThingGroup.IotThingGroup.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.iotThingGroup.IotThingGroup.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.iotThingGroup.IotThingGroup.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotThingGroup.IotThingGroup.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.iotThingGroup.IotThingGroup.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.iotThingGroup.IotThingGroup.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotThingGroup.IotThingGroup.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.iotThingGroup.IotThingGroup.property.tags"></a>

```typescript
public readonly tags: IotThingGroupTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.iotThingGroup.IotThingGroupTagsList">IotThingGroupTagsList</a>

---

##### `thingGroupId`<sup>Required</sup> <a name="thingGroupId" id="@cdktn/provider-awscc.iotThingGroup.IotThingGroup.property.thingGroupId"></a>

```typescript
public readonly thingGroupId: string;
```

- *Type:* string

---

##### `thingGroupProperties`<sup>Required</sup> <a name="thingGroupProperties" id="@cdktn/provider-awscc.iotThingGroup.IotThingGroup.property.thingGroupProperties"></a>

```typescript
public readonly thingGroupProperties: IotThingGroupThingGroupPropertiesOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.iotThingGroup.IotThingGroupThingGroupPropertiesOutputReference">IotThingGroupThingGroupPropertiesOutputReference</a>

---

##### `parentGroupNameInput`<sup>Optional</sup> <a name="parentGroupNameInput" id="@cdktn/provider-awscc.iotThingGroup.IotThingGroup.property.parentGroupNameInput"></a>

```typescript
public readonly parentGroupNameInput: string;
```

- *Type:* string

---

##### `queryStringInput`<sup>Optional</sup> <a name="queryStringInput" id="@cdktn/provider-awscc.iotThingGroup.IotThingGroup.property.queryStringInput"></a>

```typescript
public readonly queryStringInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.iotThingGroup.IotThingGroup.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | IotThingGroupTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotThingGroup.IotThingGroupTags">IotThingGroupTags</a>[]

---

##### `thingGroupNameInput`<sup>Optional</sup> <a name="thingGroupNameInput" id="@cdktn/provider-awscc.iotThingGroup.IotThingGroup.property.thingGroupNameInput"></a>

```typescript
public readonly thingGroupNameInput: string;
```

- *Type:* string

---

##### `thingGroupPropertiesInput`<sup>Optional</sup> <a name="thingGroupPropertiesInput" id="@cdktn/provider-awscc.iotThingGroup.IotThingGroup.property.thingGroupPropertiesInput"></a>

```typescript
public readonly thingGroupPropertiesInput: IResolvable | IotThingGroupThingGroupProperties;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotThingGroup.IotThingGroupThingGroupProperties">IotThingGroupThingGroupProperties</a>

---

##### `parentGroupName`<sup>Required</sup> <a name="parentGroupName" id="@cdktn/provider-awscc.iotThingGroup.IotThingGroup.property.parentGroupName"></a>

```typescript
public readonly parentGroupName: string;
```

- *Type:* string

---

##### `queryString`<sup>Required</sup> <a name="queryString" id="@cdktn/provider-awscc.iotThingGroup.IotThingGroup.property.queryString"></a>

```typescript
public readonly queryString: string;
```

- *Type:* string

---

##### `thingGroupName`<sup>Required</sup> <a name="thingGroupName" id="@cdktn/provider-awscc.iotThingGroup.IotThingGroup.property.thingGroupName"></a>

```typescript
public readonly thingGroupName: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotThingGroup.IotThingGroup.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.iotThingGroup.IotThingGroup.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### IotThingGroupConfig <a name="IotThingGroupConfig" id="@cdktn/provider-awscc.iotThingGroup.IotThingGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotThingGroup.IotThingGroupConfig.Initializer"></a>

```typescript
import { iotThingGroup } from '@cdktn/provider-awscc'

const iotThingGroupConfig: iotThingGroup.IotThingGroupConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotThingGroup.IotThingGroupConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingGroup.IotThingGroupConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingGroup.IotThingGroupConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingGroup.IotThingGroupConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingGroup.IotThingGroupConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingGroup.IotThingGroupConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingGroup.IotThingGroupConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingGroup.IotThingGroupConfig.property.parentGroupName">parentGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_thing_group#parent_group_name IotThingGroup#parent_group_name}. |
| <code><a href="#@cdktn/provider-awscc.iotThingGroup.IotThingGroupConfig.property.queryString">queryString</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_thing_group#query_string IotThingGroup#query_string}. |
| <code><a href="#@cdktn/provider-awscc.iotThingGroup.IotThingGroupConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotThingGroup.IotThingGroupTags">IotThingGroupTags</a>[]</code> | An array of key-value pairs to apply to this resource. |
| <code><a href="#@cdktn/provider-awscc.iotThingGroup.IotThingGroupConfig.property.thingGroupName">thingGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_thing_group#thing_group_name IotThingGroup#thing_group_name}. |
| <code><a href="#@cdktn/provider-awscc.iotThingGroup.IotThingGroupConfig.property.thingGroupProperties">thingGroupProperties</a></code> | <code><a href="#@cdktn/provider-awscc.iotThingGroup.IotThingGroupThingGroupProperties">IotThingGroupThingGroupProperties</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_thing_group#thing_group_properties IotThingGroup#thing_group_properties}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.iotThingGroup.IotThingGroupConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.iotThingGroup.IotThingGroupConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.iotThingGroup.IotThingGroupConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.iotThingGroup.IotThingGroupConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.iotThingGroup.IotThingGroupConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotThingGroup.IotThingGroupConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.iotThingGroup.IotThingGroupConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `parentGroupName`<sup>Optional</sup> <a name="parentGroupName" id="@cdktn/provider-awscc.iotThingGroup.IotThingGroupConfig.property.parentGroupName"></a>

```typescript
public readonly parentGroupName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_thing_group#parent_group_name IotThingGroup#parent_group_name}.

---

##### `queryString`<sup>Optional</sup> <a name="queryString" id="@cdktn/provider-awscc.iotThingGroup.IotThingGroupConfig.property.queryString"></a>

```typescript
public readonly queryString: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_thing_group#query_string IotThingGroup#query_string}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.iotThingGroup.IotThingGroupConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | IotThingGroupTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotThingGroup.IotThingGroupTags">IotThingGroupTags</a>[]

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_thing_group#tags IotThingGroup#tags}

---

##### `thingGroupName`<sup>Optional</sup> <a name="thingGroupName" id="@cdktn/provider-awscc.iotThingGroup.IotThingGroupConfig.property.thingGroupName"></a>

```typescript
public readonly thingGroupName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_thing_group#thing_group_name IotThingGroup#thing_group_name}.

---

##### `thingGroupProperties`<sup>Optional</sup> <a name="thingGroupProperties" id="@cdktn/provider-awscc.iotThingGroup.IotThingGroupConfig.property.thingGroupProperties"></a>

```typescript
public readonly thingGroupProperties: IotThingGroupThingGroupProperties;
```

- *Type:* <a href="#@cdktn/provider-awscc.iotThingGroup.IotThingGroupThingGroupProperties">IotThingGroupThingGroupProperties</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_thing_group#thing_group_properties IotThingGroup#thing_group_properties}.

---

### IotThingGroupTags <a name="IotThingGroupTags" id="@cdktn/provider-awscc.iotThingGroup.IotThingGroupTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotThingGroup.IotThingGroupTags.Initializer"></a>

```typescript
import { iotThingGroup } from '@cdktn/provider-awscc'

const iotThingGroupTags: iotThingGroup.IotThingGroupTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotThingGroup.IotThingGroupTags.property.key">key</a></code> | <code>string</code> | Tag key (1-128 chars). No 'aws:' prefix. Allows: [A-Za-z0-9 _.:/=+-]. |
| <code><a href="#@cdktn/provider-awscc.iotThingGroup.IotThingGroupTags.property.value">value</a></code> | <code>string</code> | Tag value (1-256 chars). No 'aws:' prefix. Allows: [A-Za-z0-9 _.:/=+-]. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.iotThingGroup.IotThingGroupTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Tag key (1-128 chars). No 'aws:' prefix. Allows: [A-Za-z0-9 _.:/=+-].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_thing_group#key IotThingGroup#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.iotThingGroup.IotThingGroupTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Tag value (1-256 chars). No 'aws:' prefix. Allows: [A-Za-z0-9 _.:/=+-].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_thing_group#value IotThingGroup#value}

---

### IotThingGroupThingGroupProperties <a name="IotThingGroupThingGroupProperties" id="@cdktn/provider-awscc.iotThingGroup.IotThingGroupThingGroupProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotThingGroup.IotThingGroupThingGroupProperties.Initializer"></a>

```typescript
import { iotThingGroup } from '@cdktn/provider-awscc'

const iotThingGroupThingGroupProperties: iotThingGroup.IotThingGroupThingGroupProperties = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotThingGroup.IotThingGroupThingGroupProperties.property.attributePayload">attributePayload</a></code> | <code><a href="#@cdktn/provider-awscc.iotThingGroup.IotThingGroupThingGroupPropertiesAttributePayload">IotThingGroupThingGroupPropertiesAttributePayload</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_thing_group#attribute_payload IotThingGroup#attribute_payload}. |
| <code><a href="#@cdktn/provider-awscc.iotThingGroup.IotThingGroupThingGroupProperties.property.thingGroupDescription">thingGroupDescription</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_thing_group#thing_group_description IotThingGroup#thing_group_description}. |

---

##### `attributePayload`<sup>Optional</sup> <a name="attributePayload" id="@cdktn/provider-awscc.iotThingGroup.IotThingGroupThingGroupProperties.property.attributePayload"></a>

```typescript
public readonly attributePayload: IotThingGroupThingGroupPropertiesAttributePayload;
```

- *Type:* <a href="#@cdktn/provider-awscc.iotThingGroup.IotThingGroupThingGroupPropertiesAttributePayload">IotThingGroupThingGroupPropertiesAttributePayload</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_thing_group#attribute_payload IotThingGroup#attribute_payload}.

---

##### `thingGroupDescription`<sup>Optional</sup> <a name="thingGroupDescription" id="@cdktn/provider-awscc.iotThingGroup.IotThingGroupThingGroupProperties.property.thingGroupDescription"></a>

```typescript
public readonly thingGroupDescription: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_thing_group#thing_group_description IotThingGroup#thing_group_description}.

---

### IotThingGroupThingGroupPropertiesAttributePayload <a name="IotThingGroupThingGroupPropertiesAttributePayload" id="@cdktn/provider-awscc.iotThingGroup.IotThingGroupThingGroupPropertiesAttributePayload"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotThingGroup.IotThingGroupThingGroupPropertiesAttributePayload.Initializer"></a>

```typescript
import { iotThingGroup } from '@cdktn/provider-awscc'

const iotThingGroupThingGroupPropertiesAttributePayload: iotThingGroup.IotThingGroupThingGroupPropertiesAttributePayload = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotThingGroup.IotThingGroupThingGroupPropertiesAttributePayload.property.attributes">attributes</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_thing_group#attributes IotThingGroup#attributes}. |

---

##### `attributes`<sup>Optional</sup> <a name="attributes" id="@cdktn/provider-awscc.iotThingGroup.IotThingGroupThingGroupPropertiesAttributePayload.property.attributes"></a>

```typescript
public readonly attributes: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_thing_group#attributes IotThingGroup#attributes}.

---

## Classes <a name="Classes" id="Classes"></a>

### IotThingGroupTagsList <a name="IotThingGroupTagsList" id="@cdktn/provider-awscc.iotThingGroup.IotThingGroupTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotThingGroup.IotThingGroupTagsList.Initializer"></a>

```typescript
import { iotThingGroup } from '@cdktn/provider-awscc'

new iotThingGroup.IotThingGroupTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotThingGroup.IotThingGroupTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotThingGroup.IotThingGroupTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotThingGroup.IotThingGroupTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotThingGroup.IotThingGroupTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotThingGroup.IotThingGroupTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.iotThingGroup.IotThingGroupTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotThingGroup.IotThingGroupTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.iotThingGroup.IotThingGroupTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingGroup.IotThingGroupTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotThingGroup.IotThingGroupTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotThingGroup.IotThingGroupTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.iotThingGroup.IotThingGroupTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.iotThingGroup.IotThingGroupTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotThingGroup.IotThingGroupTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotThingGroup.IotThingGroupTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotThingGroup.IotThingGroupTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotThingGroup.IotThingGroupTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.iotThingGroup.IotThingGroupTagsList.get"></a>

```typescript
public get(index: number): IotThingGroupTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.iotThingGroup.IotThingGroupTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotThingGroup.IotThingGroupTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotThingGroup.IotThingGroupTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingGroup.IotThingGroupTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotThingGroup.IotThingGroupTags">IotThingGroupTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotThingGroup.IotThingGroupTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotThingGroup.IotThingGroupTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotThingGroup.IotThingGroupTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IotThingGroupTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotThingGroup.IotThingGroupTags">IotThingGroupTags</a>[]

---


### IotThingGroupTagsOutputReference <a name="IotThingGroupTagsOutputReference" id="@cdktn/provider-awscc.iotThingGroup.IotThingGroupTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotThingGroup.IotThingGroupTagsOutputReference.Initializer"></a>

```typescript
import { iotThingGroup } from '@cdktn/provider-awscc'

new iotThingGroup.IotThingGroupTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotThingGroup.IotThingGroupTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotThingGroup.IotThingGroupTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotThingGroup.IotThingGroupTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.iotThingGroup.IotThingGroupTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotThingGroup.IotThingGroupTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotThingGroup.IotThingGroupTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.iotThingGroup.IotThingGroupTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.iotThingGroup.IotThingGroupTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotThingGroup.IotThingGroupTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingGroup.IotThingGroupTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingGroup.IotThingGroupTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingGroup.IotThingGroupTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingGroup.IotThingGroupTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingGroup.IotThingGroupTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingGroup.IotThingGroupTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingGroup.IotThingGroupTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingGroup.IotThingGroupTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingGroup.IotThingGroupTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingGroup.IotThingGroupTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingGroup.IotThingGroupTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotThingGroup.IotThingGroupTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotThingGroup.IotThingGroupTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingGroup.IotThingGroupTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotThingGroup.IotThingGroupTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotThingGroup.IotThingGroupTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotThingGroup.IotThingGroupTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotThingGroup.IotThingGroupTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotThingGroup.IotThingGroupTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotThingGroup.IotThingGroupTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotThingGroup.IotThingGroupTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotThingGroup.IotThingGroupTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotThingGroup.IotThingGroupTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotThingGroup.IotThingGroupTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotThingGroup.IotThingGroupTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotThingGroup.IotThingGroupTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotThingGroup.IotThingGroupTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotThingGroup.IotThingGroupTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotThingGroup.IotThingGroupTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotThingGroup.IotThingGroupTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotThingGroup.IotThingGroupTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotThingGroup.IotThingGroupTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotThingGroup.IotThingGroupTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotThingGroup.IotThingGroupTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotThingGroup.IotThingGroupTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotThingGroup.IotThingGroupTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotThingGroup.IotThingGroupTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotThingGroup.IotThingGroupTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.iotThingGroup.IotThingGroupTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.iotThingGroup.IotThingGroupTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotThingGroup.IotThingGroupTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotThingGroup.IotThingGroupTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingGroup.IotThingGroupTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingGroup.IotThingGroupTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingGroup.IotThingGroupTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingGroup.IotThingGroupTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingGroup.IotThingGroupTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotThingGroup.IotThingGroupTags">IotThingGroupTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotThingGroup.IotThingGroupTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotThingGroup.IotThingGroupTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.iotThingGroup.IotThingGroupTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.iotThingGroup.IotThingGroupTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.iotThingGroup.IotThingGroupTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotThingGroup.IotThingGroupTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotThingGroup.IotThingGroupTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IotThingGroupTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotThingGroup.IotThingGroupTags">IotThingGroupTags</a>

---


### IotThingGroupThingGroupPropertiesAttributePayloadOutputReference <a name="IotThingGroupThingGroupPropertiesAttributePayloadOutputReference" id="@cdktn/provider-awscc.iotThingGroup.IotThingGroupThingGroupPropertiesAttributePayloadOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotThingGroup.IotThingGroupThingGroupPropertiesAttributePayloadOutputReference.Initializer"></a>

```typescript
import { iotThingGroup } from '@cdktn/provider-awscc'

new iotThingGroup.IotThingGroupThingGroupPropertiesAttributePayloadOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotThingGroup.IotThingGroupThingGroupPropertiesAttributePayloadOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotThingGroup.IotThingGroupThingGroupPropertiesAttributePayloadOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotThingGroup.IotThingGroupThingGroupPropertiesAttributePayloadOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotThingGroup.IotThingGroupThingGroupPropertiesAttributePayloadOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotThingGroup.IotThingGroupThingGroupPropertiesAttributePayloadOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingGroup.IotThingGroupThingGroupPropertiesAttributePayloadOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingGroup.IotThingGroupThingGroupPropertiesAttributePayloadOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingGroup.IotThingGroupThingGroupPropertiesAttributePayloadOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingGroup.IotThingGroupThingGroupPropertiesAttributePayloadOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingGroup.IotThingGroupThingGroupPropertiesAttributePayloadOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingGroup.IotThingGroupThingGroupPropertiesAttributePayloadOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingGroup.IotThingGroupThingGroupPropertiesAttributePayloadOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingGroup.IotThingGroupThingGroupPropertiesAttributePayloadOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingGroup.IotThingGroupThingGroupPropertiesAttributePayloadOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingGroup.IotThingGroupThingGroupPropertiesAttributePayloadOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingGroup.IotThingGroupThingGroupPropertiesAttributePayloadOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotThingGroup.IotThingGroupThingGroupPropertiesAttributePayloadOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotThingGroup.IotThingGroupThingGroupPropertiesAttributePayloadOutputReference.resetAttributes">resetAttributes</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotThingGroup.IotThingGroupThingGroupPropertiesAttributePayloadOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotThingGroup.IotThingGroupThingGroupPropertiesAttributePayloadOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotThingGroup.IotThingGroupThingGroupPropertiesAttributePayloadOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotThingGroup.IotThingGroupThingGroupPropertiesAttributePayloadOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotThingGroup.IotThingGroupThingGroupPropertiesAttributePayloadOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotThingGroup.IotThingGroupThingGroupPropertiesAttributePayloadOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotThingGroup.IotThingGroupThingGroupPropertiesAttributePayloadOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotThingGroup.IotThingGroupThingGroupPropertiesAttributePayloadOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotThingGroup.IotThingGroupThingGroupPropertiesAttributePayloadOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotThingGroup.IotThingGroupThingGroupPropertiesAttributePayloadOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotThingGroup.IotThingGroupThingGroupPropertiesAttributePayloadOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotThingGroup.IotThingGroupThingGroupPropertiesAttributePayloadOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotThingGroup.IotThingGroupThingGroupPropertiesAttributePayloadOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotThingGroup.IotThingGroupThingGroupPropertiesAttributePayloadOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotThingGroup.IotThingGroupThingGroupPropertiesAttributePayloadOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotThingGroup.IotThingGroupThingGroupPropertiesAttributePayloadOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotThingGroup.IotThingGroupThingGroupPropertiesAttributePayloadOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotThingGroup.IotThingGroupThingGroupPropertiesAttributePayloadOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotThingGroup.IotThingGroupThingGroupPropertiesAttributePayloadOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotThingGroup.IotThingGroupThingGroupPropertiesAttributePayloadOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotThingGroup.IotThingGroupThingGroupPropertiesAttributePayloadOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotThingGroup.IotThingGroupThingGroupPropertiesAttributePayloadOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotThingGroup.IotThingGroupThingGroupPropertiesAttributePayloadOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotThingGroup.IotThingGroupThingGroupPropertiesAttributePayloadOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAttributes` <a name="resetAttributes" id="@cdktn/provider-awscc.iotThingGroup.IotThingGroupThingGroupPropertiesAttributePayloadOutputReference.resetAttributes"></a>

```typescript
public resetAttributes(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotThingGroup.IotThingGroupThingGroupPropertiesAttributePayloadOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotThingGroup.IotThingGroupThingGroupPropertiesAttributePayloadOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingGroup.IotThingGroupThingGroupPropertiesAttributePayloadOutputReference.property.attributesInput">attributesInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingGroup.IotThingGroupThingGroupPropertiesAttributePayloadOutputReference.property.attributes">attributes</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingGroup.IotThingGroupThingGroupPropertiesAttributePayloadOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotThingGroup.IotThingGroupThingGroupPropertiesAttributePayload">IotThingGroupThingGroupPropertiesAttributePayload</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotThingGroup.IotThingGroupThingGroupPropertiesAttributePayloadOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotThingGroup.IotThingGroupThingGroupPropertiesAttributePayloadOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `attributesInput`<sup>Optional</sup> <a name="attributesInput" id="@cdktn/provider-awscc.iotThingGroup.IotThingGroupThingGroupPropertiesAttributePayloadOutputReference.property.attributesInput"></a>

```typescript
public readonly attributesInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `attributes`<sup>Required</sup> <a name="attributes" id="@cdktn/provider-awscc.iotThingGroup.IotThingGroupThingGroupPropertiesAttributePayloadOutputReference.property.attributes"></a>

```typescript
public readonly attributes: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotThingGroup.IotThingGroupThingGroupPropertiesAttributePayloadOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IotThingGroupThingGroupPropertiesAttributePayload;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotThingGroup.IotThingGroupThingGroupPropertiesAttributePayload">IotThingGroupThingGroupPropertiesAttributePayload</a>

---


### IotThingGroupThingGroupPropertiesOutputReference <a name="IotThingGroupThingGroupPropertiesOutputReference" id="@cdktn/provider-awscc.iotThingGroup.IotThingGroupThingGroupPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotThingGroup.IotThingGroupThingGroupPropertiesOutputReference.Initializer"></a>

```typescript
import { iotThingGroup } from '@cdktn/provider-awscc'

new iotThingGroup.IotThingGroupThingGroupPropertiesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotThingGroup.IotThingGroupThingGroupPropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotThingGroup.IotThingGroupThingGroupPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotThingGroup.IotThingGroupThingGroupPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotThingGroup.IotThingGroupThingGroupPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotThingGroup.IotThingGroupThingGroupPropertiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingGroup.IotThingGroupThingGroupPropertiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingGroup.IotThingGroupThingGroupPropertiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingGroup.IotThingGroupThingGroupPropertiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingGroup.IotThingGroupThingGroupPropertiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingGroup.IotThingGroupThingGroupPropertiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingGroup.IotThingGroupThingGroupPropertiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingGroup.IotThingGroupThingGroupPropertiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingGroup.IotThingGroupThingGroupPropertiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingGroup.IotThingGroupThingGroupPropertiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingGroup.IotThingGroupThingGroupPropertiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingGroup.IotThingGroupThingGroupPropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotThingGroup.IotThingGroupThingGroupPropertiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotThingGroup.IotThingGroupThingGroupPropertiesOutputReference.putAttributePayload">putAttributePayload</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingGroup.IotThingGroupThingGroupPropertiesOutputReference.resetAttributePayload">resetAttributePayload</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingGroup.IotThingGroupThingGroupPropertiesOutputReference.resetThingGroupDescription">resetThingGroupDescription</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotThingGroup.IotThingGroupThingGroupPropertiesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotThingGroup.IotThingGroupThingGroupPropertiesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotThingGroup.IotThingGroupThingGroupPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotThingGroup.IotThingGroupThingGroupPropertiesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotThingGroup.IotThingGroupThingGroupPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotThingGroup.IotThingGroupThingGroupPropertiesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotThingGroup.IotThingGroupThingGroupPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotThingGroup.IotThingGroupThingGroupPropertiesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotThingGroup.IotThingGroupThingGroupPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotThingGroup.IotThingGroupThingGroupPropertiesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotThingGroup.IotThingGroupThingGroupPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotThingGroup.IotThingGroupThingGroupPropertiesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotThingGroup.IotThingGroupThingGroupPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotThingGroup.IotThingGroupThingGroupPropertiesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotThingGroup.IotThingGroupThingGroupPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotThingGroup.IotThingGroupThingGroupPropertiesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotThingGroup.IotThingGroupThingGroupPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotThingGroup.IotThingGroupThingGroupPropertiesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotThingGroup.IotThingGroupThingGroupPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotThingGroup.IotThingGroupThingGroupPropertiesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotThingGroup.IotThingGroupThingGroupPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotThingGroup.IotThingGroupThingGroupPropertiesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotThingGroup.IotThingGroupThingGroupPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotThingGroup.IotThingGroupThingGroupPropertiesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAttributePayload` <a name="putAttributePayload" id="@cdktn/provider-awscc.iotThingGroup.IotThingGroupThingGroupPropertiesOutputReference.putAttributePayload"></a>

```typescript
public putAttributePayload(value: IotThingGroupThingGroupPropertiesAttributePayload): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotThingGroup.IotThingGroupThingGroupPropertiesOutputReference.putAttributePayload.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotThingGroup.IotThingGroupThingGroupPropertiesAttributePayload">IotThingGroupThingGroupPropertiesAttributePayload</a>

---

##### `resetAttributePayload` <a name="resetAttributePayload" id="@cdktn/provider-awscc.iotThingGroup.IotThingGroupThingGroupPropertiesOutputReference.resetAttributePayload"></a>

```typescript
public resetAttributePayload(): void
```

##### `resetThingGroupDescription` <a name="resetThingGroupDescription" id="@cdktn/provider-awscc.iotThingGroup.IotThingGroupThingGroupPropertiesOutputReference.resetThingGroupDescription"></a>

```typescript
public resetThingGroupDescription(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotThingGroup.IotThingGroupThingGroupPropertiesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotThingGroup.IotThingGroupThingGroupPropertiesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingGroup.IotThingGroupThingGroupPropertiesOutputReference.property.attributePayload">attributePayload</a></code> | <code><a href="#@cdktn/provider-awscc.iotThingGroup.IotThingGroupThingGroupPropertiesAttributePayloadOutputReference">IotThingGroupThingGroupPropertiesAttributePayloadOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingGroup.IotThingGroupThingGroupPropertiesOutputReference.property.attributePayloadInput">attributePayloadInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotThingGroup.IotThingGroupThingGroupPropertiesAttributePayload">IotThingGroupThingGroupPropertiesAttributePayload</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingGroup.IotThingGroupThingGroupPropertiesOutputReference.property.thingGroupDescriptionInput">thingGroupDescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingGroup.IotThingGroupThingGroupPropertiesOutputReference.property.thingGroupDescription">thingGroupDescription</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingGroup.IotThingGroupThingGroupPropertiesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotThingGroup.IotThingGroupThingGroupProperties">IotThingGroupThingGroupProperties</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotThingGroup.IotThingGroupThingGroupPropertiesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotThingGroup.IotThingGroupThingGroupPropertiesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `attributePayload`<sup>Required</sup> <a name="attributePayload" id="@cdktn/provider-awscc.iotThingGroup.IotThingGroupThingGroupPropertiesOutputReference.property.attributePayload"></a>

```typescript
public readonly attributePayload: IotThingGroupThingGroupPropertiesAttributePayloadOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.iotThingGroup.IotThingGroupThingGroupPropertiesAttributePayloadOutputReference">IotThingGroupThingGroupPropertiesAttributePayloadOutputReference</a>

---

##### `attributePayloadInput`<sup>Optional</sup> <a name="attributePayloadInput" id="@cdktn/provider-awscc.iotThingGroup.IotThingGroupThingGroupPropertiesOutputReference.property.attributePayloadInput"></a>

```typescript
public readonly attributePayloadInput: IResolvable | IotThingGroupThingGroupPropertiesAttributePayload;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotThingGroup.IotThingGroupThingGroupPropertiesAttributePayload">IotThingGroupThingGroupPropertiesAttributePayload</a>

---

##### `thingGroupDescriptionInput`<sup>Optional</sup> <a name="thingGroupDescriptionInput" id="@cdktn/provider-awscc.iotThingGroup.IotThingGroupThingGroupPropertiesOutputReference.property.thingGroupDescriptionInput"></a>

```typescript
public readonly thingGroupDescriptionInput: string;
```

- *Type:* string

---

##### `thingGroupDescription`<sup>Required</sup> <a name="thingGroupDescription" id="@cdktn/provider-awscc.iotThingGroup.IotThingGroupThingGroupPropertiesOutputReference.property.thingGroupDescription"></a>

```typescript
public readonly thingGroupDescription: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotThingGroup.IotThingGroupThingGroupPropertiesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IotThingGroupThingGroupProperties;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotThingGroup.IotThingGroupThingGroupProperties">IotThingGroupThingGroupProperties</a>

---



