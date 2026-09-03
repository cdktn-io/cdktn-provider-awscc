# `connectDataTableAttribute` Submodule <a name="`connectDataTableAttribute` Submodule" id="@cdktn/provider-awscc.connectDataTableAttribute"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ConnectDataTableAttribute <a name="ConnectDataTableAttribute" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_data_table_attribute awscc_connect_data_table_attribute}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.Initializer"></a>

```typescript
import { connectDataTableAttribute } from '@cdktn/provider-awscc'

new connectDataTableAttribute.ConnectDataTableAttribute(scope: Construct, id: string, config: ConnectDataTableAttributeConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeConfig">ConnectDataTableAttributeConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeConfig">ConnectDataTableAttributeConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.putValidation">putValidation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.resetPrimary">resetPrimary</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.resetValidation">resetValidation</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putValidation` <a name="putValidation" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.putValidation"></a>

```typescript
public putValidation(value: ConnectDataTableAttributeValidation): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.putValidation.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidation">ConnectDataTableAttributeValidation</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetPrimary` <a name="resetPrimary" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.resetPrimary"></a>

```typescript
public resetPrimary(): void
```

##### `resetValidation` <a name="resetValidation" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.resetValidation"></a>

```typescript
public resetValidation(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a ConnectDataTableAttribute resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.isConstruct"></a>

```typescript
import { connectDataTableAttribute } from '@cdktn/provider-awscc'

connectDataTableAttribute.ConnectDataTableAttribute.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.isTerraformElement"></a>

```typescript
import { connectDataTableAttribute } from '@cdktn/provider-awscc'

connectDataTableAttribute.ConnectDataTableAttribute.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.isTerraformResource"></a>

```typescript
import { connectDataTableAttribute } from '@cdktn/provider-awscc'

connectDataTableAttribute.ConnectDataTableAttribute.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.generateConfigForImport"></a>

```typescript
import { connectDataTableAttribute } from '@cdktn/provider-awscc'

connectDataTableAttribute.ConnectDataTableAttribute.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a ConnectDataTableAttribute resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ConnectDataTableAttribute to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ConnectDataTableAttribute that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_data_table_attribute#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the ConnectDataTableAttribute to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.property.attributeId">attributeId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.property.lastModifiedRegion">lastModifiedRegion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.property.lastModifiedTime">lastModifiedTime</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.property.lockVersion">lockVersion</a></code> | <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeLockVersionOutputReference">ConnectDataTableAttributeLockVersionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.property.validation">validation</a></code> | <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference">ConnectDataTableAttributeValidationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.property.dataTableArnInput">dataTableArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.property.instanceArnInput">instanceArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.property.primaryInput">primaryInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.property.validationInput">validationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidation">ConnectDataTableAttributeValidation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.property.valueTypeInput">valueTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.property.dataTableArn">dataTableArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.property.instanceArn">instanceArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.property.primary">primary</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.property.valueType">valueType</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `attributeId`<sup>Required</sup> <a name="attributeId" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.property.attributeId"></a>

```typescript
public readonly attributeId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `lastModifiedRegion`<sup>Required</sup> <a name="lastModifiedRegion" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.property.lastModifiedRegion"></a>

```typescript
public readonly lastModifiedRegion: string;
```

- *Type:* string

---

##### `lastModifiedTime`<sup>Required</sup> <a name="lastModifiedTime" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.property.lastModifiedTime"></a>

```typescript
public readonly lastModifiedTime: number;
```

- *Type:* number

---

##### `lockVersion`<sup>Required</sup> <a name="lockVersion" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.property.lockVersion"></a>

```typescript
public readonly lockVersion: ConnectDataTableAttributeLockVersionOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeLockVersionOutputReference">ConnectDataTableAttributeLockVersionOutputReference</a>

---

##### `validation`<sup>Required</sup> <a name="validation" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.property.validation"></a>

```typescript
public readonly validation: ConnectDataTableAttributeValidationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference">ConnectDataTableAttributeValidationOutputReference</a>

---

##### `dataTableArnInput`<sup>Optional</sup> <a name="dataTableArnInput" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.property.dataTableArnInput"></a>

