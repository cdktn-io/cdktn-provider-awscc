# `dataAwsccCodestarconnectionsSyncConfiguration` Submodule <a name="`dataAwsccCodestarconnectionsSyncConfiguration` Submodule" id="@cdktn/provider-awscc.dataAwsccCodestarconnectionsSyncConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccCodestarconnectionsSyncConfiguration <a name="DataAwsccCodestarconnectionsSyncConfiguration" id="@cdktn/provider-awscc.dataAwsccCodestarconnectionsSyncConfiguration.DataAwsccCodestarconnectionsSyncConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/codestarconnections_sync_configuration awscc_codestarconnections_sync_configuration}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCodestarconnectionsSyncConfiguration.DataAwsccCodestarconnectionsSyncConfiguration.Initializer"></a>

```typescript
import { dataAwsccCodestarconnectionsSyncConfiguration } from '@cdktn/provider-awscc'

new dataAwsccCodestarconnectionsSyncConfiguration.DataAwsccCodestarconnectionsSyncConfiguration(scope: Construct, id: string, config: DataAwsccCodestarconnectionsSyncConfigurationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarconnectionsSyncConfiguration.DataAwsccCodestarconnectionsSyncConfiguration.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarconnectionsSyncConfiguration.DataAwsccCodestarconnectionsSyncConfiguration.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarconnectionsSyncConfiguration.DataAwsccCodestarconnectionsSyncConfiguration.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarconnectionsSyncConfiguration.DataAwsccCodestarconnectionsSyncConfigurationConfig">DataAwsccCodestarconnectionsSyncConfigurationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccCodestarconnectionsSyncConfiguration.DataAwsccCodestarconnectionsSyncConfiguration.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccCodestarconnectionsSyncConfiguration.DataAwsccCodestarconnectionsSyncConfiguration.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccCodestarconnectionsSyncConfiguration.DataAwsccCodestarconnectionsSyncConfiguration.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodestarconnectionsSyncConfiguration.DataAwsccCodestarconnectionsSyncConfigurationConfig">DataAwsccCodestarconnectionsSyncConfigurationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarconnectionsSyncConfiguration.DataAwsccCodestarconnectionsSyncConfiguration.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarconnectionsSyncConfiguration.DataAwsccCodestarconnectionsSyncConfiguration.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarconnectionsSyncConfiguration.DataAwsccCodestarconnectionsSyncConfiguration.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarconnectionsSyncConfiguration.DataAwsccCodestarconnectionsSyncConfiguration.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarconnectionsSyncConfiguration.DataAwsccCodestarconnectionsSyncConfiguration.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarconnectionsSyncConfiguration.DataAwsccCodestarconnectionsSyncConfiguration.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarconnectionsSyncConfiguration.DataAwsccCodestarconnectionsSyncConfiguration.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarconnectionsSyncConfiguration.DataAwsccCodestarconnectionsSyncConfiguration.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarconnectionsSyncConfiguration.DataAwsccCodestarconnectionsSyncConfiguration.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarconnectionsSyncConfiguration.DataAwsccCodestarconnectionsSyncConfiguration.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarconnectionsSyncConfiguration.DataAwsccCodestarconnectionsSyncConfiguration.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarconnectionsSyncConfiguration.DataAwsccCodestarconnectionsSyncConfiguration.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarconnectionsSyncConfiguration.DataAwsccCodestarconnectionsSyncConfiguration.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarconnectionsSyncConfiguration.DataAwsccCodestarconnectionsSyncConfiguration.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarconnectionsSyncConfiguration.DataAwsccCodestarconnectionsSyncConfiguration.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarconnectionsSyncConfiguration.DataAwsccCodestarconnectionsSyncConfiguration.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarconnectionsSyncConfiguration.DataAwsccCodestarconnectionsSyncConfiguration.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarconnectionsSyncConfiguration.DataAwsccCodestarconnectionsSyncConfiguration.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccCodestarconnectionsSyncConfiguration.DataAwsccCodestarconnectionsSyncConfiguration.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccCodestarconnectionsSyncConfiguration.DataAwsccCodestarconnectionsSyncConfiguration.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccCodestarconnectionsSyncConfiguration.DataAwsccCodestarconnectionsSyncConfiguration.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccCodestarconnectionsSyncConfiguration.DataAwsccCodestarconnectionsSyncConfiguration.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccCodestarconnectionsSyncConfiguration.DataAwsccCodestarconnectionsSyncConfiguration.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccCodestarconnectionsSyncConfiguration.DataAwsccCodestarconnectionsSyncConfiguration.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccCodestarconnectionsSyncConfiguration.DataAwsccCodestarconnectionsSyncConfiguration.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccCodestarconnectionsSyncConfiguration.DataAwsccCodestarconnectionsSyncConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccCodestarconnectionsSyncConfiguration.DataAwsccCodestarconnectionsSyncConfiguration.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccCodestarconnectionsSyncConfiguration.DataAwsccCodestarconnectionsSyncConfiguration.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccCodestarconnectionsSyncConfiguration.DataAwsccCodestarconnectionsSyncConfiguration.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccCodestarconnectionsSyncConfiguration.DataAwsccCodestarconnectionsSyncConfiguration.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodestarconnectionsSyncConfiguration.DataAwsccCodestarconnectionsSyncConfiguration.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodestarconnectionsSyncConfiguration.DataAwsccCodestarconnectionsSyncConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCodestarconnectionsSyncConfiguration.DataAwsccCodestarconnectionsSyncConfiguration.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodestarconnectionsSyncConfiguration.DataAwsccCodestarconnectionsSyncConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodestarconnectionsSyncConfiguration.DataAwsccCodestarconnectionsSyncConfiguration.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodestarconnectionsSyncConfiguration.DataAwsccCodestarconnectionsSyncConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccCodestarconnectionsSyncConfiguration.DataAwsccCodestarconnectionsSyncConfiguration.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodestarconnectionsSyncConfiguration.DataAwsccCodestarconnectionsSyncConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCodestarconnectionsSyncConfiguration.DataAwsccCodestarconnectionsSyncConfiguration.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodestarconnectionsSyncConfiguration.DataAwsccCodestarconnectionsSyncConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCodestarconnectionsSyncConfiguration.DataAwsccCodestarconnectionsSyncConfiguration.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodestarconnectionsSyncConfiguration.DataAwsccCodestarconnectionsSyncConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodestarconnectionsSyncConfiguration.DataAwsccCodestarconnectionsSyncConfiguration.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodestarconnectionsSyncConfiguration.DataAwsccCodestarconnectionsSyncConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccCodestarconnectionsSyncConfiguration.DataAwsccCodestarconnectionsSyncConfiguration.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodestarconnectionsSyncConfiguration.DataAwsccCodestarconnectionsSyncConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodestarconnectionsSyncConfiguration.DataAwsccCodestarconnectionsSyncConfiguration.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodestarconnectionsSyncConfiguration.DataAwsccCodestarconnectionsSyncConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCodestarconnectionsSyncConfiguration.DataAwsccCodestarconnectionsSyncConfiguration.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodestarconnectionsSyncConfiguration.DataAwsccCodestarconnectionsSyncConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarconnectionsSyncConfiguration.DataAwsccCodestarconnectionsSyncConfiguration.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarconnectionsSyncConfiguration.DataAwsccCodestarconnectionsSyncConfiguration.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarconnectionsSyncConfiguration.DataAwsccCodestarconnectionsSyncConfiguration.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarconnectionsSyncConfiguration.DataAwsccCodestarconnectionsSyncConfiguration.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccCodestarconnectionsSyncConfiguration resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccCodestarconnectionsSyncConfiguration.DataAwsccCodestarconnectionsSyncConfiguration.isConstruct"></a>

```typescript
import { dataAwsccCodestarconnectionsSyncConfiguration } from '@cdktn/provider-awscc'

