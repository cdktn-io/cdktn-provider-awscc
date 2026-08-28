# `opensearchDataSource` Submodule <a name="`opensearchDataSource` Submodule" id="@cdktn/provider-awscc.opensearchDataSource"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OpensearchDataSource <a name="OpensearchDataSource" id="@cdktn/provider-awscc.opensearchDataSource.OpensearchDataSource"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/opensearch_data_source awscc_opensearch_data_source}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.opensearchDataSource.OpensearchDataSource.Initializer"></a>

```typescript
import { opensearchDataSource } from '@cdktn/provider-awscc'

new opensearchDataSource.OpensearchDataSource(scope: Construct, id: string, config: OpensearchDataSourceConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchDataSource.OpensearchDataSource.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.opensearchDataSource.OpensearchDataSource.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.opensearchDataSource.OpensearchDataSource.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.opensearchDataSource.OpensearchDataSourceConfig">OpensearchDataSourceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.opensearchDataSource.OpensearchDataSource.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.opensearchDataSource.OpensearchDataSource.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.opensearchDataSource.OpensearchDataSource.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.opensearchDataSource.OpensearchDataSourceConfig">OpensearchDataSourceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchDataSource.OpensearchDataSource.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.opensearchDataSource.OpensearchDataSource.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.opensearchDataSource.OpensearchDataSource.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchDataSource.OpensearchDataSource.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.opensearchDataSource.OpensearchDataSource.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.opensearchDataSource.OpensearchDataSource.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchDataSource.OpensearchDataSource.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchDataSource.OpensearchDataSource.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.opensearchDataSource.OpensearchDataSource.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.opensearchDataSource.OpensearchDataSource.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchDataSource.OpensearchDataSource.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchDataSource.OpensearchDataSource.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchDataSource.OpensearchDataSource.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchDataSource.OpensearchDataSource.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchDataSource.OpensearchDataSource.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchDataSource.OpensearchDataSource.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchDataSource.OpensearchDataSource.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchDataSource.OpensearchDataSource.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchDataSource.OpensearchDataSource.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchDataSource.OpensearchDataSource.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchDataSource.OpensearchDataSource.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchDataSource.OpensearchDataSource.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.opensearchDataSource.OpensearchDataSource.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.opensearchDataSource.OpensearchDataSource.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.opensearchDataSource.OpensearchDataSource.putDataSourceType">putDataSourceType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchDataSource.OpensearchDataSource.resetDescription">resetDescription</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.opensearchDataSource.OpensearchDataSource.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.opensearchDataSource.OpensearchDataSource.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.opensearchDataSource.OpensearchDataSource.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.opensearchDataSource.OpensearchDataSource.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.opensearchDataSource.OpensearchDataSource.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.opensearchDataSource.OpensearchDataSource.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.opensearchDataSource.OpensearchDataSource.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.opensearchDataSource.OpensearchDataSource.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.opensearchDataSource.OpensearchDataSource.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.opensearchDataSource.OpensearchDataSource.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.opensearchDataSource.OpensearchDataSource.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.opensearchDataSource.OpensearchDataSource.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.opensearchDataSource.OpensearchDataSource.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.opensearchDataSource.OpensearchDataSource.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.opensearchDataSource.OpensearchDataSource.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchDataSource.OpensearchDataSource.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.opensearchDataSource.OpensearchDataSource.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchDataSource.OpensearchDataSource.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.opensearchDataSource.OpensearchDataSource.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchDataSource.OpensearchDataSource.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.opensearchDataSource.OpensearchDataSource.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchDataSource.OpensearchDataSource.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.opensearchDataSource.OpensearchDataSource.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchDataSource.OpensearchDataSource.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.opensearchDataSource.OpensearchDataSource.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchDataSource.OpensearchDataSource.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.opensearchDataSource.OpensearchDataSource.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchDataSource.OpensearchDataSource.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.opensearchDataSource.OpensearchDataSource.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchDataSource.OpensearchDataSource.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.opensearchDataSource.OpensearchDataSource.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchDataSource.OpensearchDataSource.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.opensearchDataSource.OpensearchDataSource.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.opensearchDataSource.OpensearchDataSource.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.opensearchDataSource.OpensearchDataSource.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.opensearchDataSource.OpensearchDataSource.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.opensearchDataSource.OpensearchDataSource.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchDataSource.OpensearchDataSource.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.opensearchDataSource.OpensearchDataSource.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.opensearchDataSource.OpensearchDataSource.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.opensearchDataSource.OpensearchDataSource.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.opensearchDataSource.OpensearchDataSource.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.opensearchDataSource.OpensearchDataSource.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.opensearchDataSource.OpensearchDataSource.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.opensearchDataSource.OpensearchDataSource.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putDataSourceType` <a name="putDataSourceType" id="@cdktn/provider-awscc.opensearchDataSource.OpensearchDataSource.putDataSourceType"></a>

