# `dataAwsccMgnNetworkMigrationDefinition` Submodule <a name="`dataAwsccMgnNetworkMigrationDefinition` Submodule" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccMgnNetworkMigrationDefinition <a name="DataAwsccMgnNetworkMigrationDefinition" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinition"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/mgn_network_migration_definition awscc_mgn_network_migration_definition}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinition.Initializer"></a>

```typescript
import { dataAwsccMgnNetworkMigrationDefinition } from '@cdktn/provider-awscc'

new dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinition(scope: Construct, id: string, config: DataAwsccMgnNetworkMigrationDefinitionConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinition.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinition.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinition.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionConfig">DataAwsccMgnNetworkMigrationDefinitionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinition.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinition.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinition.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionConfig">DataAwsccMgnNetworkMigrationDefinitionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinition.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinition.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinition.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinition.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinition.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinition.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinition.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinition.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinition.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinition.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinition.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinition.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinition.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinition.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinition.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinition.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinition.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinition.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinition.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinition.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinition.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinition.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinition.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinition.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinition.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinition.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinition.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinition.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinition.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinition.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinition.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinition.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinition.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinition.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinition.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinition.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinition.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinition.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinition.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinition.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinition.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinition.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinition.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinition.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinition.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinition.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinition.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinition.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinition.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinition.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinition.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinition.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinition.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinition.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccMgnNetworkMigrationDefinition resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinition.isConstruct"></a>

```typescript
import { dataAwsccMgnNetworkMigrationDefinition } from '@cdktn/provider-awscc'

dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinition.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinition.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinition.isTerraformElement"></a>

```typescript
import { dataAwsccMgnNetworkMigrationDefinition } from '@cdktn/provider-awscc'

dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinition.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinition.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinition.isTerraformDataSource"></a>

```typescript
import { dataAwsccMgnNetworkMigrationDefinition } from '@cdktn/provider-awscc'

dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinition.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinition.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinition.generateConfigForImport"></a>

```typescript
import { dataAwsccMgnNetworkMigrationDefinition } from '@cdktn/provider-awscc'

dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinition.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccMgnNetworkMigrationDefinition resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinition.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinition.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccMgnNetworkMigrationDefinition to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinition.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccMgnNetworkMigrationDefinition that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/mgn_network_migration_definition#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinition.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccMgnNetworkMigrationDefinition to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinition.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinition.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinition.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinition.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinition.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinition.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinition.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinition.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinition.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinition.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinition.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinition.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinition.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinition.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinition.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinition.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinition.property.networkMigrationDefinitionId">networkMigrationDefinitionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinition.property.scopeTags">scopeTags</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinition.property.sourceConfigurations">sourceConfigurations</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsList">DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinition.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTagsList">DataAwsccMgnNetworkMigrationDefinitionTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinition.property.targetDeployment">targetDeployment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinition.property.targetNetwork">targetNetwork</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTargetNetworkOutputReference">DataAwsccMgnNetworkMigrationDefinitionTargetNetworkOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinition.property.targetS3Configuration">targetS3Configuration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTargetS3ConfigurationOutputReference">DataAwsccMgnNetworkMigrationDefinitionTargetS3ConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinition.property.updatedAt">updatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinition.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinition.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinition.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinition.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinition.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinition.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinition.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinition.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinition.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinition.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinition.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinition.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinition.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinition.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinition.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinition.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinition.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinition.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `networkMigrationDefinitionId`<sup>Required</sup> <a name="networkMigrationDefinitionId" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinition.property.networkMigrationDefinitionId"></a>

```typescript
public readonly networkMigrationDefinitionId: string;
```

- *Type:* string

---

##### `scopeTags`<sup>Required</sup> <a name="scopeTags" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinition.property.scopeTags"></a>

```typescript
public readonly scopeTags: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `sourceConfigurations`<sup>Required</sup> <a name="sourceConfigurations" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinition.property.sourceConfigurations"></a>

```typescript
public readonly sourceConfigurations: DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsList">DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsList</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinition.property.tags"></a>

```typescript
public readonly tags: DataAwsccMgnNetworkMigrationDefinitionTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTagsList">DataAwsccMgnNetworkMigrationDefinitionTagsList</a>

---

##### `targetDeployment`<sup>Required</sup> <a name="targetDeployment" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinition.property.targetDeployment"></a>

```typescript
public readonly targetDeployment: string;
```

- *Type:* string

---

##### `targetNetwork`<sup>Required</sup> <a name="targetNetwork" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinition.property.targetNetwork"></a>

