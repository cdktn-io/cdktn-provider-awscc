# `dataAwsccDatasyncStorageSystem` Submodule <a name="`dataAwsccDatasyncStorageSystem` Submodule" id="@cdktn/provider-awscc.dataAwsccDatasyncStorageSystem"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccDatasyncStorageSystem <a name="DataAwsccDatasyncStorageSystem" id="@cdktn/provider-awscc.dataAwsccDatasyncStorageSystem.DataAwsccDatasyncStorageSystem"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/datasync_storage_system awscc_datasync_storage_system}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatasyncStorageSystem.DataAwsccDatasyncStorageSystem.Initializer"></a>

```typescript
import { dataAwsccDatasyncStorageSystem } from '@cdktn/provider-awscc'

new dataAwsccDatasyncStorageSystem.DataAwsccDatasyncStorageSystem(scope: Construct, id: string, config: DataAwsccDatasyncStorageSystemConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncStorageSystem.DataAwsccDatasyncStorageSystem.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncStorageSystem.DataAwsccDatasyncStorageSystem.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncStorageSystem.DataAwsccDatasyncStorageSystem.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncStorageSystem.DataAwsccDatasyncStorageSystemConfig">DataAwsccDatasyncStorageSystemConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccDatasyncStorageSystem.DataAwsccDatasyncStorageSystem.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccDatasyncStorageSystem.DataAwsccDatasyncStorageSystem.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccDatasyncStorageSystem.DataAwsccDatasyncStorageSystem.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatasyncStorageSystem.DataAwsccDatasyncStorageSystemConfig">DataAwsccDatasyncStorageSystemConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncStorageSystem.DataAwsccDatasyncStorageSystem.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncStorageSystem.DataAwsccDatasyncStorageSystem.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncStorageSystem.DataAwsccDatasyncStorageSystem.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncStorageSystem.DataAwsccDatasyncStorageSystem.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncStorageSystem.DataAwsccDatasyncStorageSystem.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncStorageSystem.DataAwsccDatasyncStorageSystem.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncStorageSystem.DataAwsccDatasyncStorageSystem.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncStorageSystem.DataAwsccDatasyncStorageSystem.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncStorageSystem.DataAwsccDatasyncStorageSystem.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncStorageSystem.DataAwsccDatasyncStorageSystem.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncStorageSystem.DataAwsccDatasyncStorageSystem.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncStorageSystem.DataAwsccDatasyncStorageSystem.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncStorageSystem.DataAwsccDatasyncStorageSystem.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncStorageSystem.DataAwsccDatasyncStorageSystem.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncStorageSystem.DataAwsccDatasyncStorageSystem.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncStorageSystem.DataAwsccDatasyncStorageSystem.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncStorageSystem.DataAwsccDatasyncStorageSystem.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncStorageSystem.DataAwsccDatasyncStorageSystem.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccDatasyncStorageSystem.DataAwsccDatasyncStorageSystem.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccDatasyncStorageSystem.DataAwsccDatasyncStorageSystem.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccDatasyncStorageSystem.DataAwsccDatasyncStorageSystem.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccDatasyncStorageSystem.DataAwsccDatasyncStorageSystem.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccDatasyncStorageSystem.DataAwsccDatasyncStorageSystem.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccDatasyncStorageSystem.DataAwsccDatasyncStorageSystem.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccDatasyncStorageSystem.DataAwsccDatasyncStorageSystem.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccDatasyncStorageSystem.DataAwsccDatasyncStorageSystem.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccDatasyncStorageSystem.DataAwsccDatasyncStorageSystem.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccDatasyncStorageSystem.DataAwsccDatasyncStorageSystem.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccDatasyncStorageSystem.DataAwsccDatasyncStorageSystem.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccDatasyncStorageSystem.DataAwsccDatasyncStorageSystem.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncStorageSystem.DataAwsccDatasyncStorageSystem.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncStorageSystem.DataAwsccDatasyncStorageSystem.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncStorageSystem.DataAwsccDatasyncStorageSystem.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncStorageSystem.DataAwsccDatasyncStorageSystem.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncStorageSystem.DataAwsccDatasyncStorageSystem.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncStorageSystem.DataAwsccDatasyncStorageSystem.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncStorageSystem.DataAwsccDatasyncStorageSystem.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncStorageSystem.DataAwsccDatasyncStorageSystem.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncStorageSystem.DataAwsccDatasyncStorageSystem.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncStorageSystem.DataAwsccDatasyncStorageSystem.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncStorageSystem.DataAwsccDatasyncStorageSystem.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncStorageSystem.DataAwsccDatasyncStorageSystem.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncStorageSystem.DataAwsccDatasyncStorageSystem.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncStorageSystem.DataAwsccDatasyncStorageSystem.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncStorageSystem.DataAwsccDatasyncStorageSystem.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncStorageSystem.DataAwsccDatasyncStorageSystem.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncStorageSystem.DataAwsccDatasyncStorageSystem.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncStorageSystem.DataAwsccDatasyncStorageSystem.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncStorageSystem.DataAwsccDatasyncStorageSystem.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncStorageSystem.DataAwsccDatasyncStorageSystem.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncStorageSystem.DataAwsccDatasyncStorageSystem.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncStorageSystem.DataAwsccDatasyncStorageSystem.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncStorageSystem.DataAwsccDatasyncStorageSystem.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncStorageSystem.DataAwsccDatasyncStorageSystem.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccDatasyncStorageSystem resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccDatasyncStorageSystem.DataAwsccDatasyncStorageSystem.isConstruct"></a>

```typescript
import { dataAwsccDatasyncStorageSystem } from '@cdktn/provider-awscc'

