# `devopsguruResourceCollection` Submodule <a name="`devopsguruResourceCollection` Submodule" id="@cdktn/provider-awscc.devopsguruResourceCollection"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DevopsguruResourceCollection <a name="DevopsguruResourceCollection" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/devopsguru_resource_collection awscc_devopsguru_resource_collection}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.Initializer"></a>

```typescript
import { devopsguruResourceCollection } from '@cdktn/provider-awscc'

new devopsguruResourceCollection.DevopsguruResourceCollection(scope: Construct, id: string, config: DevopsguruResourceCollectionConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionConfig">DevopsguruResourceCollectionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionConfig">DevopsguruResourceCollectionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.putResourceCollectionFilter">putResourceCollectionFilter</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putResourceCollectionFilter` <a name="putResourceCollectionFilter" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.putResourceCollectionFilter"></a>

```typescript
public putResourceCollectionFilter(value: DevopsguruResourceCollectionResourceCollectionFilter): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.putResourceCollectionFilter.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilter">DevopsguruResourceCollectionResourceCollectionFilter</a>

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DevopsguruResourceCollection resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.isConstruct"></a>

```typescript
import { devopsguruResourceCollection } from '@cdktn/provider-awscc'

devopsguruResourceCollection.DevopsguruResourceCollection.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.isTerraformElement"></a>

```typescript
import { devopsguruResourceCollection } from '@cdktn/provider-awscc'

devopsguruResourceCollection.DevopsguruResourceCollection.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.isTerraformResource"></a>

```typescript
import { devopsguruResourceCollection } from '@cdktn/provider-awscc'

devopsguruResourceCollection.DevopsguruResourceCollection.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.generateConfigForImport"></a>

```typescript
import { devopsguruResourceCollection } from '@cdktn/provider-awscc'

devopsguruResourceCollection.DevopsguruResourceCollection.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DevopsguruResourceCollection resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DevopsguruResourceCollection to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DevopsguruResourceCollection that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/devopsguru_resource_collection#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DevopsguruResourceCollection to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.property.resourceCollectionFilter">resourceCollectionFilter</a></code> | <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterOutputReference">DevopsguruResourceCollectionResourceCollectionFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.property.resourceCollectionType">resourceCollectionType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.property.resourceCollectionFilterInput">resourceCollectionFilterInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilter">DevopsguruResourceCollectionResourceCollectionFilter</a></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `resourceCollectionFilter`<sup>Required</sup> <a name="resourceCollectionFilter" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.property.resourceCollectionFilter"></a>

```typescript
public readonly resourceCollectionFilter: DevopsguruResourceCollectionResourceCollectionFilterOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterOutputReference">DevopsguruResourceCollectionResourceCollectionFilterOutputReference</a>

---

##### `resourceCollectionType`<sup>Required</sup> <a name="resourceCollectionType" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.property.resourceCollectionType"></a>

```typescript
public readonly resourceCollectionType: string;
```

- *Type:* string

---

##### `resourceCollectionFilterInput`<sup>Optional</sup> <a name="resourceCollectionFilterInput" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.property.resourceCollectionFilterInput"></a>

```typescript
public readonly resourceCollectionFilterInput: IResolvable | DevopsguruResourceCollectionResourceCollectionFilter;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilter">DevopsguruResourceCollectionResourceCollectionFilter</a>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DevopsguruResourceCollectionConfig <a name="DevopsguruResourceCollectionConfig" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionConfig.Initializer"></a>

```typescript
import { devopsguruResourceCollection } from '@cdktn/provider-awscc'

const devopsguruResourceCollectionConfig: devopsguruResourceCollection.DevopsguruResourceCollectionConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionConfig.property.resourceCollectionFilter">resourceCollectionFilter</a></code> | <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilter">DevopsguruResourceCollectionResourceCollectionFilter</a></code> | Information about a filter used to specify which AWS resources are analyzed for anomalous behavior by DevOps Guru. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `resourceCollectionFilter`<sup>Required</sup> <a name="resourceCollectionFilter" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionConfig.property.resourceCollectionFilter"></a>

```typescript
public readonly resourceCollectionFilter: DevopsguruResourceCollectionResourceCollectionFilter;
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilter">DevopsguruResourceCollectionResourceCollectionFilter</a>

Information about a filter used to specify which AWS resources are analyzed for anomalous behavior by DevOps Guru.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/devopsguru_resource_collection#resource_collection_filter DevopsguruResourceCollection#resource_collection_filter}

---

### DevopsguruResourceCollectionResourceCollectionFilter <a name="DevopsguruResourceCollectionResourceCollectionFilter" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilter.Initializer"></a>

```typescript
import { devopsguruResourceCollection } from '@cdktn/provider-awscc'