```typescript
public readonly targetNetwork: DataAwsccMgnNetworkMigrationDefinitionTargetNetworkOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTargetNetworkOutputReference">DataAwsccMgnNetworkMigrationDefinitionTargetNetworkOutputReference</a>

---

##### `targetS3Configuration`<sup>Required</sup> <a name="targetS3Configuration" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinition.property.targetS3Configuration"></a>

```typescript
public readonly targetS3Configuration: DataAwsccMgnNetworkMigrationDefinitionTargetS3ConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTargetS3ConfigurationOutputReference">DataAwsccMgnNetworkMigrationDefinitionTargetS3ConfigurationOutputReference</a>

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinition.property.updatedAt"></a>

```typescript
public readonly updatedAt: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinition.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinition.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinition.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinition.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccMgnNetworkMigrationDefinitionConfig <a name="DataAwsccMgnNetworkMigrationDefinitionConfig" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionConfig.Initializer"></a>

```typescript
import { dataAwsccMgnNetworkMigrationDefinition } from '@cdktn/provider-awscc'

const dataAwsccMgnNetworkMigrationDefinitionConfig: dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/mgn_network_migration_definition#id DataAwsccMgnNetworkMigrationDefinition#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccMgnNetworkMigrationDefinitionSourceConfigurations <a name="DataAwsccMgnNetworkMigrationDefinitionSourceConfigurations" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurations.Initializer"></a>

```typescript
import { dataAwsccMgnNetworkMigrationDefinition } from '@cdktn/provider-awscc'

const dataAwsccMgnNetworkMigrationDefinitionSourceConfigurations: dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurations = { ... }
```


### DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsSourceS3Configuration <a name="DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsSourceS3Configuration" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsSourceS3Configuration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsSourceS3Configuration.Initializer"></a>

```typescript
import { dataAwsccMgnNetworkMigrationDefinition } from '@cdktn/provider-awscc'

const dataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsSourceS3Configuration: dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsSourceS3Configuration = { ... }
```


### DataAwsccMgnNetworkMigrationDefinitionTags <a name="DataAwsccMgnNetworkMigrationDefinitionTags" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTags.Initializer"></a>

```typescript
import { dataAwsccMgnNetworkMigrationDefinition } from '@cdktn/provider-awscc'

const dataAwsccMgnNetworkMigrationDefinitionTags: dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTags = { ... }
```


### DataAwsccMgnNetworkMigrationDefinitionTargetNetwork <a name="DataAwsccMgnNetworkMigrationDefinitionTargetNetwork" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTargetNetwork"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTargetNetwork.Initializer"></a>

```typescript
import { dataAwsccMgnNetworkMigrationDefinition } from '@cdktn/provider-awscc'

const dataAwsccMgnNetworkMigrationDefinitionTargetNetwork: dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTargetNetwork = { ... }
```


### DataAwsccMgnNetworkMigrationDefinitionTargetS3Configuration <a name="DataAwsccMgnNetworkMigrationDefinitionTargetS3Configuration" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTargetS3Configuration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTargetS3Configuration.Initializer"></a>

```typescript
import { dataAwsccMgnNetworkMigrationDefinition } from '@cdktn/provider-awscc'

const dataAwsccMgnNetworkMigrationDefinitionTargetS3Configuration: dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTargetS3Configuration = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsList <a name="DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsList" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsList.Initializer"></a>

```typescript
import { dataAwsccMgnNetworkMigrationDefinition } from '@cdktn/provider-awscc'

new dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsList.get"></a>

```typescript
public get(index: number): DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsOutputReference <a name="DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsOutputReference" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsOutputReference.Initializer"></a>

```typescript
import { dataAwsccMgnNetworkMigrationDefinition } from '@cdktn/provider-awscc'

new dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsOutputReference.property.sourceEnvironment">sourceEnvironment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsOutputReference.property.sourceS3Configuration">sourceS3Configuration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsSourceS3ConfigurationOutputReference">DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsSourceS3ConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurations">DataAwsccMgnNetworkMigrationDefinitionSourceConfigurations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `sourceEnvironment`<sup>Required</sup> <a name="sourceEnvironment" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsOutputReference.property.sourceEnvironment"></a>

```typescript
public readonly sourceEnvironment: string;
```

- *Type:* string

---

##### `sourceS3Configuration`<sup>Required</sup> <a name="sourceS3Configuration" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsOutputReference.property.sourceS3Configuration"></a>