dataAwsccDatasyncStorageSystem.DataAwsccDatasyncStorageSystem.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccDatasyncStorageSystem.DataAwsccDatasyncStorageSystem.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccDatasyncStorageSystem.DataAwsccDatasyncStorageSystem.isTerraformElement"></a>

```typescript
import { dataAwsccDatasyncStorageSystem } from '@cdktn/provider-awscc'

dataAwsccDatasyncStorageSystem.DataAwsccDatasyncStorageSystem.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccDatasyncStorageSystem.DataAwsccDatasyncStorageSystem.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccDatasyncStorageSystem.DataAwsccDatasyncStorageSystem.isTerraformDataSource"></a>

```typescript
import { dataAwsccDatasyncStorageSystem } from '@cdktn/provider-awscc'

dataAwsccDatasyncStorageSystem.DataAwsccDatasyncStorageSystem.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccDatasyncStorageSystem.DataAwsccDatasyncStorageSystem.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccDatasyncStorageSystem.DataAwsccDatasyncStorageSystem.generateConfigForImport"></a>

```typescript
import { dataAwsccDatasyncStorageSystem } from '@cdktn/provider-awscc'

dataAwsccDatasyncStorageSystem.DataAwsccDatasyncStorageSystem.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccDatasyncStorageSystem resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccDatasyncStorageSystem.DataAwsccDatasyncStorageSystem.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccDatasyncStorageSystem.DataAwsccDatasyncStorageSystem.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccDatasyncStorageSystem to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccDatasyncStorageSystem.DataAwsccDatasyncStorageSystem.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccDatasyncStorageSystem that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/datasync_storage_system#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccDatasyncStorageSystem.DataAwsccDatasyncStorageSystem.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccDatasyncStorageSystem to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncStorageSystem.DataAwsccDatasyncStorageSystem.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncStorageSystem.DataAwsccDatasyncStorageSystem.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncStorageSystem.DataAwsccDatasyncStorageSystem.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncStorageSystem.DataAwsccDatasyncStorageSystem.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncStorageSystem.DataAwsccDatasyncStorageSystem.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncStorageSystem.DataAwsccDatasyncStorageSystem.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncStorageSystem.DataAwsccDatasyncStorageSystem.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncStorageSystem.DataAwsccDatasyncStorageSystem.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncStorageSystem.DataAwsccDatasyncStorageSystem.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncStorageSystem.DataAwsccDatasyncStorageSystem.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncStorageSystem.DataAwsccDatasyncStorageSystem.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncStorageSystem.DataAwsccDatasyncStorageSystem.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncStorageSystem.DataAwsccDatasyncStorageSystem.property.agentArns">agentArns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncStorageSystem.DataAwsccDatasyncStorageSystem.property.cloudwatchLogGroupArn">cloudwatchLogGroupArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncStorageSystem.DataAwsccDatasyncStorageSystem.property.connectivityStatus">connectivityStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncStorageSystem.DataAwsccDatasyncStorageSystem.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncStorageSystem.DataAwsccDatasyncStorageSystem.property.secretsManagerArn">secretsManagerArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncStorageSystem.DataAwsccDatasyncStorageSystem.property.serverConfiguration">serverConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncStorageSystem.DataAwsccDatasyncStorageSystemServerConfigurationOutputReference">DataAwsccDatasyncStorageSystemServerConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncStorageSystem.DataAwsccDatasyncStorageSystem.property.serverCredentials">serverCredentials</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncStorageSystem.DataAwsccDatasyncStorageSystemServerCredentialsOutputReference">DataAwsccDatasyncStorageSystemServerCredentialsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncStorageSystem.DataAwsccDatasyncStorageSystem.property.storageSystemArn">storageSystemArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncStorageSystem.DataAwsccDatasyncStorageSystem.property.storageSystemId">storageSystemId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncStorageSystem.DataAwsccDatasyncStorageSystem.property.systemType">systemType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncStorageSystem.DataAwsccDatasyncStorageSystem.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncStorageSystem.DataAwsccDatasyncStorageSystemTagsList">DataAwsccDatasyncStorageSystemTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncStorageSystem.DataAwsccDatasyncStorageSystem.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncStorageSystem.DataAwsccDatasyncStorageSystem.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccDatasyncStorageSystem.DataAwsccDatasyncStorageSystem.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccDatasyncStorageSystem.DataAwsccDatasyncStorageSystem.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDatasyncStorageSystem.DataAwsccDatasyncStorageSystem.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccDatasyncStorageSystem.DataAwsccDatasyncStorageSystem.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccDatasyncStorageSystem.DataAwsccDatasyncStorageSystem.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccDatasyncStorageSystem.DataAwsccDatasyncStorageSystem.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccDatasyncStorageSystem.DataAwsccDatasyncStorageSystem.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccDatasyncStorageSystem.DataAwsccDatasyncStorageSystem.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccDatasyncStorageSystem.DataAwsccDatasyncStorageSystem.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccDatasyncStorageSystem.DataAwsccDatasyncStorageSystem.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccDatasyncStorageSystem.DataAwsccDatasyncStorageSystem.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccDatasyncStorageSystem.DataAwsccDatasyncStorageSystem.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `agentArns`<sup>Required</sup> <a name="agentArns" id="@cdktn/provider-awscc.dataAwsccDatasyncStorageSystem.DataAwsccDatasyncStorageSystem.property.agentArns"></a>

```typescript
public readonly agentArns: string[];
```

- *Type:* string[]

---

##### `cloudwatchLogGroupArn`<sup>Required</sup> <a name="cloudwatchLogGroupArn" id="@cdktn/provider-awscc.dataAwsccDatasyncStorageSystem.DataAwsccDatasyncStorageSystem.property.cloudwatchLogGroupArn"></a>

```typescript
public readonly cloudwatchLogGroupArn: string;
```

- *Type:* string

---

##### `connectivityStatus`<sup>Required</sup> <a name="connectivityStatus" id="@cdktn/provider-awscc.dataAwsccDatasyncStorageSystem.DataAwsccDatasyncStorageSystem.property.connectivityStatus"></a>

```typescript
public readonly connectivityStatus: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccDatasyncStorageSystem.DataAwsccDatasyncStorageSystem.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `secretsManagerArn`<sup>Required</sup> <a name="secretsManagerArn" id="@cdktn/provider-awscc.dataAwsccDatasyncStorageSystem.DataAwsccDatasyncStorageSystem.property.secretsManagerArn"></a>