dataAwsccCodestarconnectionsSyncConfiguration.DataAwsccCodestarconnectionsSyncConfiguration.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccCodestarconnectionsSyncConfiguration.DataAwsccCodestarconnectionsSyncConfiguration.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccCodestarconnectionsSyncConfiguration.DataAwsccCodestarconnectionsSyncConfiguration.isTerraformElement"></a>

```typescript
import { dataAwsccCodestarconnectionsSyncConfiguration } from '@cdktn/provider-awscc'

dataAwsccCodestarconnectionsSyncConfiguration.DataAwsccCodestarconnectionsSyncConfiguration.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccCodestarconnectionsSyncConfiguration.DataAwsccCodestarconnectionsSyncConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccCodestarconnectionsSyncConfiguration.DataAwsccCodestarconnectionsSyncConfiguration.isTerraformDataSource"></a>

```typescript
import { dataAwsccCodestarconnectionsSyncConfiguration } from '@cdktn/provider-awscc'

dataAwsccCodestarconnectionsSyncConfiguration.DataAwsccCodestarconnectionsSyncConfiguration.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccCodestarconnectionsSyncConfiguration.DataAwsccCodestarconnectionsSyncConfiguration.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccCodestarconnectionsSyncConfiguration.DataAwsccCodestarconnectionsSyncConfiguration.generateConfigForImport"></a>