```typescript
public putDataSourceType(value: OpensearchDataSourceDataSourceType): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.opensearchDataSource.OpensearchDataSource.putDataSourceType.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.opensearchDataSource.OpensearchDataSourceDataSourceType">OpensearchDataSourceDataSourceType</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.opensearchDataSource.OpensearchDataSource.resetDescription"></a>

```typescript
public resetDescription(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchDataSource.OpensearchDataSource.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.opensearchDataSource.OpensearchDataSource.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchDataSource.OpensearchDataSource.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchDataSource.OpensearchDataSource.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a OpensearchDataSource resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.opensearchDataSource.OpensearchDataSource.isConstruct"></a>

```typescript
import { opensearchDataSource } from '@cdktn/provider-awscc'

opensearchDataSource.OpensearchDataSource.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.opensearchDataSource.OpensearchDataSource.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.opensearchDataSource.OpensearchDataSource.isTerraformElement"></a>

```typescript
import { opensearchDataSource } from '@cdktn/provider-awscc'

opensearchDataSource.OpensearchDataSource.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.opensearchDataSource.OpensearchDataSource.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.opensearchDataSource.OpensearchDataSource.isTerraformResource"></a>

```typescript
import { opensearchDataSource } from '@cdktn/provider-awscc'

opensearchDataSource.OpensearchDataSource.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.opensearchDataSource.OpensearchDataSource.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.opensearchDataSource.OpensearchDataSource.generateConfigForImport"></a>

```typescript
import { opensearchDataSource } from '@cdktn/provider-awscc'

opensearchDataSource.OpensearchDataSource.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a OpensearchDataSource resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.opensearchDataSource.OpensearchDataSource.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.opensearchDataSource.OpensearchDataSource.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the OpensearchDataSource to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.opensearchDataSource.OpensearchDataSource.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing OpensearchDataSource that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/opensearch_data_source#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.opensearchDataSource.OpensearchDataSource.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the OpensearchDataSource to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchDataSource.OpensearchDataSource.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.opensearchDataSource.OpensearchDataSource.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchDataSource.OpensearchDataSource.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchDataSource.OpensearchDataSource.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchDataSource.OpensearchDataSource.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchDataSource.OpensearchDataSource.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchDataSource.OpensearchDataSource.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchDataSource.OpensearchDataSource.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchDataSource.OpensearchDataSource.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchDataSource.OpensearchDataSource.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchDataSource.OpensearchDataSource.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchDataSource.OpensearchDataSource.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchDataSource.OpensearchDataSource.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchDataSource.OpensearchDataSource.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchDataSource.OpensearchDataSource.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchDataSource.OpensearchDataSource.property.dataSourceType">dataSourceType</a></code> | <code><a href="#@cdktn/provider-awscc.opensearchDataSource.OpensearchDataSourceDataSourceTypeOutputReference">OpensearchDataSourceDataSourceTypeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchDataSource.OpensearchDataSource.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchDataSource.OpensearchDataSource.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchDataSource.OpensearchDataSource.property.dataSourceTypeInput">dataSourceTypeInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.opensearchDataSource.OpensearchDataSourceDataSourceType">OpensearchDataSourceDataSourceType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchDataSource.OpensearchDataSource.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchDataSource.OpensearchDataSource.property.domainNameInput">domainNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchDataSource.OpensearchDataSource.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchDataSource.OpensearchDataSource.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchDataSource.OpensearchDataSource.property.domainName">domainName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchDataSource.OpensearchDataSource.property.name">name</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.opensearchDataSource.OpensearchDataSource.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.opensearchDataSource.OpensearchDataSource.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.opensearchDataSource.OpensearchDataSource.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.opensearchDataSource.OpensearchDataSource.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.opensearchDataSource.OpensearchDataSource.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.opensearchDataSource.OpensearchDataSource.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.opensearchDataSource.OpensearchDataSource.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.opensearchDataSource.OpensearchDataSource.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.opensearchDataSource.OpensearchDataSource.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.opensearchDataSource.OpensearchDataSource.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.opensearchDataSource.OpensearchDataSource.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.opensearchDataSource.OpensearchDataSource.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.opensearchDataSource.OpensearchDataSource.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.opensearchDataSource.OpensearchDataSource.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.opensearchDataSource.OpensearchDataSource.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `dataSourceType`<sup>Required</sup> <a name="dataSourceType" id="@cdktn/provider-awscc.opensearchDataSource.OpensearchDataSource.property.dataSourceType"></a>

```typescript
public readonly dataSourceType: OpensearchDataSourceDataSourceTypeOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.opensearchDataSource.OpensearchDataSourceDataSourceTypeOutputReference">OpensearchDataSourceDataSourceTypeOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.opensearchDataSource.OpensearchDataSource.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.opensearchDataSource.OpensearchDataSource.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `dataSourceTypeInput`<sup>Optional</sup> <a name="dataSourceTypeInput" id="@cdktn/provider-awscc.opensearchDataSource.OpensearchDataSource.property.dataSourceTypeInput"></a>

```typescript
public readonly dataSourceTypeInput: IResolvable | OpensearchDataSourceDataSourceType;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.opensearchDataSource.OpensearchDataSourceDataSourceType">OpensearchDataSourceDataSourceType</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.opensearchDataSource.OpensearchDataSource.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `domainNameInput`<sup>Optional</sup> <a name="domainNameInput" id="@cdktn/provider-awscc.opensearchDataSource.OpensearchDataSource.property.domainNameInput"></a>

```typescript
public readonly domainNameInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.opensearchDataSource.OpensearchDataSource.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.opensearchDataSource.OpensearchDataSource.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `domainName`<sup>Required</sup> <a name="domainName" id="@cdktn/provider-awscc.opensearchDataSource.OpensearchDataSource.property.domainName"></a>

```typescript
public readonly domainName: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.opensearchDataSource.OpensearchDataSource.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchDataSource.OpensearchDataSource.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.opensearchDataSource.OpensearchDataSource.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### OpensearchDataSourceConfig <a name="OpensearchDataSourceConfig" id="@cdktn/provider-awscc.opensearchDataSource.OpensearchDataSourceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.opensearchDataSource.OpensearchDataSourceConfig.Initializer"></a>

```typescript
import { opensearchDataSource } from '@cdktn/provider-awscc'

const opensearchDataSourceConfig: opensearchDataSource.OpensearchDataSourceConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchDataSource.OpensearchDataSourceConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchDataSource.OpensearchDataSourceConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchDataSource.OpensearchDataSourceConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchDataSource.OpensearchDataSourceConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchDataSource.OpensearchDataSourceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchDataSource.OpensearchDataSourceConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchDataSource.OpensearchDataSourceConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchDataSource.OpensearchDataSourceConfig.property.dataSourceType">dataSourceType</a></code> | <code><a href="#@cdktn/provider-awscc.opensearchDataSource.OpensearchDataSourceDataSourceType">OpensearchDataSourceDataSourceType</a></code> | The type of data source. |
| <code><a href="#@cdktn/provider-awscc.opensearchDataSource.OpensearchDataSourceConfig.property.domainName">domainName</a></code> | <code>string</code> | The name of the OpenSearch Service domain. |
| <code><a href="#@cdktn/provider-awscc.opensearchDataSource.OpensearchDataSourceConfig.property.name">name</a></code> | <code>string</code> | The name of the data source. |
| <code><a href="#@cdktn/provider-awscc.opensearchDataSource.OpensearchDataSourceConfig.property.description">description</a></code> | <code>string</code> | A description of the data source. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.opensearchDataSource.OpensearchDataSourceConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.opensearchDataSource.OpensearchDataSourceConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.opensearchDataSource.OpensearchDataSourceConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.opensearchDataSource.OpensearchDataSourceConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.opensearchDataSource.OpensearchDataSourceConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.opensearchDataSource.OpensearchDataSourceConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.opensearchDataSource.OpensearchDataSourceConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `dataSourceType`<sup>Required</sup> <a name="dataSourceType" id="@cdktn/provider-awscc.opensearchDataSource.OpensearchDataSourceConfig.property.dataSourceType"></a>

```typescript
public readonly dataSourceType: OpensearchDataSourceDataSourceType;
```

- *Type:* <a href="#@cdktn/provider-awscc.opensearchDataSource.OpensearchDataSourceDataSourceType">OpensearchDataSourceDataSourceType</a>

The type of data source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/opensearch_data_source#data_source_type OpensearchDataSource#data_source_type}

---

##### `domainName`<sup>Required</sup> <a name="domainName" id="@cdktn/provider-awscc.opensearchDataSource.OpensearchDataSourceConfig.property.domainName"></a>

```typescript
public readonly domainName: string;
```

- *Type:* string

The name of the OpenSearch Service domain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/opensearch_data_source#domain_name OpensearchDataSource#domain_name}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.opensearchDataSource.OpensearchDataSourceConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the data source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/opensearch_data_source#name OpensearchDataSource#name}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.opensearchDataSource.OpensearchDataSourceConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

A description of the data source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/opensearch_data_source#description OpensearchDataSource#description}

---

### OpensearchDataSourceDataSourceType <a name="OpensearchDataSourceDataSourceType" id="@cdktn/provider-awscc.opensearchDataSource.OpensearchDataSourceDataSourceType"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.opensearchDataSource.OpensearchDataSourceDataSourceType.Initializer"></a>

```typescript
import { opensearchDataSource } from '@cdktn/provider-awscc'

const opensearchDataSourceDataSourceType: opensearchDataSource.OpensearchDataSourceDataSourceType = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchDataSource.OpensearchDataSourceDataSourceType.property.s3GlueDataCatalog">s3GlueDataCatalog</a></code> | <code><a href="#@cdktn/provider-awscc.opensearchDataSource.OpensearchDataSourceDataSourceTypeS3GlueDataCatalog">OpensearchDataSourceDataSourceTypeS3GlueDataCatalog</a></code> | Configuration for an S3 Glue Data Catalog data source. |

---

##### `s3GlueDataCatalog`<sup>Optional</sup> <a name="s3GlueDataCatalog" id="@cdktn/provider-awscc.opensearchDataSource.OpensearchDataSourceDataSourceType.property.s3GlueDataCatalog"></a>

```typescript
public readonly s3GlueDataCatalog: OpensearchDataSourceDataSourceTypeS3GlueDataCatalog;
```

- *Type:* <a href="#@cdktn/provider-awscc.opensearchDataSource.OpensearchDataSourceDataSourceTypeS3GlueDataCatalog">OpensearchDataSourceDataSourceTypeS3GlueDataCatalog</a>

Configuration for an S3 Glue Data Catalog data source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/opensearch_data_source#s3_glue_data_catalog OpensearchDataSource#s3_glue_data_catalog}

---

### OpensearchDataSourceDataSourceTypeS3GlueDataCatalog <a name="OpensearchDataSourceDataSourceTypeS3GlueDataCatalog" id="@cdktn/provider-awscc.opensearchDataSource.OpensearchDataSourceDataSourceTypeS3GlueDataCatalog"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.opensearchDataSource.OpensearchDataSourceDataSourceTypeS3GlueDataCatalog.Initializer"></a>

```typescript
import { opensearchDataSource } from '@cdktn/provider-awscc'

const opensearchDataSourceDataSourceTypeS3GlueDataCatalog: opensearchDataSource.OpensearchDataSourceDataSourceTypeS3GlueDataCatalog = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchDataSource.OpensearchDataSourceDataSourceTypeS3GlueDataCatalog.property.roleArn">roleArn</a></code> | <code>string</code> | The ARN of the IAM role that grants OpenSearch Service permission to access the Glue Data Catalog. |

---

##### `roleArn`<sup>Optional</sup> <a name="roleArn" id="@cdktn/provider-awscc.opensearchDataSource.OpensearchDataSourceDataSourceTypeS3GlueDataCatalog.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

The ARN of the IAM role that grants OpenSearch Service permission to access the Glue Data Catalog.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/opensearch_data_source#role_arn OpensearchDataSource#role_arn}

---

## Classes <a name="Classes" id="Classes"></a>

### OpensearchDataSourceDataSourceTypeOutputReference <a name="OpensearchDataSourceDataSourceTypeOutputReference" id="@cdktn/provider-awscc.opensearchDataSource.OpensearchDataSourceDataSourceTypeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.opensearchDataSource.OpensearchDataSourceDataSourceTypeOutputReference.Initializer"></a>

```typescript
import { opensearchDataSource } from '@cdktn/provider-awscc'

new opensearchDataSource.OpensearchDataSourceDataSourceTypeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchDataSource.OpensearchDataSourceDataSourceTypeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.opensearchDataSource.OpensearchDataSourceDataSourceTypeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.opensearchDataSource.OpensearchDataSourceDataSourceTypeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchDataSource.OpensearchDataSourceDataSourceTypeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchDataSource.OpensearchDataSourceDataSourceTypeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchDataSource.OpensearchDataSourceDataSourceTypeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchDataSource.OpensearchDataSourceDataSourceTypeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchDataSource.OpensearchDataSourceDataSourceTypeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchDataSource.OpensearchDataSourceDataSourceTypeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchDataSource.OpensearchDataSourceDataSourceTypeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchDataSource.OpensearchDataSourceDataSourceTypeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchDataSource.OpensearchDataSourceDataSourceTypeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchDataSource.OpensearchDataSourceDataSourceTypeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchDataSource.OpensearchDataSourceDataSourceTypeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchDataSource.OpensearchDataSourceDataSourceTypeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchDataSource.OpensearchDataSourceDataSourceTypeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.opensearchDataSource.OpensearchDataSourceDataSourceTypeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.opensearchDataSource.OpensearchDataSourceDataSourceTypeOutputReference.putS3GlueDataCatalog">putS3GlueDataCatalog</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchDataSource.OpensearchDataSourceDataSourceTypeOutputReference.resetS3GlueDataCatalog">resetS3GlueDataCatalog</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.opensearchDataSource.OpensearchDataSourceDataSourceTypeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.opensearchDataSource.OpensearchDataSourceDataSourceTypeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchDataSource.OpensearchDataSourceDataSourceTypeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.opensearchDataSource.OpensearchDataSourceDataSourceTypeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchDataSource.OpensearchDataSourceDataSourceTypeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.opensearchDataSource.OpensearchDataSourceDataSourceTypeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchDataSource.OpensearchDataSourceDataSourceTypeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.opensearchDataSource.OpensearchDataSourceDataSourceTypeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchDataSource.OpensearchDataSourceDataSourceTypeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.opensearchDataSource.OpensearchDataSourceDataSourceTypeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchDataSource.OpensearchDataSourceDataSourceTypeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.opensearchDataSource.OpensearchDataSourceDataSourceTypeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchDataSource.OpensearchDataSourceDataSourceTypeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.opensearchDataSource.OpensearchDataSourceDataSourceTypeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchDataSource.OpensearchDataSourceDataSourceTypeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.opensearchDataSource.OpensearchDataSourceDataSourceTypeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchDataSource.OpensearchDataSourceDataSourceTypeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.opensearchDataSource.OpensearchDataSourceDataSourceTypeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchDataSource.OpensearchDataSourceDataSourceTypeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.opensearchDataSource.OpensearchDataSourceDataSourceTypeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.opensearchDataSource.OpensearchDataSourceDataSourceTypeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.opensearchDataSource.OpensearchDataSourceDataSourceTypeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.opensearchDataSource.OpensearchDataSourceDataSourceTypeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.opensearchDataSource.OpensearchDataSourceDataSourceTypeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putS3GlueDataCatalog` <a name="putS3GlueDataCatalog" id="@cdktn/provider-awscc.opensearchDataSource.OpensearchDataSourceDataSourceTypeOutputReference.putS3GlueDataCatalog"></a>

```typescript
public putS3GlueDataCatalog(value: OpensearchDataSourceDataSourceTypeS3GlueDataCatalog): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.opensearchDataSource.OpensearchDataSourceDataSourceTypeOutputReference.putS3GlueDataCatalog.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.opensearchDataSource.OpensearchDataSourceDataSourceTypeS3GlueDataCatalog">OpensearchDataSourceDataSourceTypeS3GlueDataCatalog</a>

---

##### `resetS3GlueDataCatalog` <a name="resetS3GlueDataCatalog" id="@cdktn/provider-awscc.opensearchDataSource.OpensearchDataSourceDataSourceTypeOutputReference.resetS3GlueDataCatalog"></a>

```typescript
public resetS3GlueDataCatalog(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchDataSource.OpensearchDataSourceDataSourceTypeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.opensearchDataSource.OpensearchDataSourceDataSourceTypeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchDataSource.OpensearchDataSourceDataSourceTypeOutputReference.property.s3GlueDataCatalog">s3GlueDataCatalog</a></code> | <code><a href="#@cdktn/provider-awscc.opensearchDataSource.OpensearchDataSourceDataSourceTypeS3GlueDataCatalogOutputReference">OpensearchDataSourceDataSourceTypeS3GlueDataCatalogOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchDataSource.OpensearchDataSourceDataSourceTypeOutputReference.property.s3GlueDataCatalogInput">s3GlueDataCatalogInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.opensearchDataSource.OpensearchDataSourceDataSourceTypeS3GlueDataCatalog">OpensearchDataSourceDataSourceTypeS3GlueDataCatalog</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchDataSource.OpensearchDataSourceDataSourceTypeOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.opensearchDataSource.OpensearchDataSourceDataSourceType">OpensearchDataSourceDataSourceType</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.opensearchDataSource.OpensearchDataSourceDataSourceTypeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.opensearchDataSource.OpensearchDataSourceDataSourceTypeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `s3GlueDataCatalog`<sup>Required</sup> <a name="s3GlueDataCatalog" id="@cdktn/provider-awscc.opensearchDataSource.OpensearchDataSourceDataSourceTypeOutputReference.property.s3GlueDataCatalog"></a>

```typescript
public readonly s3GlueDataCatalog: OpensearchDataSourceDataSourceTypeS3GlueDataCatalogOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.opensearchDataSource.OpensearchDataSourceDataSourceTypeS3GlueDataCatalogOutputReference">OpensearchDataSourceDataSourceTypeS3GlueDataCatalogOutputReference</a>

---

##### `s3GlueDataCatalogInput`<sup>Optional</sup> <a name="s3GlueDataCatalogInput" id="@cdktn/provider-awscc.opensearchDataSource.OpensearchDataSourceDataSourceTypeOutputReference.property.s3GlueDataCatalogInput"></a>

```typescript
public readonly s3GlueDataCatalogInput: IResolvable | OpensearchDataSourceDataSourceTypeS3GlueDataCatalog;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.opensearchDataSource.OpensearchDataSourceDataSourceTypeS3GlueDataCatalog">OpensearchDataSourceDataSourceTypeS3GlueDataCatalog</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.opensearchDataSource.OpensearchDataSourceDataSourceTypeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OpensearchDataSourceDataSourceType;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.opensearchDataSource.OpensearchDataSourceDataSourceType">OpensearchDataSourceDataSourceType</a>

---


### OpensearchDataSourceDataSourceTypeS3GlueDataCatalogOutputReference <a name="OpensearchDataSourceDataSourceTypeS3GlueDataCatalogOutputReference" id="@cdktn/provider-awscc.opensearchDataSource.OpensearchDataSourceDataSourceTypeS3GlueDataCatalogOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.opensearchDataSource.OpensearchDataSourceDataSourceTypeS3GlueDataCatalogOutputReference.Initializer"></a>

```typescript
import { opensearchDataSource } from '@cdktn/provider-awscc'

new opensearchDataSource.OpensearchDataSourceDataSourceTypeS3GlueDataCatalogOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchDataSource.OpensearchDataSourceDataSourceTypeS3GlueDataCatalogOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.opensearchDataSource.OpensearchDataSourceDataSourceTypeS3GlueDataCatalogOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.opensearchDataSource.OpensearchDataSourceDataSourceTypeS3GlueDataCatalogOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchDataSource.OpensearchDataSourceDataSourceTypeS3GlueDataCatalogOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchDataSource.OpensearchDataSourceDataSourceTypeS3GlueDataCatalogOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchDataSource.OpensearchDataSourceDataSourceTypeS3GlueDataCatalogOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchDataSource.OpensearchDataSourceDataSourceTypeS3GlueDataCatalogOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchDataSource.OpensearchDataSourceDataSourceTypeS3GlueDataCatalogOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchDataSource.OpensearchDataSourceDataSourceTypeS3GlueDataCatalogOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchDataSource.OpensearchDataSourceDataSourceTypeS3GlueDataCatalogOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchDataSource.OpensearchDataSourceDataSourceTypeS3GlueDataCatalogOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchDataSource.OpensearchDataSourceDataSourceTypeS3GlueDataCatalogOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchDataSource.OpensearchDataSourceDataSourceTypeS3GlueDataCatalogOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchDataSource.OpensearchDataSourceDataSourceTypeS3GlueDataCatalogOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchDataSource.OpensearchDataSourceDataSourceTypeS3GlueDataCatalogOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchDataSource.OpensearchDataSourceDataSourceTypeS3GlueDataCatalogOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.opensearchDataSource.OpensearchDataSourceDataSourceTypeS3GlueDataCatalogOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.opensearchDataSource.OpensearchDataSourceDataSourceTypeS3GlueDataCatalogOutputReference.resetRoleArn">resetRoleArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.opensearchDataSource.OpensearchDataSourceDataSourceTypeS3GlueDataCatalogOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.opensearchDataSource.OpensearchDataSourceDataSourceTypeS3GlueDataCatalogOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchDataSource.OpensearchDataSourceDataSourceTypeS3GlueDataCatalogOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.opensearchDataSource.OpensearchDataSourceDataSourceTypeS3GlueDataCatalogOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchDataSource.OpensearchDataSourceDataSourceTypeS3GlueDataCatalogOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.opensearchDataSource.OpensearchDataSourceDataSourceTypeS3GlueDataCatalogOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchDataSource.OpensearchDataSourceDataSourceTypeS3GlueDataCatalogOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.opensearchDataSource.OpensearchDataSourceDataSourceTypeS3GlueDataCatalogOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchDataSource.OpensearchDataSourceDataSourceTypeS3GlueDataCatalogOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.opensearchDataSource.OpensearchDataSourceDataSourceTypeS3GlueDataCatalogOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchDataSource.OpensearchDataSourceDataSourceTypeS3GlueDataCatalogOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.opensearchDataSource.OpensearchDataSourceDataSourceTypeS3GlueDataCatalogOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchDataSource.OpensearchDataSourceDataSourceTypeS3GlueDataCatalogOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.opensearchDataSource.OpensearchDataSourceDataSourceTypeS3GlueDataCatalogOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchDataSource.OpensearchDataSourceDataSourceTypeS3GlueDataCatalogOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.opensearchDataSource.OpensearchDataSourceDataSourceTypeS3GlueDataCatalogOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchDataSource.OpensearchDataSourceDataSourceTypeS3GlueDataCatalogOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.opensearchDataSource.OpensearchDataSourceDataSourceTypeS3GlueDataCatalogOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchDataSource.OpensearchDataSourceDataSourceTypeS3GlueDataCatalogOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.opensearchDataSource.OpensearchDataSourceDataSourceTypeS3GlueDataCatalogOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.opensearchDataSource.OpensearchDataSourceDataSourceTypeS3GlueDataCatalogOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.opensearchDataSource.OpensearchDataSourceDataSourceTypeS3GlueDataCatalogOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.opensearchDataSource.OpensearchDataSourceDataSourceTypeS3GlueDataCatalogOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.opensearchDataSource.OpensearchDataSourceDataSourceTypeS3GlueDataCatalogOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRoleArn` <a name="resetRoleArn" id="@cdktn/provider-awscc.opensearchDataSource.OpensearchDataSourceDataSourceTypeS3GlueDataCatalogOutputReference.resetRoleArn"></a>

```typescript
public resetRoleArn(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchDataSource.OpensearchDataSourceDataSourceTypeS3GlueDataCatalogOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.opensearchDataSource.OpensearchDataSourceDataSourceTypeS3GlueDataCatalogOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchDataSource.OpensearchDataSourceDataSourceTypeS3GlueDataCatalogOutputReference.property.roleArnInput">roleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchDataSource.OpensearchDataSourceDataSourceTypeS3GlueDataCatalogOutputReference.property.roleArn">roleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchDataSource.OpensearchDataSourceDataSourceTypeS3GlueDataCatalogOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.opensearchDataSource.OpensearchDataSourceDataSourceTypeS3GlueDataCatalog">OpensearchDataSourceDataSourceTypeS3GlueDataCatalog</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.opensearchDataSource.OpensearchDataSourceDataSourceTypeS3GlueDataCatalogOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.opensearchDataSource.OpensearchDataSourceDataSourceTypeS3GlueDataCatalogOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `roleArnInput`<sup>Optional</sup> <a name="roleArnInput" id="@cdktn/provider-awscc.opensearchDataSource.OpensearchDataSourceDataSourceTypeS3GlueDataCatalogOutputReference.property.roleArnInput"></a>

```typescript
public readonly roleArnInput: string;
```

- *Type:* string

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktn/provider-awscc.opensearchDataSource.OpensearchDataSourceDataSourceTypeS3GlueDataCatalogOutputReference.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.opensearchDataSource.OpensearchDataSourceDataSourceTypeS3GlueDataCatalogOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OpensearchDataSourceDataSourceTypeS3GlueDataCatalog;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.opensearchDataSource.OpensearchDataSourceDataSourceTypeS3GlueDataCatalog">OpensearchDataSourceDataSourceTypeS3GlueDataCatalog</a>

---