```typescript
public readonly secretsManagerArn: string;
```

- *Type:* string

---

##### `serverConfiguration`<sup>Required</sup> <a name="serverConfiguration" id="@cdktn/provider-awscc.dataAwsccDatasyncStorageSystem.DataAwsccDatasyncStorageSystem.property.serverConfiguration"></a>

```typescript
public readonly serverConfiguration: DataAwsccDatasyncStorageSystemServerConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatasyncStorageSystem.DataAwsccDatasyncStorageSystemServerConfigurationOutputReference">DataAwsccDatasyncStorageSystemServerConfigurationOutputReference</a>

---

##### `serverCredentials`<sup>Required</sup> <a name="serverCredentials" id="@cdktn/provider-awscc.dataAwsccDatasyncStorageSystem.DataAwsccDatasyncStorageSystem.property.serverCredentials"></a>

```typescript
public readonly serverCredentials: DataAwsccDatasyncStorageSystemServerCredentialsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatasyncStorageSystem.DataAwsccDatasyncStorageSystemServerCredentialsOutputReference">DataAwsccDatasyncStorageSystemServerCredentialsOutputReference</a>

---

##### `storageSystemArn`<sup>Required</sup> <a name="storageSystemArn" id="@cdktn/provider-awscc.dataAwsccDatasyncStorageSystem.DataAwsccDatasyncStorageSystem.property.storageSystemArn"></a>

```typescript
public readonly storageSystemArn: string;
```

- *Type:* string

---