```typescript
import { dataAwsccCodestarconnectionsSyncConfiguration } from '@cdktn/provider-awscc'

dataAwsccCodestarconnectionsSyncConfiguration.DataAwsccCodestarconnectionsSyncConfiguration.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccCodestarconnectionsSyncConfiguration resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccCodestarconnectionsSyncConfiguration.DataAwsccCodestarconnectionsSyncConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccCodestarconnectionsSyncConfiguration.DataAwsccCodestarconnectionsSyncConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccCodestarconnectionsSyncConfiguration to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccCodestarconnectionsSyncConfiguration.DataAwsccCodestarconnectionsSyncConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccCodestarconnectionsSyncConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/codestarconnections_sync_configuration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccCodestarconnectionsSyncConfiguration.DataAwsccCodestarconnectionsSyncConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccCodestarconnectionsSyncConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarconnectionsSyncConfiguration.DataAwsccCodestarconnectionsSyncConfiguration.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarconnectionsSyncConfiguration.DataAwsccCodestarconnectionsSyncConfiguration.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarconnectionsSyncConfiguration.DataAwsccCodestarconnectionsSyncConfiguration.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarconnectionsSyncConfiguration.DataAwsccCodestarconnectionsSyncConfiguration.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarconnectionsSyncConfiguration.DataAwsccCodestarconnectionsSyncConfiguration.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarconnectionsSyncConfiguration.DataAwsccCodestarconnectionsSyncConfiguration.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarconnectionsSyncConfiguration.DataAwsccCodestarconnectionsSyncConfiguration.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarconnectionsSyncConfiguration.DataAwsccCodestarconnectionsSyncConfiguration.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarconnectionsSyncConfiguration.DataAwsccCodestarconnectionsSyncConfiguration.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarconnectionsSyncConfiguration.DataAwsccCodestarconnectionsSyncConfiguration.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarconnectionsSyncConfiguration.DataAwsccCodestarconnectionsSyncConfiguration.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarconnectionsSyncConfiguration.DataAwsccCodestarconnectionsSyncConfiguration.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarconnectionsSyncConfiguration.DataAwsccCodestarconnectionsSyncConfiguration.property.branch">branch</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarconnectionsSyncConfiguration.DataAwsccCodestarconnectionsSyncConfiguration.property.configFile">configFile</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarconnectionsSyncConfiguration.DataAwsccCodestarconnectionsSyncConfiguration.property.ownerId">ownerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarconnectionsSyncConfiguration.DataAwsccCodestarconnectionsSyncConfiguration.property.providerType">providerType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarconnectionsSyncConfiguration.DataAwsccCodestarconnectionsSyncConfiguration.property.publishDeploymentStatus">publishDeploymentStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarconnectionsSyncConfiguration.DataAwsccCodestarconnectionsSyncConfiguration.property.repositoryLinkId">repositoryLinkId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarconnectionsSyncConfiguration.DataAwsccCodestarconnectionsSyncConfiguration.property.repositoryName">repositoryName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarconnectionsSyncConfiguration.DataAwsccCodestarconnectionsSyncConfiguration.property.resourceName">resourceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarconnectionsSyncConfiguration.DataAwsccCodestarconnectionsSyncConfiguration.property.roleArn">roleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarconnectionsSyncConfiguration.DataAwsccCodestarconnectionsSyncConfiguration.property.syncType">syncType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarconnectionsSyncConfiguration.DataAwsccCodestarconnectionsSyncConfiguration.property.triggerResourceUpdateOn">triggerResourceUpdateOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarconnectionsSyncConfiguration.DataAwsccCodestarconnectionsSyncConfiguration.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarconnectionsSyncConfiguration.DataAwsccCodestarconnectionsSyncConfiguration.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccCodestarconnectionsSyncConfiguration.DataAwsccCodestarconnectionsSyncConfiguration.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccCodestarconnectionsSyncConfiguration.DataAwsccCodestarconnectionsSyncConfiguration.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCodestarconnectionsSyncConfiguration.DataAwsccCodestarconnectionsSyncConfiguration.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccCodestarconnectionsSyncConfiguration.DataAwsccCodestarconnectionsSyncConfiguration.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccCodestarconnectionsSyncConfiguration.DataAwsccCodestarconnectionsSyncConfiguration.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccCodestarconnectionsSyncConfiguration.DataAwsccCodestarconnectionsSyncConfiguration.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccCodestarconnectionsSyncConfiguration.DataAwsccCodestarconnectionsSyncConfiguration.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccCodestarconnectionsSyncConfiguration.DataAwsccCodestarconnectionsSyncConfiguration.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccCodestarconnectionsSyncConfiguration.DataAwsccCodestarconnectionsSyncConfiguration.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccCodestarconnectionsSyncConfiguration.DataAwsccCodestarconnectionsSyncConfiguration.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccCodestarconnectionsSyncConfiguration.DataAwsccCodestarconnectionsSyncConfiguration.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccCodestarconnectionsSyncConfiguration.DataAwsccCodestarconnectionsSyncConfiguration.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `branch`<sup>Required</sup> <a name="branch" id="@cdktn/provider-awscc.dataAwsccCodestarconnectionsSyncConfiguration.DataAwsccCodestarconnectionsSyncConfiguration.property.branch"></a>

```typescript
public readonly branch: string;
```

- *Type:* string

---

##### `configFile`<sup>Required</sup> <a name="configFile" id="@cdktn/provider-awscc.dataAwsccCodestarconnectionsSyncConfiguration.DataAwsccCodestarconnectionsSyncConfiguration.property.configFile"></a>

```typescript
public readonly configFile: string;
```

- *Type:* string

---

##### `ownerId`<sup>Required</sup> <a name="ownerId" id="@cdktn/provider-awscc.dataAwsccCodestarconnectionsSyncConfiguration.DataAwsccCodestarconnectionsSyncConfiguration.property.ownerId"></a>

```typescript
public readonly ownerId: string;
```

- *Type:* string

---

##### `providerType`<sup>Required</sup> <a name="providerType" id="@cdktn/provider-awscc.dataAwsccCodestarconnectionsSyncConfiguration.DataAwsccCodestarconnectionsSyncConfiguration.property.providerType"></a>

```typescript
public readonly providerType: string;
```

- *Type:* string

---

##### `publishDeploymentStatus`<sup>Required</sup> <a name="publishDeploymentStatus" id="@cdktn/provider-awscc.dataAwsccCodestarconnectionsSyncConfiguration.DataAwsccCodestarconnectionsSyncConfiguration.property.publishDeploymentStatus"></a>

```typescript
public readonly publishDeploymentStatus: string;
```

- *Type:* string

---

##### `repositoryLinkId`<sup>Required</sup> <a name="repositoryLinkId" id="@cdktn/provider-awscc.dataAwsccCodestarconnectionsSyncConfiguration.DataAwsccCodestarconnectionsSyncConfiguration.property.repositoryLinkId"></a>

```typescript
public readonly repositoryLinkId: string;
```

- *Type:* string

---

##### `repositoryName`<sup>Required</sup> <a name="repositoryName" id="@cdktn/provider-awscc.dataAwsccCodestarconnectionsSyncConfiguration.DataAwsccCodestarconnectionsSyncConfiguration.property.repositoryName"></a>

```typescript
public readonly repositoryName: string;
```

- *Type:* string

---

##### `resourceName`<sup>Required</sup> <a name="resourceName" id="@cdktn/provider-awscc.dataAwsccCodestarconnectionsSyncConfiguration.DataAwsccCodestarconnectionsSyncConfiguration.property.resourceName"></a>

```typescript
public readonly resourceName: string;
```

- *Type:* string

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktn/provider-awscc.dataAwsccCodestarconnectionsSyncConfiguration.DataAwsccCodestarconnectionsSyncConfiguration.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

---

##### `syncType`<sup>Required</sup> <a name="syncType" id="@cdktn/provider-awscc.dataAwsccCodestarconnectionsSyncConfiguration.DataAwsccCodestarconnectionsSyncConfiguration.property.syncType"></a>

```typescript
public readonly syncType: string;
```

- *Type:* string

---

##### `triggerResourceUpdateOn`<sup>Required</sup> <a name="triggerResourceUpdateOn" id="@cdktn/provider-awscc.dataAwsccCodestarconnectionsSyncConfiguration.DataAwsccCodestarconnectionsSyncConfiguration.property.triggerResourceUpdateOn"></a>

```typescript
public readonly triggerResourceUpdateOn: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccCodestarconnectionsSyncConfiguration.DataAwsccCodestarconnectionsSyncConfiguration.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccCodestarconnectionsSyncConfiguration.DataAwsccCodestarconnectionsSyncConfiguration.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarconnectionsSyncConfiguration.DataAwsccCodestarconnectionsSyncConfiguration.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccCodestarconnectionsSyncConfiguration.DataAwsccCodestarconnectionsSyncConfiguration.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccCodestarconnectionsSyncConfigurationConfig <a name="DataAwsccCodestarconnectionsSyncConfigurationConfig" id="@cdktn/provider-awscc.dataAwsccCodestarconnectionsSyncConfiguration.DataAwsccCodestarconnectionsSyncConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCodestarconnectionsSyncConfiguration.DataAwsccCodestarconnectionsSyncConfigurationConfig.Initializer"></a>