```typescript
public readonly dataTableArnInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `instanceArnInput`<sup>Optional</sup> <a name="instanceArnInput" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.property.instanceArnInput"></a>

```typescript
public readonly instanceArnInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `primaryInput`<sup>Optional</sup> <a name="primaryInput" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.property.primaryInput"></a>

```typescript
public readonly primaryInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `validationInput`<sup>Optional</sup> <a name="validationInput" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.property.validationInput"></a>

```typescript
public readonly validationInput: IResolvable | ConnectDataTableAttributeValidation;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidation">ConnectDataTableAttributeValidation</a>

---

##### `valueTypeInput`<sup>Optional</sup> <a name="valueTypeInput" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.property.valueTypeInput"></a>

```typescript
public readonly valueTypeInput: string;
```

- *Type:* string

---

##### `dataTableArn`<sup>Required</sup> <a name="dataTableArn" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.property.dataTableArn"></a>

```typescript
public readonly dataTableArn: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `instanceArn`<sup>Required</sup> <a name="instanceArn" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.property.instanceArn"></a>

```typescript
public readonly instanceArn: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `primary`<sup>Required</sup> <a name="primary" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.property.primary"></a>

```typescript
public readonly primary: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `valueType`<sup>Required</sup> <a name="valueType" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.property.valueType"></a>

```typescript
public readonly valueType: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ConnectDataTableAttributeConfig <a name="ConnectDataTableAttributeConfig" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeConfig.Initializer"></a>

```typescript
import { connectDataTableAttribute } from '@cdktn/provider-awscc'

const connectDataTableAttributeConfig: connectDataTableAttribute.ConnectDataTableAttributeConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeConfig.property.dataTableArn">dataTableArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_data_table_attribute#data_table_arn ConnectDataTableAttribute#data_table_arn}. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeConfig.property.instanceArn">instanceArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_data_table_attribute#instance_arn ConnectDataTableAttribute#instance_arn}. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_data_table_attribute#name ConnectDataTableAttribute#name}. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeConfig.property.valueType">valueType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_data_table_attribute#value_type ConnectDataTableAttribute#value_type}. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_data_table_attribute#description ConnectDataTableAttribute#description}. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeConfig.property.primary">primary</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_data_table_attribute#primary ConnectDataTableAttribute#primary}. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeConfig.property.validation">validation</a></code> | <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidation">ConnectDataTableAttributeValidation</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_data_table_attribute#validation ConnectDataTableAttribute#validation}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `dataTableArn`<sup>Required</sup> <a name="dataTableArn" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeConfig.property.dataTableArn"></a>

```typescript
public readonly dataTableArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_data_table_attribute#data_table_arn ConnectDataTableAttribute#data_table_arn}.

---

##### `instanceArn`<sup>Required</sup> <a name="instanceArn" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeConfig.property.instanceArn"></a>

```typescript
public readonly instanceArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_data_table_attribute#instance_arn ConnectDataTableAttribute#instance_arn}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_data_table_attribute#name ConnectDataTableAttribute#name}.

---

##### `valueType`<sup>Required</sup> <a name="valueType" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeConfig.property.valueType"></a>

```typescript
public readonly valueType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_data_table_attribute#value_type ConnectDataTableAttribute#value_type}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_data_table_attribute#description ConnectDataTableAttribute#description}.

---

##### `primary`<sup>Optional</sup> <a name="primary" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeConfig.property.primary"></a>

```typescript
public readonly primary: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_data_table_attribute#primary ConnectDataTableAttribute#primary}.

---

##### `validation`<sup>Optional</sup> <a name="validation" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeConfig.property.validation"></a>

```typescript
public readonly validation: ConnectDataTableAttributeValidation;
```

- *Type:* <a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidation">ConnectDataTableAttributeValidation</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_data_table_attribute#validation ConnectDataTableAttribute#validation}.

---

### ConnectDataTableAttributeLockVersion <a name="ConnectDataTableAttributeLockVersion" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeLockVersion"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeLockVersion.Initializer"></a>

```typescript
import { connectDataTableAttribute } from '@cdktn/provider-awscc'