##### `storageSystemId`<sup>Required</sup> <a name="storageSystemId" id="@cdktn/provider-awscc.dataAwsccDatasyncStorageSystem.DataAwsccDatasyncStorageSystem.property.storageSystemId"></a>

```typescript
public readonly storageSystemId: string;
```

- *Type:* string

---

##### `systemType`<sup>Required</sup> <a name="systemType" id="@cdktn/provider-awscc.dataAwsccDatasyncStorageSystem.DataAwsccDatasyncStorageSystem.property.systemType"></a>

```typescript
public readonly systemType: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccDatasyncStorageSystem.DataAwsccDatasyncStorageSystem.property.tags"></a>

```typescript
public readonly tags: DataAwsccDatasyncStorageSystemTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatasyncStorageSystem.DataAwsccDatasyncStorageSystemTagsList">DataAwsccDatasyncStorageSystemTagsList</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccDatasyncStorageSystem.DataAwsccDatasyncStorageSystem.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccDatasyncStorageSystem.DataAwsccDatasyncStorageSystem.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncStorageSystem.DataAwsccDatasyncStorageSystem.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccDatasyncStorageSystem.DataAwsccDatasyncStorageSystem.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccDatasyncStorageSystemConfig <a name="DataAwsccDatasyncStorageSystemConfig" id="@cdktn/provider-awscc.dataAwsccDatasyncStorageSystem.DataAwsccDatasyncStorageSystemConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDatasyncStorageSystem.DataAwsccDatasyncStorageSystemConfig.Initializer"></a>

```typescript
import { dataAwsccDatasyncStorageSystem } from '@cdktn/provider-awscc'

const dataAwsccDatasyncStorageSystemConfig: dataAwsccDatasyncStorageSystem.DataAwsccDatasyncStorageSystemConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncStorageSystem.DataAwsccDatasyncStorageSystemConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncStorageSystem.DataAwsccDatasyncStorageSystemConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncStorageSystem.DataAwsccDatasyncStorageSystemConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncStorageSystem.DataAwsccDatasyncStorageSystemConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncStorageSystem.DataAwsccDatasyncStorageSystemConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncStorageSystem.DataAwsccDatasyncStorageSystemConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncStorageSystem.DataAwsccDatasyncStorageSystemConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncStorageSystem.DataAwsccDatasyncStorageSystemConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccDatasyncStorageSystem.DataAwsccDatasyncStorageSystemConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccDatasyncStorageSystem.DataAwsccDatasyncStorageSystemConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccDatasyncStorageSystem.DataAwsccDatasyncStorageSystemConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccDatasyncStorageSystem.DataAwsccDatasyncStorageSystemConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccDatasyncStorageSystem.DataAwsccDatasyncStorageSystemConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccDatasyncStorageSystem.DataAwsccDatasyncStorageSystemConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccDatasyncStorageSystem.DataAwsccDatasyncStorageSystemConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccDatasyncStorageSystem.DataAwsccDatasyncStorageSystemConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/datasync_storage_system#id DataAwsccDatasyncStorageSystem#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccDatasyncStorageSystemServerConfiguration <a name="DataAwsccDatasyncStorageSystemServerConfiguration" id="@cdktn/provider-awscc.dataAwsccDatasyncStorageSystem.DataAwsccDatasyncStorageSystemServerConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDatasyncStorageSystem.DataAwsccDatasyncStorageSystemServerConfiguration.Initializer"></a>

```typescript
import { dataAwsccDatasyncStorageSystem } from '@cdktn/provider-awscc'

const dataAwsccDatasyncStorageSystemServerConfiguration: dataAwsccDatasyncStorageSystem.DataAwsccDatasyncStorageSystemServerConfiguration = { ... }
```


### DataAwsccDatasyncStorageSystemServerCredentials <a name="DataAwsccDatasyncStorageSystemServerCredentials" id="@cdktn/provider-awscc.dataAwsccDatasyncStorageSystem.DataAwsccDatasyncStorageSystemServerCredentials"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDatasyncStorageSystem.DataAwsccDatasyncStorageSystemServerCredentials.Initializer"></a>

```typescript
import { dataAwsccDatasyncStorageSystem } from '@cdktn/provider-awscc'

const dataAwsccDatasyncStorageSystemServerCredentials: dataAwsccDatasyncStorageSystem.DataAwsccDatasyncStorageSystemServerCredentials = { ... }
```


### DataAwsccDatasyncStorageSystemTags <a name="DataAwsccDatasyncStorageSystemTags" id="@cdktn/provider-awscc.dataAwsccDatasyncStorageSystem.DataAwsccDatasyncStorageSystemTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDatasyncStorageSystem.DataAwsccDatasyncStorageSystemTags.Initializer"></a>

```typescript
import { dataAwsccDatasyncStorageSystem } from '@cdktn/provider-awscc'