const devopsguruResourceCollectionResourceCollectionFilter: devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilter.property.cloudformation">cloudformation</a></code> | <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterCloudformation">DevopsguruResourceCollectionResourceCollectionFilterCloudformation</a></code> | CloudFormation resource for DevOps Guru to monitor. |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilter.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTags">DevopsguruResourceCollectionResourceCollectionFilterTags</a>[]</code> | Tagged resources for DevOps Guru to monitor. |

---

##### `cloudformation`<sup>Optional</sup> <a name="cloudformation" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilter.property.cloudformation"></a>

```typescript
public readonly cloudformation: DevopsguruResourceCollectionResourceCollectionFilterCloudformation;
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterCloudformation">DevopsguruResourceCollectionResourceCollectionFilterCloudformation</a>

CloudFormation resource for DevOps Guru to monitor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/devopsguru_resource_collection#cloudformation DevopsguruResourceCollection#cloudformation}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilter.property.tags"></a>

```typescript
public readonly tags: IResolvable | DevopsguruResourceCollectionResourceCollectionFilterTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTags">DevopsguruResourceCollectionResourceCollectionFilterTags</a>[]

Tagged resources for DevOps Guru to monitor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/devopsguru_resource_collection#tags DevopsguruResourceCollection#tags}

---

### DevopsguruResourceCollectionResourceCollectionFilterCloudformation <a name="DevopsguruResourceCollectionResourceCollectionFilterCloudformation" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterCloudformation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterCloudformation.Initializer"></a>

```typescript
import { devopsguruResourceCollection } from '@cdktn/provider-awscc'

const devopsguruResourceCollectionResourceCollectionFilterCloudformation: devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterCloudformation = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterCloudformation.property.stackNames">stackNames</a></code> | <code>string[]</code> | An array of CloudFormation stack names. |

---

##### `stackNames`<sup>Optional</sup> <a name="stackNames" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterCloudformation.property.stackNames"></a>

```typescript
public readonly stackNames: string[];
```

- *Type:* string[]

An array of CloudFormation stack names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/devopsguru_resource_collection#stack_names DevopsguruResourceCollection#stack_names}

---

### DevopsguruResourceCollectionResourceCollectionFilterTags <a name="DevopsguruResourceCollectionResourceCollectionFilterTags" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTags.Initializer"></a>

```typescript
import { devopsguruResourceCollection } from '@cdktn/provider-awscc'

const devopsguruResourceCollectionResourceCollectionFilterTags: devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTags.property.appBoundaryKey">appBoundaryKey</a></code> | <code>string</code> | A Tag key for DevOps Guru app boundary. |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTags.property.tagValues">tagValues</a></code> | <code>string[]</code> | Tag values of DevOps Guru app boundary. |

---

##### `appBoundaryKey`<sup>Optional</sup> <a name="appBoundaryKey" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTags.property.appBoundaryKey"></a>

```typescript
public readonly appBoundaryKey: string;
```

- *Type:* string

A Tag key for DevOps Guru app boundary.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/devopsguru_resource_collection#app_boundary_key DevopsguruResourceCollection#app_boundary_key}

---

##### `tagValues`<sup>Optional</sup> <a name="tagValues" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTags.property.tagValues"></a>

```typescript
public readonly tagValues: string[];
```

- *Type:* string[]

Tag values of DevOps Guru app boundary.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/devopsguru_resource_collection#tag_values DevopsguruResourceCollection#tag_values}

---

## Classes <a name="Classes" id="Classes"></a>

### DevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference <a name="DevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference.Initializer"></a>

```typescript
import { devopsguruResourceCollection } from '@cdktn/provider-awscc'

new devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference.resetStackNames">resetStackNames</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetStackNames` <a name="resetStackNames" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference.resetStackNames"></a>

```typescript
public resetStackNames(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference.property.stackNamesInput">stackNamesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference.property.stackNames">stackNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterCloudformation">DevopsguruResourceCollectionResourceCollectionFilterCloudformation</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `stackNamesInput`<sup>Optional</sup> <a name="stackNamesInput" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference.property.stackNamesInput"></a>

```typescript
public readonly stackNamesInput: string[];
```

- *Type:* string[]

---

##### `stackNames`<sup>Required</sup> <a name="stackNames" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference.property.stackNames"></a>

```typescript
public readonly stackNames: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DevopsguruResourceCollectionResourceCollectionFilterCloudformation;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterCloudformation">DevopsguruResourceCollectionResourceCollectionFilterCloudformation</a>

---


### DevopsguruResourceCollectionResourceCollectionFilterOutputReference <a name="DevopsguruResourceCollectionResourceCollectionFilterOutputReference" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterOutputReference.Initializer"></a>