const connectDataTableAttributeLockVersion: connectDataTableAttribute.ConnectDataTableAttributeLockVersion = { ... }
```


### ConnectDataTableAttributeValidation <a name="ConnectDataTableAttributeValidation" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidation.Initializer"></a>

```typescript
import { connectDataTableAttribute } from '@cdktn/provider-awscc'

const connectDataTableAttributeValidation: connectDataTableAttribute.ConnectDataTableAttributeValidation = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidation.property.enum">enum</a></code> | <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationEnum">ConnectDataTableAttributeValidationEnum</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_data_table_attribute#enum ConnectDataTableAttribute#enum}. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidation.property.exclusiveMaximum">exclusiveMaximum</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_data_table_attribute#exclusive_maximum ConnectDataTableAttribute#exclusive_maximum}. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidation.property.exclusiveMinimum">exclusiveMinimum</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_data_table_attribute#exclusive_minimum ConnectDataTableAttribute#exclusive_minimum}. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidation.property.maximum">maximum</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_data_table_attribute#maximum ConnectDataTableAttribute#maximum}. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidation.property.maxLength">maxLength</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_data_table_attribute#max_length ConnectDataTableAttribute#max_length}. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidation.property.maxValues">maxValues</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_data_table_attribute#max_values ConnectDataTableAttribute#max_values}. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidation.property.minimum">minimum</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_data_table_attribute#minimum ConnectDataTableAttribute#minimum}. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidation.property.minLength">minLength</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_data_table_attribute#min_length ConnectDataTableAttribute#min_length}. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidation.property.minValues">minValues</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_data_table_attribute#min_values ConnectDataTableAttribute#min_values}. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidation.property.multipleOf">multipleOf</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_data_table_attribute#multiple_of ConnectDataTableAttribute#multiple_of}. |

---

##### `enum`<sup>Optional</sup> <a name="enum" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidation.property.enum"></a>

```typescript
public readonly enum: ConnectDataTableAttributeValidationEnum;
```

- *Type:* <a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationEnum">ConnectDataTableAttributeValidationEnum</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_data_table_attribute#enum ConnectDataTableAttribute#enum}.

---

##### `exclusiveMaximum`<sup>Optional</sup> <a name="exclusiveMaximum" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidation.property.exclusiveMaximum"></a>

```typescript
public readonly exclusiveMaximum: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_data_table_attribute#exclusive_maximum ConnectDataTableAttribute#exclusive_maximum}.

---

##### `exclusiveMinimum`<sup>Optional</sup> <a name="exclusiveMinimum" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidation.property.exclusiveMinimum"></a>

```typescript
public readonly exclusiveMinimum: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_data_table_attribute#exclusive_minimum ConnectDataTableAttribute#exclusive_minimum}.

---

##### `maximum`<sup>Optional</sup> <a name="maximum" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidation.property.maximum"></a>

```typescript
public readonly maximum: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_data_table_attribute#maximum ConnectDataTableAttribute#maximum}.

---

##### `maxLength`<sup>Optional</sup> <a name="maxLength" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidation.property.maxLength"></a>

```typescript
public readonly maxLength: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_data_table_attribute#max_length ConnectDataTableAttribute#max_length}.

---

##### `maxValues`<sup>Optional</sup> <a name="maxValues" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidation.property.maxValues"></a>

```typescript
public readonly maxValues: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_data_table_attribute#max_values ConnectDataTableAttribute#max_values}.

---

##### `minimum`<sup>Optional</sup> <a name="minimum" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidation.property.minimum"></a>

```typescript
public readonly minimum: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_data_table_attribute#minimum ConnectDataTableAttribute#minimum}.

---

##### `minLength`<sup>Optional</sup> <a name="minLength" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidation.property.minLength"></a>

```typescript
public readonly minLength: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_data_table_attribute#min_length ConnectDataTableAttribute#min_length}.

---

##### `minValues`<sup>Optional</sup> <a name="minValues" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidation.property.minValues"></a>

```typescript
public readonly minValues: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_data_table_attribute#min_values ConnectDataTableAttribute#min_values}.

---

##### `multipleOf`<sup>Optional</sup> <a name="multipleOf" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidation.property.multipleOf"></a>