```typescript
import { dataAwsccCodestarconnectionsSyncConfiguration } from '@cdktn/provider-awscc'

const dataAwsccCodestarconnectionsSyncConfigurationConfig: dataAwsccCodestarconnectionsSyncConfiguration.DataAwsccCodestarconnectionsSyncConfigurationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarconnectionsSyncConfiguration.DataAwsccCodestarconnectionsSyncConfigurationConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarconnectionsSyncConfiguration.DataAwsccCodestarconnectionsSyncConfigurationConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarconnectionsSyncConfiguration.DataAwsccCodestarconnectionsSyncConfigurationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarconnectionsSyncConfiguration.DataAwsccCodestarconnectionsSyncConfigurationConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarconnectionsSyncConfiguration.DataAwsccCodestarconnectionsSyncConfigurationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarconnectionsSyncConfiguration.DataAwsccCodestarconnectionsSyncConfigurationConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarconnectionsSyncConfiguration.DataAwsccCodestarconnectionsSyncConfigurationConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarconnectionsSyncConfiguration.DataAwsccCodestarconnectionsSyncConfigurationConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccCodestarconnectionsSyncConfiguration.DataAwsccCodestarconnectionsSyncConfigurationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccCodestarconnectionsSyncConfiguration.DataAwsccCodestarconnectionsSyncConfigurationConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccCodestarconnectionsSyncConfiguration.DataAwsccCodestarconnectionsSyncConfigurationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccCodestarconnectionsSyncConfiguration.DataAwsccCodestarconnectionsSyncConfigurationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccCodestarconnectionsSyncConfiguration.DataAwsccCodestarconnectionsSyncConfigurationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccCodestarconnectionsSyncConfiguration.DataAwsccCodestarconnectionsSyncConfigurationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccCodestarconnectionsSyncConfiguration.DataAwsccCodestarconnectionsSyncConfigurationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccCodestarconnectionsSyncConfiguration.DataAwsccCodestarconnectionsSyncConfigurationConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/codestarconnections_sync_configuration#id DataAwsccCodestarconnectionsSyncConfiguration#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