```typescript
public readonly sourceS3Configuration: DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsSourceS3ConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsSourceS3ConfigurationOutputReference">DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsSourceS3ConfigurationOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccMgnNetworkMigrationDefinitionSourceConfigurations;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurations">DataAwsccMgnNetworkMigrationDefinitionSourceConfigurations</a>

---


### DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsSourceS3ConfigurationOutputReference <a name="DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsSourceS3ConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsSourceS3ConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsSourceS3ConfigurationOutputReference.Initializer"></a>

```typescript
import { dataAwsccMgnNetworkMigrationDefinition } from '@cdktn/provider-awscc'

new dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsSourceS3ConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsSourceS3ConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsSourceS3ConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsSourceS3ConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsSourceS3ConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsSourceS3ConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsSourceS3ConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsSourceS3ConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsSourceS3ConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsSourceS3ConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsSourceS3ConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsSourceS3ConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsSourceS3ConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsSourceS3ConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsSourceS3ConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsSourceS3ConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsSourceS3ConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsSourceS3ConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsSourceS3ConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsSourceS3ConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsSourceS3ConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsSourceS3ConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsSourceS3ConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsSourceS3ConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsSourceS3ConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsSourceS3ConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsSourceS3ConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsSourceS3ConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsSourceS3ConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsSourceS3ConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsSourceS3ConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsSourceS3ConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsSourceS3ConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsSourceS3ConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsSourceS3ConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsSourceS3ConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsSourceS3ConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsSourceS3ConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsSourceS3ConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsSourceS3ConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsSourceS3ConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsSourceS3ConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsSourceS3ConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsSourceS3ConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsSourceS3ConfigurationOutputReference.property.s3Bucket">s3Bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsSourceS3ConfigurationOutputReference.property.s3BucketOwner">s3BucketOwner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsSourceS3ConfigurationOutputReference.property.s3Key">s3Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsSourceS3ConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsSourceS3Configuration">DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsSourceS3Configuration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsSourceS3ConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsSourceS3ConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `s3Bucket`<sup>Required</sup> <a name="s3Bucket" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsSourceS3ConfigurationOutputReference.property.s3Bucket"></a>

```typescript
public readonly s3Bucket: string;
```

- *Type:* string

---

##### `s3BucketOwner`<sup>Required</sup> <a name="s3BucketOwner" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsSourceS3ConfigurationOutputReference.property.s3BucketOwner"></a>

```typescript
public readonly s3BucketOwner: string;
```

- *Type:* string

---

##### `s3Key`<sup>Required</sup> <a name="s3Key" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsSourceS3ConfigurationOutputReference.property.s3Key"></a>

```typescript
public readonly s3Key: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsSourceS3ConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsSourceS3Configuration;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsSourceS3Configuration">DataAwsccMgnNetworkMigrationDefinitionSourceConfigurationsSourceS3Configuration</a>

---


### DataAwsccMgnNetworkMigrationDefinitionTagsList <a name="DataAwsccMgnNetworkMigrationDefinitionTagsList" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTagsList.Initializer"></a>

```typescript
import { dataAwsccMgnNetworkMigrationDefinition } from '@cdktn/provider-awscc'

new dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTagsList.get"></a>

```typescript
public get(index: number): DataAwsccMgnNetworkMigrationDefinitionTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccMgnNetworkMigrationDefinitionTagsOutputReference <a name="DataAwsccMgnNetworkMigrationDefinitionTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTagsOutputReference.Initializer"></a>

```typescript
import { dataAwsccMgnNetworkMigrationDefinition } from '@cdktn/provider-awscc'

new dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTags">DataAwsccMgnNetworkMigrationDefinitionTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccMgnNetworkMigrationDefinitionTags;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTags">DataAwsccMgnNetworkMigrationDefinitionTags</a>

---


### DataAwsccMgnNetworkMigrationDefinitionTargetNetworkOutputReference <a name="DataAwsccMgnNetworkMigrationDefinitionTargetNetworkOutputReference" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTargetNetworkOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTargetNetworkOutputReference.Initializer"></a>