```typescript
public readonly multipleOf: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_data_table_attribute#multiple_of ConnectDataTableAttribute#multiple_of}.

---

### ConnectDataTableAttributeValidationEnum <a name="ConnectDataTableAttributeValidationEnum" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationEnum"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationEnum.Initializer"></a>

```typescript
import { connectDataTableAttribute } from '@cdktn/provider-awscc'

const connectDataTableAttributeValidationEnum: connectDataTableAttribute.ConnectDataTableAttributeValidationEnum = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationEnum.property.strict">strict</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_data_table_attribute#strict ConnectDataTableAttribute#strict}. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationEnum.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_data_table_attribute#values ConnectDataTableAttribute#values}. |

---

##### `strict`<sup>Optional</sup> <a name="strict" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationEnum.property.strict"></a>

```typescript
public readonly strict: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_data_table_attribute#strict ConnectDataTableAttribute#strict}.

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationEnum.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_data_table_attribute#values ConnectDataTableAttribute#values}.

---

## Classes <a name="Classes" id="Classes"></a>

### ConnectDataTableAttributeLockVersionOutputReference <a name="ConnectDataTableAttributeLockVersionOutputReference" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeLockVersionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeLockVersionOutputReference.Initializer"></a>

```typescript
import { connectDataTableAttribute } from '@cdktn/provider-awscc'

new connectDataTableAttribute.ConnectDataTableAttributeLockVersionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeLockVersionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeLockVersionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeLockVersionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeLockVersionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeLockVersionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeLockVersionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeLockVersionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeLockVersionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeLockVersionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeLockVersionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeLockVersionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeLockVersionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeLockVersionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeLockVersionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeLockVersionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeLockVersionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeLockVersionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeLockVersionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeLockVersionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeLockVersionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeLockVersionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeLockVersionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeLockVersionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeLockVersionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeLockVersionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeLockVersionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeLockVersionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeLockVersionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeLockVersionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeLockVersionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeLockVersionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeLockVersionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeLockVersionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeLockVersionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeLockVersionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeLockVersionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeLockVersionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeLockVersionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeLockVersionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeLockVersionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeLockVersionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeLockVersionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeLockVersionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeLockVersionOutputReference.property.attribute">attribute</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeLockVersionOutputReference.property.dataTable">dataTable</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeLockVersionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeLockVersion">ConnectDataTableAttributeLockVersion</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeLockVersionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeLockVersionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `attribute`<sup>Required</sup> <a name="attribute" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeLockVersionOutputReference.property.attribute"></a>

```typescript
public readonly attribute: string;
```

- *Type:* string

---

##### `dataTable`<sup>Required</sup> <a name="dataTable" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeLockVersionOutputReference.property.dataTable"></a>

```typescript
public readonly dataTable: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeLockVersionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ConnectDataTableAttributeLockVersion;
```

- *Type:* <a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeLockVersion">ConnectDataTableAttributeLockVersion</a>

---


### ConnectDataTableAttributeValidationEnumOutputReference <a name="ConnectDataTableAttributeValidationEnumOutputReference" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationEnumOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationEnumOutputReference.Initializer"></a>

```typescript
import { connectDataTableAttribute } from '@cdktn/provider-awscc'

new connectDataTableAttribute.ConnectDataTableAttributeValidationEnumOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationEnumOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationEnumOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationEnumOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationEnumOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationEnumOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationEnumOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationEnumOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationEnumOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationEnumOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationEnumOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationEnumOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationEnumOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationEnumOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationEnumOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationEnumOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationEnumOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationEnumOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationEnumOutputReference.resetStrict">resetStrict</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationEnumOutputReference.resetValues">resetValues</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationEnumOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationEnumOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationEnumOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationEnumOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationEnumOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationEnumOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationEnumOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationEnumOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationEnumOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationEnumOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationEnumOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationEnumOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationEnumOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationEnumOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationEnumOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationEnumOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationEnumOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationEnumOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationEnumOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationEnumOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationEnumOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationEnumOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationEnumOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationEnumOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetStrict` <a name="resetStrict" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationEnumOutputReference.resetStrict"></a>

```typescript
public resetStrict(): void
```

##### `resetValues` <a name="resetValues" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationEnumOutputReference.resetValues"></a>