```typescript
import { devopsguruResourceCollection } from '@cdktn/provider-awscc'

new devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterOutputReference.putCloudformation">putCloudformation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterOutputReference.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterOutputReference.resetCloudformation">resetCloudformation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterOutputReference.resetTags">resetTags</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCloudformation` <a name="putCloudformation" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterOutputReference.putCloudformation"></a>

```typescript
public putCloudformation(value: DevopsguruResourceCollectionResourceCollectionFilterCloudformation): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterOutputReference.putCloudformation.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterCloudformation">DevopsguruResourceCollectionResourceCollectionFilterCloudformation</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterOutputReference.putTags"></a>

```typescript
public putTags(value: IResolvable | DevopsguruResourceCollectionResourceCollectionFilterTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterOutputReference.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTags">DevopsguruResourceCollectionResourceCollectionFilterTags</a>[]

---

##### `resetCloudformation` <a name="resetCloudformation" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterOutputReference.resetCloudformation"></a>

```typescript
public resetCloudformation(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterOutputReference.resetTags"></a>

```typescript
public resetTags(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterOutputReference.property.cloudformation">cloudformation</a></code> | <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference">DevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterOutputReference.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsList">DevopsguruResourceCollectionResourceCollectionFilterTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterOutputReference.property.cloudformationInput">cloudformationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterCloudformation">DevopsguruResourceCollectionResourceCollectionFilterCloudformation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterOutputReference.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTags">DevopsguruResourceCollectionResourceCollectionFilterTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilter">DevopsguruResourceCollectionResourceCollectionFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cloudformation`<sup>Required</sup> <a name="cloudformation" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterOutputReference.property.cloudformation"></a>

```typescript
public readonly cloudformation: DevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference">DevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterOutputReference.property.tags"></a>

```typescript
public readonly tags: DevopsguruResourceCollectionResourceCollectionFilterTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsList">DevopsguruResourceCollectionResourceCollectionFilterTagsList</a>

---

##### `cloudformationInput`<sup>Optional</sup> <a name="cloudformationInput" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterOutputReference.property.cloudformationInput"></a>

```typescript
public readonly cloudformationInput: IResolvable | DevopsguruResourceCollectionResourceCollectionFilterCloudformation;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterCloudformation">DevopsguruResourceCollectionResourceCollectionFilterCloudformation</a>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterOutputReference.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | DevopsguruResourceCollectionResourceCollectionFilterTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTags">DevopsguruResourceCollectionResourceCollectionFilterTags</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DevopsguruResourceCollectionResourceCollectionFilter;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilter">DevopsguruResourceCollectionResourceCollectionFilter</a>

---


### DevopsguruResourceCollectionResourceCollectionFilterTagsList <a name="DevopsguruResourceCollectionResourceCollectionFilterTagsList" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsList.Initializer"></a>

```typescript
import { devopsguruResourceCollection } from '@cdktn/provider-awscc'

new devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsList.get"></a>

```typescript
public get(index: number): DevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTags">DevopsguruResourceCollectionResourceCollectionFilterTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DevopsguruResourceCollectionResourceCollectionFilterTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTags">DevopsguruResourceCollectionResourceCollectionFilterTags</a>[]

---


### DevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference <a name="DevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.Initializer"></a>

```typescript
import { devopsguruResourceCollection } from '@cdktn/provider-awscc'

new devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.resetAppBoundaryKey">resetAppBoundaryKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.resetTagValues">resetTagValues</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAppBoundaryKey` <a name="resetAppBoundaryKey" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.resetAppBoundaryKey"></a>

```typescript
public resetAppBoundaryKey(): void
```

##### `resetTagValues` <a name="resetTagValues" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.resetTagValues"></a>

```typescript
public resetTagValues(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.property.appBoundaryKeyInput">appBoundaryKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.property.tagValuesInput">tagValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.property.appBoundaryKey">appBoundaryKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.property.tagValues">tagValues</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTags">DevopsguruResourceCollectionResourceCollectionFilterTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `appBoundaryKeyInput`<sup>Optional</sup> <a name="appBoundaryKeyInput" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.property.appBoundaryKeyInput"></a>

```typescript
public readonly appBoundaryKeyInput: string;
```

- *Type:* string

---

##### `tagValuesInput`<sup>Optional</sup> <a name="tagValuesInput" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.property.tagValuesInput"></a>

```typescript
public readonly tagValuesInput: string[];
```

- *Type:* string[]

---

##### `appBoundaryKey`<sup>Required</sup> <a name="appBoundaryKey" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.property.appBoundaryKey"></a>

```typescript
public readonly appBoundaryKey: string;
```

- *Type:* string

---

##### `tagValues`<sup>Required</sup> <a name="tagValues" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.property.tagValues"></a>

```typescript
public readonly tagValues: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DevopsguruResourceCollectionResourceCollectionFilterTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTags">DevopsguruResourceCollectionResourceCollectionFilterTags</a>

---