```typescript
import { dataAwsccMgnNetworkMigrationDefinition } from '@cdktn/provider-awscc'

new dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTargetNetworkOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTargetNetworkOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTargetNetworkOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTargetNetworkOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTargetNetworkOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTargetNetworkOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTargetNetworkOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTargetNetworkOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTargetNetworkOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTargetNetworkOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTargetNetworkOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTargetNetworkOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTargetNetworkOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTargetNetworkOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTargetNetworkOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTargetNetworkOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTargetNetworkOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTargetNetworkOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTargetNetworkOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTargetNetworkOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTargetNetworkOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTargetNetworkOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTargetNetworkOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTargetNetworkOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTargetNetworkOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTargetNetworkOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTargetNetworkOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTargetNetworkOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTargetNetworkOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTargetNetworkOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTargetNetworkOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTargetNetworkOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTargetNetworkOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTargetNetworkOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTargetNetworkOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTargetNetworkOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTargetNetworkOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTargetNetworkOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTargetNetworkOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTargetNetworkOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTargetNetworkOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTargetNetworkOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTargetNetworkOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTargetNetworkOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTargetNetworkOutputReference.property.inboundCidr">inboundCidr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTargetNetworkOutputReference.property.inspectionCidr">inspectionCidr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTargetNetworkOutputReference.property.outboundCidr">outboundCidr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTargetNetworkOutputReference.property.topology">topology</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTargetNetworkOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTargetNetwork">DataAwsccMgnNetworkMigrationDefinitionTargetNetwork</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTargetNetworkOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTargetNetworkOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `inboundCidr`<sup>Required</sup> <a name="inboundCidr" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTargetNetworkOutputReference.property.inboundCidr"></a>

```typescript
public readonly inboundCidr: string;
```

- *Type:* string

---

##### `inspectionCidr`<sup>Required</sup> <a name="inspectionCidr" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTargetNetworkOutputReference.property.inspectionCidr"></a>

```typescript
public readonly inspectionCidr: string;
```

- *Type:* string

---

##### `outboundCidr`<sup>Required</sup> <a name="outboundCidr" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTargetNetworkOutputReference.property.outboundCidr"></a>

```typescript
public readonly outboundCidr: string;
```

- *Type:* string

---

##### `topology`<sup>Required</sup> <a name="topology" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTargetNetworkOutputReference.property.topology"></a>

```typescript
public readonly topology: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTargetNetworkOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccMgnNetworkMigrationDefinitionTargetNetwork;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTargetNetwork">DataAwsccMgnNetworkMigrationDefinitionTargetNetwork</a>

---


### DataAwsccMgnNetworkMigrationDefinitionTargetS3ConfigurationOutputReference <a name="DataAwsccMgnNetworkMigrationDefinitionTargetS3ConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTargetS3ConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTargetS3ConfigurationOutputReference.Initializer"></a>

```typescript
import { dataAwsccMgnNetworkMigrationDefinition } from '@cdktn/provider-awscc'

new dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTargetS3ConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTargetS3ConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTargetS3ConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTargetS3ConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTargetS3ConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTargetS3ConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTargetS3ConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTargetS3ConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTargetS3ConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTargetS3ConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTargetS3ConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTargetS3ConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTargetS3ConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTargetS3ConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTargetS3ConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTargetS3ConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTargetS3ConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTargetS3ConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTargetS3ConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTargetS3ConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTargetS3ConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTargetS3ConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTargetS3ConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTargetS3ConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTargetS3ConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTargetS3ConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTargetS3ConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTargetS3ConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTargetS3ConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTargetS3ConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTargetS3ConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTargetS3ConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTargetS3ConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTargetS3ConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTargetS3ConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTargetS3ConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTargetS3ConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTargetS3ConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTargetS3ConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTargetS3ConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTargetS3ConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTargetS3ConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTargetS3ConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTargetS3ConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTargetS3ConfigurationOutputReference.property.s3Bucket">s3Bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTargetS3ConfigurationOutputReference.property.s3BucketOwner">s3BucketOwner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTargetS3ConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTargetS3Configuration">DataAwsccMgnNetworkMigrationDefinitionTargetS3Configuration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTargetS3ConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTargetS3ConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `s3Bucket`<sup>Required</sup> <a name="s3Bucket" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTargetS3ConfigurationOutputReference.property.s3Bucket"></a>

```typescript
public readonly s3Bucket: string;
```

- *Type:* string

---

##### `s3BucketOwner`<sup>Required</sup> <a name="s3BucketOwner" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTargetS3ConfigurationOutputReference.property.s3BucketOwner"></a>

```typescript
public readonly s3BucketOwner: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTargetS3ConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccMgnNetworkMigrationDefinitionTargetS3Configuration;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMgnNetworkMigrationDefinition.DataAwsccMgnNetworkMigrationDefinitionTargetS3Configuration">DataAwsccMgnNetworkMigrationDefinitionTargetS3Configuration</a>

---