const dataAwsccDatasyncStorageSystemTags: dataAwsccDatasyncStorageSystem.DataAwsccDatasyncStorageSystemTags = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccDatasyncStorageSystemServerConfigurationOutputReference <a name="DataAwsccDatasyncStorageSystemServerConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccDatasyncStorageSystem.DataAwsccDatasyncStorageSystemServerConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatasyncStorageSystem.DataAwsccDatasyncStorageSystemServerConfigurationOutputReference.Initializer"></a>

```typescript
import { dataAwsccDatasyncStorageSystem } from '@cdktn/provider-awscc'

new dataAwsccDatasyncStorageSystem.DataAwsccDatasyncStorageSystemServerConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncStorageSystem.DataAwsccDatasyncStorageSystemServerConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncStorageSystem.DataAwsccDatasyncStorageSystemServerConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDatasyncStorageSystem.DataAwsccDatasyncStorageSystemServerConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncStorageSystem.DataAwsccDatasyncStorageSystemServerConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncStorageSystem.DataAwsccDatasyncStorageSystemServerConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncStorageSystem.DataAwsccDatasyncStorageSystemServerConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncStorageSystem.DataAwsccDatasyncStorageSystemServerConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncStorageSystem.DataAwsccDatasyncStorageSystemServerConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncStorageSystem.DataAwsccDatasyncStorageSystemServerConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncStorageSystem.DataAwsccDatasyncStorageSystemServerConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncStorageSystem.DataAwsccDatasyncStorageSystemServerConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncStorageSystem.DataAwsccDatasyncStorageSystemServerConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncStorageSystem.DataAwsccDatasyncStorageSystemServerConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncStorageSystem.DataAwsccDatasyncStorageSystemServerConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncStorageSystem.DataAwsccDatasyncStorageSystemServerConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncStorageSystem.DataAwsccDatasyncStorageSystemServerConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncStorageSystem.DataAwsccDatasyncStorageSystemServerConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccDatasyncStorageSystem.DataAwsccDatasyncStorageSystemServerConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncStorageSystem.DataAwsccDatasyncStorageSystemServerConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncStorageSystem.DataAwsccDatasyncStorageSystemServerConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncStorageSystem.DataAwsccDatasyncStorageSystemServerConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncStorageSystem.DataAwsccDatasyncStorageSystemServerConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncStorageSystem.DataAwsccDatasyncStorageSystemServerConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncStorageSystem.DataAwsccDatasyncStorageSystemServerConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncStorageSystem.DataAwsccDatasyncStorageSystemServerConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncStorageSystem.DataAwsccDatasyncStorageSystemServerConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncStorageSystem.DataAwsccDatasyncStorageSystemServerConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncStorageSystem.DataAwsccDatasyncStorageSystemServerConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncStorageSystem.DataAwsccDatasyncStorageSystemServerConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncStorageSystem.DataAwsccDatasyncStorageSystemServerConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncStorageSystem.DataAwsccDatasyncStorageSystemServerConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncStorageSystem.DataAwsccDatasyncStorageSystemServerConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncStorageSystem.DataAwsccDatasyncStorageSystemServerConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncStorageSystem.DataAwsccDatasyncStorageSystemServerConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncStorageSystem.DataAwsccDatasyncStorageSystemServerConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncStorageSystem.DataAwsccDatasyncStorageSystemServerConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncStorageSystem.DataAwsccDatasyncStorageSystemServerConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDatasyncStorageSystem.DataAwsccDatasyncStorageSystemServerConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDatasyncStorageSystem.DataAwsccDatasyncStorageSystemServerConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDatasyncStorageSystem.DataAwsccDatasyncStorageSystemServerConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccDatasyncStorageSystem.DataAwsccDatasyncStorageSystemServerConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncStorageSystem.DataAwsccDatasyncStorageSystemServerConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncStorageSystem.DataAwsccDatasyncStorageSystemServerConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncStorageSystem.DataAwsccDatasyncStorageSystemServerConfigurationOutputReference.property.serverHostname">serverHostname</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncStorageSystem.DataAwsccDatasyncStorageSystemServerConfigurationOutputReference.property.serverPort">serverPort</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncStorageSystem.DataAwsccDatasyncStorageSystemServerConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncStorageSystem.DataAwsccDatasyncStorageSystemServerConfiguration">DataAwsccDatasyncStorageSystemServerConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccDatasyncStorageSystem.DataAwsccDatasyncStorageSystemServerConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDatasyncStorageSystem.DataAwsccDatasyncStorageSystemServerConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `serverHostname`<sup>Required</sup> <a name="serverHostname" id="@cdktn/provider-awscc.dataAwsccDatasyncStorageSystem.DataAwsccDatasyncStorageSystemServerConfigurationOutputReference.property.serverHostname"></a>

```typescript
public readonly serverHostname: string;
```

- *Type:* string

---

##### `serverPort`<sup>Required</sup> <a name="serverPort" id="@cdktn/provider-awscc.dataAwsccDatasyncStorageSystem.DataAwsccDatasyncStorageSystemServerConfigurationOutputReference.property.serverPort"></a>

```typescript
public readonly serverPort: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccDatasyncStorageSystem.DataAwsccDatasyncStorageSystemServerConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccDatasyncStorageSystemServerConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatasyncStorageSystem.DataAwsccDatasyncStorageSystemServerConfiguration">DataAwsccDatasyncStorageSystemServerConfiguration</a>