```typescript
public resetValues(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationEnumOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationEnumOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationEnumOutputReference.property.strictInput">strictInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationEnumOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationEnumOutputReference.property.strict">strict</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationEnumOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationEnumOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationEnum">ConnectDataTableAttributeValidationEnum</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationEnumOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationEnumOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `strictInput`<sup>Optional</sup> <a name="strictInput" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationEnumOutputReference.property.strictInput"></a>

```typescript
public readonly strictInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationEnumOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `strict`<sup>Required</sup> <a name="strict" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationEnumOutputReference.property.strict"></a>

```typescript
public readonly strict: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationEnumOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationEnumOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ConnectDataTableAttributeValidationEnum;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationEnum">ConnectDataTableAttributeValidationEnum</a>

---


### ConnectDataTableAttributeValidationOutputReference <a name="ConnectDataTableAttributeValidationOutputReference" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.Initializer"></a>

```typescript
import { connectDataTableAttribute } from '@cdktn/provider-awscc'

new connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.putEnum">putEnum</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.resetEnum">resetEnum</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.resetExclusiveMaximum">resetExclusiveMaximum</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.resetExclusiveMinimum">resetExclusiveMinimum</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.resetMaximum">resetMaximum</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.resetMaxLength">resetMaxLength</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.resetMaxValues">resetMaxValues</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.resetMinimum">resetMinimum</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.resetMinLength">resetMinLength</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.resetMinValues">resetMinValues</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.resetMultipleOf">resetMultipleOf</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putEnum` <a name="putEnum" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.putEnum"></a>