---


### DataAwsccDatasyncStorageSystemServerCredentialsOutputReference <a name="DataAwsccDatasyncStorageSystemServerCredentialsOutputReference" id="@cdktn/provider-awscc.dataAwsccDatasyncStorageSystem.DataAwsccDatasyncStorageSystemServerCredentialsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatasyncStorageSystem.DataAwsccDatasyncStorageSystemServerCredentialsOutputReference.Initializer"></a>

```typescript
import { dataAwsccDatasyncStorageSystem } from '@cdktn/provider-awscc'

new dataAwsccDatasyncStorageSystem.DataAwsccDatasyncStorageSystemServerCredentialsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncStorageSystem.DataAwsccDatasyncStorageSystemServerCredentialsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncStorageSystem.DataAwsccDatasyncStorageSystemServerCredentialsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDatasyncStorageSystem.DataAwsccDatasyncStorageSystemServerCredentialsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncStorageSystem.DataAwsccDatasyncStorageSystemServerCredentialsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncStorageSystem.DataAwsccDatasyncStorageSystemServerCredentialsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncStorageSystem.DataAwsccDatasyncStorageSystemServerCredentialsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncStorageSystem.DataAwsccDatasyncStorageSystemServerCredentialsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncStorageSystem.DataAwsccDatasyncStorageSystemServerCredentialsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncStorageSystem.DataAwsccDatasyncStorageSystemServerCredentialsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncStorageSystem.DataAwsccDatasyncStorageSystemServerCredentialsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncStorageSystem.DataAwsccDatasyncStorageSystemServerCredentialsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncStorageSystem.DataAwsccDatasyncStorageSystemServerCredentialsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncStorageSystem.DataAwsccDatasyncStorageSystemServerCredentialsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncStorageSystem.DataAwsccDatasyncStorageSystemServerCredentialsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncStorageSystem.DataAwsccDatasyncStorageSystemServerCredentialsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncStorageSystem.DataAwsccDatasyncStorageSystemServerCredentialsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncStorageSystem.DataAwsccDatasyncStorageSystemServerCredentialsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccDatasyncStorageSystem.DataAwsccDatasyncStorageSystemServerCredentialsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncStorageSystem.DataAwsccDatasyncStorageSystemServerCredentialsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncStorageSystem.DataAwsccDatasyncStorageSystemServerCredentialsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncStorageSystem.DataAwsccDatasyncStorageSystemServerCredentialsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncStorageSystem.DataAwsccDatasyncStorageSystemServerCredentialsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncStorageSystem.DataAwsccDatasyncStorageSystemServerCredentialsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncStorageSystem.DataAwsccDatasyncStorageSystemServerCredentialsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncStorageSystem.DataAwsccDatasyncStorageSystemServerCredentialsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncStorageSystem.DataAwsccDatasyncStorageSystemServerCredentialsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncStorageSystem.DataAwsccDatasyncStorageSystemServerCredentialsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncStorageSystem.DataAwsccDatasyncStorageSystemServerCredentialsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncStorageSystem.DataAwsccDatasyncStorageSystemServerCredentialsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncStorageSystem.DataAwsccDatasyncStorageSystemServerCredentialsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncStorageSystem.DataAwsccDatasyncStorageSystemServerCredentialsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncStorageSystem.DataAwsccDatasyncStorageSystemServerCredentialsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncStorageSystem.DataAwsccDatasyncStorageSystemServerCredentialsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncStorageSystem.DataAwsccDatasyncStorageSystemServerCredentialsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncStorageSystem.DataAwsccDatasyncStorageSystemServerCredentialsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncStorageSystem.DataAwsccDatasyncStorageSystemServerCredentialsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncStorageSystem.DataAwsccDatasyncStorageSystemServerCredentialsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDatasyncStorageSystem.DataAwsccDatasyncStorageSystemServerCredentialsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDatasyncStorageSystem.DataAwsccDatasyncStorageSystemServerCredentialsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDatasyncStorageSystem.DataAwsccDatasyncStorageSystemServerCredentialsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccDatasyncStorageSystem.DataAwsccDatasyncStorageSystemServerCredentialsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncStorageSystem.DataAwsccDatasyncStorageSystemServerCredentialsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncStorageSystem.DataAwsccDatasyncStorageSystemServerCredentialsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncStorageSystem.DataAwsccDatasyncStorageSystemServerCredentialsOutputReference.property.password">password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncStorageSystem.DataAwsccDatasyncStorageSystemServerCredentialsOutputReference.property.username">username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncStorageSystem.DataAwsccDatasyncStorageSystemServerCredentialsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncStorageSystem.DataAwsccDatasyncStorageSystemServerCredentials">DataAwsccDatasyncStorageSystemServerCredentials</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccDatasyncStorageSystem.DataAwsccDatasyncStorageSystemServerCredentialsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDatasyncStorageSystem.DataAwsccDatasyncStorageSystemServerCredentialsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktn/provider-awscc.dataAwsccDatasyncStorageSystem.DataAwsccDatasyncStorageSystemServerCredentialsOutputReference.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktn/provider-awscc.dataAwsccDatasyncStorageSystem.DataAwsccDatasyncStorageSystemServerCredentialsOutputReference.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccDatasyncStorageSystem.DataAwsccDatasyncStorageSystemServerCredentialsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccDatasyncStorageSystemServerCredentials;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatasyncStorageSystem.DataAwsccDatasyncStorageSystemServerCredentials">DataAwsccDatasyncStorageSystemServerCredentials</a>

---


### DataAwsccDatasyncStorageSystemTagsList <a name="DataAwsccDatasyncStorageSystemTagsList" id="@cdktn/provider-awscc.dataAwsccDatasyncStorageSystem.DataAwsccDatasyncStorageSystemTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatasyncStorageSystem.DataAwsccDatasyncStorageSystemTagsList.Initializer"></a>

```typescript
import { dataAwsccDatasyncStorageSystem } from '@cdktn/provider-awscc'

new dataAwsccDatasyncStorageSystem.DataAwsccDatasyncStorageSystemTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncStorageSystem.DataAwsccDatasyncStorageSystemTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncStorageSystem.DataAwsccDatasyncStorageSystemTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncStorageSystem.DataAwsccDatasyncStorageSystemTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDatasyncStorageSystem.DataAwsccDatasyncStorageSystemTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncStorageSystem.DataAwsccDatasyncStorageSystemTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccDatasyncStorageSystem.DataAwsccDatasyncStorageSystemTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncStorageSystem.DataAwsccDatasyncStorageSystemTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncStorageSystem.DataAwsccDatasyncStorageSystemTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncStorageSystem.DataAwsccDatasyncStorageSystemTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncStorageSystem.DataAwsccDatasyncStorageSystemTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncStorageSystem.DataAwsccDatasyncStorageSystemTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccDatasyncStorageSystem.DataAwsccDatasyncStorageSystemTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccDatasyncStorageSystem.DataAwsccDatasyncStorageSystemTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccDatasyncStorageSystem.DataAwsccDatasyncStorageSystemTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDatasyncStorageSystem.DataAwsccDatasyncStorageSystemTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDatasyncStorageSystem.DataAwsccDatasyncStorageSystemTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccDatasyncStorageSystem.DataAwsccDatasyncStorageSystemTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccDatasyncStorageSystem.DataAwsccDatasyncStorageSystemTagsList.get"></a>

```typescript
public get(index: number): DataAwsccDatasyncStorageSystemTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccDatasyncStorageSystem.DataAwsccDatasyncStorageSystemTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncStorageSystem.DataAwsccDatasyncStorageSystemTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncStorageSystem.DataAwsccDatasyncStorageSystemTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccDatasyncStorageSystem.DataAwsccDatasyncStorageSystemTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDatasyncStorageSystem.DataAwsccDatasyncStorageSystemTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccDatasyncStorageSystemTagsOutputReference <a name="DataAwsccDatasyncStorageSystemTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccDatasyncStorageSystem.DataAwsccDatasyncStorageSystemTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatasyncStorageSystem.DataAwsccDatasyncStorageSystemTagsOutputReference.Initializer"></a>

```typescript
import { dataAwsccDatasyncStorageSystem } from '@cdktn/provider-awscc'