```typescript
public putEnum(value: ConnectDataTableAttributeValidationEnum): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.putEnum.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationEnum">ConnectDataTableAttributeValidationEnum</a>

---

##### `resetEnum` <a name="resetEnum" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.resetEnum"></a>

```typescript
public resetEnum(): void
```

##### `resetExclusiveMaximum` <a name="resetExclusiveMaximum" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.resetExclusiveMaximum"></a>

```typescript
public resetExclusiveMaximum(): void
```

##### `resetExclusiveMinimum` <a name="resetExclusiveMinimum" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.resetExclusiveMinimum"></a>

```typescript
public resetExclusiveMinimum(): void
```

##### `resetMaximum` <a name="resetMaximum" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.resetMaximum"></a>

```typescript
public resetMaximum(): void
```

##### `resetMaxLength` <a name="resetMaxLength" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.resetMaxLength"></a>

```typescript
public resetMaxLength(): void
```

##### `resetMaxValues` <a name="resetMaxValues" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.resetMaxValues"></a>

```typescript
public resetMaxValues(): void
```

##### `resetMinimum` <a name="resetMinimum" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.resetMinimum"></a>

```typescript
public resetMinimum(): void
```

##### `resetMinLength` <a name="resetMinLength" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.resetMinLength"></a>

```typescript
public resetMinLength(): void
```

##### `resetMinValues` <a name="resetMinValues" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.resetMinValues"></a>

```typescript
public resetMinValues(): void
```

##### `resetMultipleOf` <a name="resetMultipleOf" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.resetMultipleOf"></a>

```typescript
public resetMultipleOf(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.property.enum">enum</a></code> | <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationEnumOutputReference">ConnectDataTableAttributeValidationEnumOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.property.enumInput">enumInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationEnum">ConnectDataTableAttributeValidationEnum</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.property.exclusiveMaximumInput">exclusiveMaximumInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.property.exclusiveMinimumInput">exclusiveMinimumInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.property.maximumInput">maximumInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.property.maxLengthInput">maxLengthInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.property.maxValuesInput">maxValuesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.property.minimumInput">minimumInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.property.minLengthInput">minLengthInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.property.minValuesInput">minValuesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.property.multipleOfInput">multipleOfInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.property.exclusiveMaximum">exclusiveMaximum</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.property.exclusiveMinimum">exclusiveMinimum</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.property.maximum">maximum</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.property.maxLength">maxLength</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.property.maxValues">maxValues</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.property.minimum">minimum</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.property.minLength">minLength</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.property.minValues">minValues</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.property.multipleOf">multipleOf</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidation">ConnectDataTableAttributeValidation</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `enum`<sup>Required</sup> <a name="enum" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.property.enum"></a>

```typescript
public readonly enum: ConnectDataTableAttributeValidationEnumOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationEnumOutputReference">ConnectDataTableAttributeValidationEnumOutputReference</a>

---

##### `enumInput`<sup>Optional</sup> <a name="enumInput" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.property.enumInput"></a>

```typescript
public readonly enumInput: IResolvable | ConnectDataTableAttributeValidationEnum;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationEnum">ConnectDataTableAttributeValidationEnum</a>

---

##### `exclusiveMaximumInput`<sup>Optional</sup> <a name="exclusiveMaximumInput" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.property.exclusiveMaximumInput"></a>

```typescript
public readonly exclusiveMaximumInput: number;
```

- *Type:* number

---

##### `exclusiveMinimumInput`<sup>Optional</sup> <a name="exclusiveMinimumInput" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.property.exclusiveMinimumInput"></a>

```typescript
public readonly exclusiveMinimumInput: number;
```

- *Type:* number

---

##### `maximumInput`<sup>Optional</sup> <a name="maximumInput" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.property.maximumInput"></a>

```typescript
public readonly maximumInput: number;
```

- *Type:* number

---

##### `maxLengthInput`<sup>Optional</sup> <a name="maxLengthInput" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.property.maxLengthInput"></a>

```typescript
public readonly maxLengthInput: number;
```

- *Type:* number

---

##### `maxValuesInput`<sup>Optional</sup> <a name="maxValuesInput" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.property.maxValuesInput"></a>

```typescript
public readonly maxValuesInput: number;
```

- *Type:* number

---

##### `minimumInput`<sup>Optional</sup> <a name="minimumInput" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.property.minimumInput"></a>

```typescript
public readonly minimumInput: number;
```

- *Type:* number

---

##### `minLengthInput`<sup>Optional</sup> <a name="minLengthInput" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.property.minLengthInput"></a>

```typescript
public readonly minLengthInput: number;
```

- *Type:* number

---

##### `minValuesInput`<sup>Optional</sup> <a name="minValuesInput" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.property.minValuesInput"></a>

```typescript
public readonly minValuesInput: number;
```

- *Type:* number

---

##### `multipleOfInput`<sup>Optional</sup> <a name="multipleOfInput" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.property.multipleOfInput"></a>

```typescript
public readonly multipleOfInput: number;
```

- *Type:* number

---

##### `exclusiveMaximum`<sup>Required</sup> <a name="exclusiveMaximum" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.property.exclusiveMaximum"></a>

```typescript
public readonly exclusiveMaximum: number;
```

- *Type:* number

---

##### `exclusiveMinimum`<sup>Required</sup> <a name="exclusiveMinimum" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.property.exclusiveMinimum"></a>

```typescript
public readonly exclusiveMinimum: number;
```

- *Type:* number

---

##### `maximum`<sup>Required</sup> <a name="maximum" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.property.maximum"></a>

```typescript
public readonly maximum: number;
```

- *Type:* number

---

##### `maxLength`<sup>Required</sup> <a name="maxLength" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.property.maxLength"></a>

```typescript
public readonly maxLength: number;
```

- *Type:* number

---

##### `maxValues`<sup>Required</sup> <a name="maxValues" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.property.maxValues"></a>

```typescript
public readonly maxValues: number;
```

- *Type:* number

---

##### `minimum`<sup>Required</sup> <a name="minimum" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.property.minimum"></a>

```typescript
public readonly minimum: number;
```

- *Type:* number

---

##### `minLength`<sup>Required</sup> <a name="minLength" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.property.minLength"></a>

```typescript
public readonly minLength: number;
```

- *Type:* number

---

##### `minValues`<sup>Required</sup> <a name="minValues" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.property.minValues"></a>

```typescript
public readonly minValues: number;
```

- *Type:* number

---

##### `multipleOf`<sup>Required</sup> <a name="multipleOf" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.property.multipleOf"></a>

```typescript
public readonly multipleOf: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ConnectDataTableAttributeValidation;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidation">ConnectDataTableAttributeValidation</a>

---