new dataAwsccDatasyncStorageSystem.DataAwsccDatasyncStorageSystemTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncStorageSystem.DataAwsccDatasyncStorageSystemTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncStorageSystem.DataAwsccDatasyncStorageSystemTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncStorageSystem.DataAwsccDatasyncStorageSystemTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncStorageSystem.DataAwsccDatasyncStorageSystemTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDatasyncStorageSystem.DataAwsccDatasyncStorageSystemTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncStorageSystem.DataAwsccDatasyncStorageSystemTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccDatasyncStorageSystem.DataAwsccDatasyncStorageSystemTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccDatasyncStorageSystem.DataAwsccDatasyncStorageSystemTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncStorageSystem.DataAwsccDatasyncStorageSystemTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncStorageSystem.DataAwsccDatasyncStorageSystemTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncStorageSystem.DataAwsccDatasyncStorageSystemTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncStorageSystem.DataAwsccDatasyncStorageSystemTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncStorageSystem.DataAwsccDatasyncStorageSystemTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncStorageSystem.DataAwsccDatasyncStorageSystemTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncStorageSystem.DataAwsccDatasyncStorageSystemTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncStorageSystem.DataAwsccDatasyncStorageSystemTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncStorageSystem.DataAwsccDatasyncStorageSystemTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncStorageSystem.DataAwsccDatasyncStorageSystemTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncStorageSystem.DataAwsccDatasyncStorageSystemTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncStorageSystem.DataAwsccDatasyncStorageSystemTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncStorageSystem.DataAwsccDatasyncStorageSystemTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccDatasyncStorageSystem.DataAwsccDatasyncStorageSystemTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncStorageSystem.DataAwsccDatasyncStorageSystemTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncStorageSystem.DataAwsccDatasyncStorageSystemTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncStorageSystem.DataAwsccDatasyncStorageSystemTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncStorageSystem.DataAwsccDatasyncStorageSystemTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncStorageSystem.DataAwsccDatasyncStorageSystemTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncStorageSystem.DataAwsccDatasyncStorageSystemTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncStorageSystem.DataAwsccDatasyncStorageSystemTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncStorageSystem.DataAwsccDatasyncStorageSystemTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncStorageSystem.DataAwsccDatasyncStorageSystemTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncStorageSystem.DataAwsccDatasyncStorageSystemTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncStorageSystem.DataAwsccDatasyncStorageSystemTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncStorageSystem.DataAwsccDatasyncStorageSystemTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncStorageSystem.DataAwsccDatasyncStorageSystemTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncStorageSystem.DataAwsccDatasyncStorageSystemTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncStorageSystem.DataAwsccDatasyncStorageSystemTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncStorageSystem.DataAwsccDatasyncStorageSystemTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncStorageSystem.DataAwsccDatasyncStorageSystemTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncStorageSystem.DataAwsccDatasyncStorageSystemTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncStorageSystem.DataAwsccDatasyncStorageSystemTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDatasyncStorageSystem.DataAwsccDatasyncStorageSystemTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDatasyncStorageSystem.DataAwsccDatasyncStorageSystemTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDatasyncStorageSystem.DataAwsccDatasyncStorageSystemTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccDatasyncStorageSystem.DataAwsccDatasyncStorageSystemTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncStorageSystem.DataAwsccDatasyncStorageSystemTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncStorageSystem.DataAwsccDatasyncStorageSystemTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncStorageSystem.DataAwsccDatasyncStorageSystemTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncStorageSystem.DataAwsccDatasyncStorageSystemTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncStorageSystem.DataAwsccDatasyncStorageSystemTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncStorageSystem.DataAwsccDatasyncStorageSystemTags">DataAwsccDatasyncStorageSystemTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccDatasyncStorageSystem.DataAwsccDatasyncStorageSystemTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDatasyncStorageSystem.DataAwsccDatasyncStorageSystemTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccDatasyncStorageSystem.DataAwsccDatasyncStorageSystemTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccDatasyncStorageSystem.DataAwsccDatasyncStorageSystemTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccDatasyncStorageSystem.DataAwsccDatasyncStorageSystemTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccDatasyncStorageSystemTags;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatasyncStorageSystem.DataAwsccDatasyncStorageSystemTags">DataAwsccDatasyncStorageSystemTags</a>

---



