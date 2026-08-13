# `dataAwsccKendraIndex` Submodule <a name="`dataAwsccKendraIndex` Submodule" id="@cdktn/provider-awscc.dataAwsccKendraIndex"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccKendraIndex <a name="DataAwsccKendraIndex" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndex"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/kendra_index awscc_kendra_index}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndex.Initializer"></a>

```typescript
import { dataAwsccKendraIndex } from '@cdktn/provider-awscc'

new dataAwsccKendraIndex.DataAwsccKendraIndex(scope: Construct, id: string, config: DataAwsccKendraIndexConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndex.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndex.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndex.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexConfig">DataAwsccKendraIndexConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndex.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndex.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndex.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexConfig">DataAwsccKendraIndexConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndex.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndex.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndex.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndex.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndex.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndex.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndex.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndex.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndex.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndex.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndex.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndex.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndex.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndex.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndex.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndex.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndex.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndex.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndex.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndex.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndex.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndex.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndex.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndex.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndex.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndex.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndex.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndex.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndex.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndex.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndex.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndex.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndex.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndex.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndex.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndex.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndex.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndex.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndex.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndex.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndex.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndex.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndex.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndex.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndex.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndex.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndex.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndex.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndex.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndex.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndex.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndex.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndex.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndex.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccKendraIndex resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndex.isConstruct"></a>

```typescript
import { dataAwsccKendraIndex } from '@cdktn/provider-awscc'

dataAwsccKendraIndex.DataAwsccKendraIndex.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndex.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndex.isTerraformElement"></a>

```typescript
import { dataAwsccKendraIndex } from '@cdktn/provider-awscc'

dataAwsccKendraIndex.DataAwsccKendraIndex.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndex.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndex.isTerraformDataSource"></a>

```typescript
import { dataAwsccKendraIndex } from '@cdktn/provider-awscc'

dataAwsccKendraIndex.DataAwsccKendraIndex.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndex.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndex.generateConfigForImport"></a>

```typescript
import { dataAwsccKendraIndex } from '@cdktn/provider-awscc'

dataAwsccKendraIndex.DataAwsccKendraIndex.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccKendraIndex resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndex.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndex.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccKendraIndex to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndex.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccKendraIndex that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/kendra_index#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndex.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccKendraIndex to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndex.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndex.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndex.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndex.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndex.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndex.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndex.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndex.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndex.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndex.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndex.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndex.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndex.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndex.property.capacityUnits">capacityUnits</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexCapacityUnitsOutputReference">DataAwsccKendraIndexCapacityUnitsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndex.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndex.property.documentMetadataConfigurations">documentMetadataConfigurations</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsList">DataAwsccKendraIndexDocumentMetadataConfigurationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndex.property.edition">edition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndex.property.indexId">indexId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndex.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndex.property.roleArn">roleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndex.property.serverSideEncryptionConfiguration">serverSideEncryptionConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexServerSideEncryptionConfigurationOutputReference">DataAwsccKendraIndexServerSideEncryptionConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndex.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexTagsList">DataAwsccKendraIndexTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndex.property.userContextPolicy">userContextPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndex.property.userTokenConfigurations">userTokenConfigurations</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsList">DataAwsccKendraIndexUserTokenConfigurationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndex.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndex.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndex.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndex.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndex.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndex.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndex.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndex.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndex.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndex.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndex.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndex.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndex.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndex.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndex.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `capacityUnits`<sup>Required</sup> <a name="capacityUnits" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndex.property.capacityUnits"></a>

```typescript
public readonly capacityUnits: DataAwsccKendraIndexCapacityUnitsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexCapacityUnitsOutputReference">DataAwsccKendraIndexCapacityUnitsOutputReference</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndex.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `documentMetadataConfigurations`<sup>Required</sup> <a name="documentMetadataConfigurations" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndex.property.documentMetadataConfigurations"></a>

```typescript
public readonly documentMetadataConfigurations: DataAwsccKendraIndexDocumentMetadataConfigurationsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsList">DataAwsccKendraIndexDocumentMetadataConfigurationsList</a>

---

##### `edition`<sup>Required</sup> <a name="edition" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndex.property.edition"></a>

```typescript
public readonly edition: string;
```

- *Type:* string

---

##### `indexId`<sup>Required</sup> <a name="indexId" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndex.property.indexId"></a>

```typescript
public readonly indexId: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndex.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndex.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

---

##### `serverSideEncryptionConfiguration`<sup>Required</sup> <a name="serverSideEncryptionConfiguration" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndex.property.serverSideEncryptionConfiguration"></a>

```typescript
public readonly serverSideEncryptionConfiguration: DataAwsccKendraIndexServerSideEncryptionConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexServerSideEncryptionConfigurationOutputReference">DataAwsccKendraIndexServerSideEncryptionConfigurationOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndex.property.tags"></a>

```typescript
public readonly tags: DataAwsccKendraIndexTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexTagsList">DataAwsccKendraIndexTagsList</a>

---

##### `userContextPolicy`<sup>Required</sup> <a name="userContextPolicy" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndex.property.userContextPolicy"></a>

```typescript
public readonly userContextPolicy: string;
```

- *Type:* string

---

##### `userTokenConfigurations`<sup>Required</sup> <a name="userTokenConfigurations" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndex.property.userTokenConfigurations"></a>

```typescript
public readonly userTokenConfigurations: DataAwsccKendraIndexUserTokenConfigurationsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsList">DataAwsccKendraIndexUserTokenConfigurationsList</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndex.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndex.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndex.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndex.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccKendraIndexCapacityUnits <a name="DataAwsccKendraIndexCapacityUnits" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexCapacityUnits"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexCapacityUnits.Initializer"></a>

```typescript
import { dataAwsccKendraIndex } from '@cdktn/provider-awscc'

const dataAwsccKendraIndexCapacityUnits: dataAwsccKendraIndex.DataAwsccKendraIndexCapacityUnits = { ... }
```


### DataAwsccKendraIndexConfig <a name="DataAwsccKendraIndexConfig" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexConfig.Initializer"></a>

```typescript
import { dataAwsccKendraIndex } from '@cdktn/provider-awscc'

const dataAwsccKendraIndexConfig: dataAwsccKendraIndex.DataAwsccKendraIndexConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/kendra_index#id DataAwsccKendraIndex#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccKendraIndexDocumentMetadataConfigurations <a name="DataAwsccKendraIndexDocumentMetadataConfigurations" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurations.Initializer"></a>

```typescript
import { dataAwsccKendraIndex } from '@cdktn/provider-awscc'

const dataAwsccKendraIndexDocumentMetadataConfigurations: dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurations = { ... }
```


### DataAwsccKendraIndexDocumentMetadataConfigurationsRelevance <a name="DataAwsccKendraIndexDocumentMetadataConfigurationsRelevance" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevance"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevance.Initializer"></a>

```typescript
import { dataAwsccKendraIndex } from '@cdktn/provider-awscc'

const dataAwsccKendraIndexDocumentMetadataConfigurationsRelevance: dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevance = { ... }
```


### DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItems <a name="DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItems" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItems"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItems.Initializer"></a>

```typescript
import { dataAwsccKendraIndex } from '@cdktn/provider-awscc'

const dataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItems: dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItems = { ... }
```


### DataAwsccKendraIndexDocumentMetadataConfigurationsSearch <a name="DataAwsccKendraIndexDocumentMetadataConfigurationsSearch" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsSearch"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsSearch.Initializer"></a>

```typescript
import { dataAwsccKendraIndex } from '@cdktn/provider-awscc'

const dataAwsccKendraIndexDocumentMetadataConfigurationsSearch: dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsSearch = { ... }
```


### DataAwsccKendraIndexServerSideEncryptionConfiguration <a name="DataAwsccKendraIndexServerSideEncryptionConfiguration" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexServerSideEncryptionConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexServerSideEncryptionConfiguration.Initializer"></a>

```typescript
import { dataAwsccKendraIndex } from '@cdktn/provider-awscc'

const dataAwsccKendraIndexServerSideEncryptionConfiguration: dataAwsccKendraIndex.DataAwsccKendraIndexServerSideEncryptionConfiguration = { ... }
```


### DataAwsccKendraIndexTags <a name="DataAwsccKendraIndexTags" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexTags.Initializer"></a>

```typescript
import { dataAwsccKendraIndex } from '@cdktn/provider-awscc'

const dataAwsccKendraIndexTags: dataAwsccKendraIndex.DataAwsccKendraIndexTags = { ... }
```


### DataAwsccKendraIndexUserTokenConfigurations <a name="DataAwsccKendraIndexUserTokenConfigurations" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurations.Initializer"></a>

```typescript
import { dataAwsccKendraIndex } from '@cdktn/provider-awscc'

const dataAwsccKendraIndexUserTokenConfigurations: dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurations = { ... }
```


### DataAwsccKendraIndexUserTokenConfigurationsJsonTokenTypeConfiguration <a name="DataAwsccKendraIndexUserTokenConfigurationsJsonTokenTypeConfiguration" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsJsonTokenTypeConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsJsonTokenTypeConfiguration.Initializer"></a>

```typescript
import { dataAwsccKendraIndex } from '@cdktn/provider-awscc'

const dataAwsccKendraIndexUserTokenConfigurationsJsonTokenTypeConfiguration: dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsJsonTokenTypeConfiguration = { ... }
```


### DataAwsccKendraIndexUserTokenConfigurationsJwtTokenTypeConfiguration <a name="DataAwsccKendraIndexUserTokenConfigurationsJwtTokenTypeConfiguration" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsJwtTokenTypeConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsJwtTokenTypeConfiguration.Initializer"></a>

```typescript
import { dataAwsccKendraIndex } from '@cdktn/provider-awscc'

const dataAwsccKendraIndexUserTokenConfigurationsJwtTokenTypeConfiguration: dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsJwtTokenTypeConfiguration = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccKendraIndexCapacityUnitsOutputReference <a name="DataAwsccKendraIndexCapacityUnitsOutputReference" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexCapacityUnitsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexCapacityUnitsOutputReference.Initializer"></a>

```typescript
import { dataAwsccKendraIndex } from '@cdktn/provider-awscc'

new dataAwsccKendraIndex.DataAwsccKendraIndexCapacityUnitsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexCapacityUnitsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexCapacityUnitsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexCapacityUnitsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexCapacityUnitsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexCapacityUnitsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexCapacityUnitsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexCapacityUnitsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexCapacityUnitsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexCapacityUnitsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexCapacityUnitsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexCapacityUnitsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexCapacityUnitsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexCapacityUnitsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexCapacityUnitsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexCapacityUnitsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexCapacityUnitsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexCapacityUnitsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexCapacityUnitsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexCapacityUnitsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexCapacityUnitsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexCapacityUnitsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexCapacityUnitsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexCapacityUnitsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexCapacityUnitsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexCapacityUnitsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexCapacityUnitsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexCapacityUnitsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexCapacityUnitsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexCapacityUnitsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexCapacityUnitsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexCapacityUnitsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexCapacityUnitsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexCapacityUnitsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexCapacityUnitsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexCapacityUnitsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexCapacityUnitsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexCapacityUnitsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexCapacityUnitsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexCapacityUnitsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexCapacityUnitsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexCapacityUnitsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexCapacityUnitsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexCapacityUnitsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexCapacityUnitsOutputReference.property.queryCapacityUnits">queryCapacityUnits</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexCapacityUnitsOutputReference.property.storageCapacityUnits">storageCapacityUnits</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexCapacityUnitsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexCapacityUnits">DataAwsccKendraIndexCapacityUnits</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexCapacityUnitsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexCapacityUnitsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `queryCapacityUnits`<sup>Required</sup> <a name="queryCapacityUnits" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexCapacityUnitsOutputReference.property.queryCapacityUnits"></a>

```typescript
public readonly queryCapacityUnits: number;
```

- *Type:* number

---

##### `storageCapacityUnits`<sup>Required</sup> <a name="storageCapacityUnits" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexCapacityUnitsOutputReference.property.storageCapacityUnits"></a>

```typescript
public readonly storageCapacityUnits: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexCapacityUnitsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccKendraIndexCapacityUnits;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexCapacityUnits">DataAwsccKendraIndexCapacityUnits</a>

---


### DataAwsccKendraIndexDocumentMetadataConfigurationsList <a name="DataAwsccKendraIndexDocumentMetadataConfigurationsList" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsList.Initializer"></a>

```typescript
import { dataAwsccKendraIndex } from '@cdktn/provider-awscc'

new dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsList.get"></a>

```typescript
public get(index: number): DataAwsccKendraIndexDocumentMetadataConfigurationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccKendraIndexDocumentMetadataConfigurationsOutputReference <a name="DataAwsccKendraIndexDocumentMetadataConfigurationsOutputReference" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsOutputReference.Initializer"></a>

```typescript
import { dataAwsccKendraIndex } from '@cdktn/provider-awscc'

new dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsOutputReference.property.relevance">relevance</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceOutputReference">DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsOutputReference.property.search">search</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsSearchOutputReference">DataAwsccKendraIndexDocumentMetadataConfigurationsSearchOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurations">DataAwsccKendraIndexDocumentMetadataConfigurations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `relevance`<sup>Required</sup> <a name="relevance" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsOutputReference.property.relevance"></a>

```typescript
public readonly relevance: DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceOutputReference">DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceOutputReference</a>

---

##### `search`<sup>Required</sup> <a name="search" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsOutputReference.property.search"></a>

```typescript
public readonly search: DataAwsccKendraIndexDocumentMetadataConfigurationsSearchOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsSearchOutputReference">DataAwsccKendraIndexDocumentMetadataConfigurationsSearchOutputReference</a>

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccKendraIndexDocumentMetadataConfigurations;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurations">DataAwsccKendraIndexDocumentMetadataConfigurations</a>

---


### DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceOutputReference <a name="DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceOutputReference" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceOutputReference.Initializer"></a>

```typescript
import { dataAwsccKendraIndex } from '@cdktn/provider-awscc'

new dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceOutputReference.property.duration">duration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceOutputReference.property.freshness">freshness</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceOutputReference.property.importance">importance</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceOutputReference.property.rankOrder">rankOrder</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceOutputReference.property.valueImportanceItems">valueImportanceItems</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItemsList">DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItemsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevance">DataAwsccKendraIndexDocumentMetadataConfigurationsRelevance</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `duration`<sup>Required</sup> <a name="duration" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceOutputReference.property.duration"></a>

```typescript
public readonly duration: string;
```

- *Type:* string

---

##### `freshness`<sup>Required</sup> <a name="freshness" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceOutputReference.property.freshness"></a>

```typescript
public readonly freshness: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `importance`<sup>Required</sup> <a name="importance" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceOutputReference.property.importance"></a>

```typescript
public readonly importance: number;
```

- *Type:* number

---

##### `rankOrder`<sup>Required</sup> <a name="rankOrder" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceOutputReference.property.rankOrder"></a>

```typescript
public readonly rankOrder: string;
```

- *Type:* string

---

##### `valueImportanceItems`<sup>Required</sup> <a name="valueImportanceItems" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceOutputReference.property.valueImportanceItems"></a>

```typescript
public readonly valueImportanceItems: DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItemsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItemsList">DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItemsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccKendraIndexDocumentMetadataConfigurationsRelevance;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevance">DataAwsccKendraIndexDocumentMetadataConfigurationsRelevance</a>

---


### DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItemsList <a name="DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItemsList" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItemsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItemsList.Initializer"></a>

```typescript
import { dataAwsccKendraIndex } from '@cdktn/provider-awscc'

new dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItemsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItemsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItemsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItemsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItemsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItemsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItemsList.get"></a>

```typescript
public get(index: number): DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItemsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItemsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItemsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItemsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItemsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItemsOutputReference <a name="DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItemsOutputReference" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItemsOutputReference.Initializer"></a>

```typescript
import { dataAwsccKendraIndex } from '@cdktn/provider-awscc'

new dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItemsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItemsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItemsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItemsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItemsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItemsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItemsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItemsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItemsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItemsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItemsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItemsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItemsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItemsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItemsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItemsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItemsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItemsOutputReference.property.value">value</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItems">DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItemsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItemsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItemsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItemsOutputReference.property.value"></a>

```typescript
public readonly value: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItemsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItems;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItems">DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItems</a>

---


### DataAwsccKendraIndexDocumentMetadataConfigurationsSearchOutputReference <a name="DataAwsccKendraIndexDocumentMetadataConfigurationsSearchOutputReference" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsSearchOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsSearchOutputReference.Initializer"></a>

```typescript
import { dataAwsccKendraIndex } from '@cdktn/provider-awscc'

new dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsSearchOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsSearchOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsSearchOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsSearchOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsSearchOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsSearchOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsSearchOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsSearchOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsSearchOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsSearchOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsSearchOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsSearchOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsSearchOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsSearchOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsSearchOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsSearchOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsSearchOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsSearchOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsSearchOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsSearchOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsSearchOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsSearchOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsSearchOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsSearchOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsSearchOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsSearchOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsSearchOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsSearchOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsSearchOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsSearchOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsSearchOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsSearchOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsSearchOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsSearchOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsSearchOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsSearchOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsSearchOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsSearchOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsSearchOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsSearchOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsSearchOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsSearchOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsSearchOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsSearchOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsSearchOutputReference.property.displayable">displayable</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsSearchOutputReference.property.facetable">facetable</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsSearchOutputReference.property.searchable">searchable</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsSearchOutputReference.property.sortable">sortable</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsSearchOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsSearch">DataAwsccKendraIndexDocumentMetadataConfigurationsSearch</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsSearchOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsSearchOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `displayable`<sup>Required</sup> <a name="displayable" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsSearchOutputReference.property.displayable"></a>

```typescript
public readonly displayable: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `facetable`<sup>Required</sup> <a name="facetable" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsSearchOutputReference.property.facetable"></a>

```typescript
public readonly facetable: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `searchable`<sup>Required</sup> <a name="searchable" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsSearchOutputReference.property.searchable"></a>

```typescript
public readonly searchable: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `sortable`<sup>Required</sup> <a name="sortable" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsSearchOutputReference.property.sortable"></a>

```typescript
public readonly sortable: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsSearchOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccKendraIndexDocumentMetadataConfigurationsSearch;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsSearch">DataAwsccKendraIndexDocumentMetadataConfigurationsSearch</a>

---


### DataAwsccKendraIndexServerSideEncryptionConfigurationOutputReference <a name="DataAwsccKendraIndexServerSideEncryptionConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexServerSideEncryptionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexServerSideEncryptionConfigurationOutputReference.Initializer"></a>

```typescript
import { dataAwsccKendraIndex } from '@cdktn/provider-awscc'

new dataAwsccKendraIndex.DataAwsccKendraIndexServerSideEncryptionConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexServerSideEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexServerSideEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexServerSideEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexServerSideEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexServerSideEncryptionConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexServerSideEncryptionConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexServerSideEncryptionConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexServerSideEncryptionConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexServerSideEncryptionConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexServerSideEncryptionConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexServerSideEncryptionConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexServerSideEncryptionConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexServerSideEncryptionConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexServerSideEncryptionConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexServerSideEncryptionConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexServerSideEncryptionConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexServerSideEncryptionConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexServerSideEncryptionConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexServerSideEncryptionConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexServerSideEncryptionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexServerSideEncryptionConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexServerSideEncryptionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexServerSideEncryptionConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexServerSideEncryptionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexServerSideEncryptionConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexServerSideEncryptionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexServerSideEncryptionConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexServerSideEncryptionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexServerSideEncryptionConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexServerSideEncryptionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexServerSideEncryptionConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexServerSideEncryptionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexServerSideEncryptionConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexServerSideEncryptionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexServerSideEncryptionConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexServerSideEncryptionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexServerSideEncryptionConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexServerSideEncryptionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexServerSideEncryptionConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexServerSideEncryptionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexServerSideEncryptionConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexServerSideEncryptionConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexServerSideEncryptionConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexServerSideEncryptionConfigurationOutputReference.property.kmsKeyId">kmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexServerSideEncryptionConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexServerSideEncryptionConfiguration">DataAwsccKendraIndexServerSideEncryptionConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexServerSideEncryptionConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexServerSideEncryptionConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `kmsKeyId`<sup>Required</sup> <a name="kmsKeyId" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexServerSideEncryptionConfigurationOutputReference.property.kmsKeyId"></a>

```typescript
public readonly kmsKeyId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexServerSideEncryptionConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccKendraIndexServerSideEncryptionConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexServerSideEncryptionConfiguration">DataAwsccKendraIndexServerSideEncryptionConfiguration</a>

---


### DataAwsccKendraIndexTagsList <a name="DataAwsccKendraIndexTagsList" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexTagsList.Initializer"></a>

```typescript
import { dataAwsccKendraIndex } from '@cdktn/provider-awscc'

new dataAwsccKendraIndex.DataAwsccKendraIndexTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexTagsList.get"></a>

```typescript
public get(index: number): DataAwsccKendraIndexTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccKendraIndexTagsOutputReference <a name="DataAwsccKendraIndexTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexTagsOutputReference.Initializer"></a>

```typescript
import { dataAwsccKendraIndex } from '@cdktn/provider-awscc'

new dataAwsccKendraIndex.DataAwsccKendraIndexTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexTags">DataAwsccKendraIndexTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccKendraIndexTags;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexTags">DataAwsccKendraIndexTags</a>

---


### DataAwsccKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference <a name="DataAwsccKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.Initializer"></a>

```typescript
import { dataAwsccKendraIndex } from '@cdktn/provider-awscc'

new dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.property.groupAttributeField">groupAttributeField</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.property.userNameAttributeField">userNameAttributeField</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsJsonTokenTypeConfiguration">DataAwsccKendraIndexUserTokenConfigurationsJsonTokenTypeConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `groupAttributeField`<sup>Required</sup> <a name="groupAttributeField" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.property.groupAttributeField"></a>

```typescript
public readonly groupAttributeField: string;
```

- *Type:* string

---

##### `userNameAttributeField`<sup>Required</sup> <a name="userNameAttributeField" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.property.userNameAttributeField"></a>

```typescript
public readonly userNameAttributeField: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccKendraIndexUserTokenConfigurationsJsonTokenTypeConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsJsonTokenTypeConfiguration">DataAwsccKendraIndexUserTokenConfigurationsJsonTokenTypeConfiguration</a>

---


### DataAwsccKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference <a name="DataAwsccKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.Initializer"></a>

```typescript
import { dataAwsccKendraIndex } from '@cdktn/provider-awscc'

new dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.property.claimRegex">claimRegex</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.property.groupAttributeField">groupAttributeField</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.property.issuer">issuer</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.property.keyLocation">keyLocation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.property.secretManagerArn">secretManagerArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.property.url">url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.property.userNameAttributeField">userNameAttributeField</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsJwtTokenTypeConfiguration">DataAwsccKendraIndexUserTokenConfigurationsJwtTokenTypeConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `claimRegex`<sup>Required</sup> <a name="claimRegex" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.property.claimRegex"></a>

```typescript
public readonly claimRegex: string;
```

- *Type:* string

---

##### `groupAttributeField`<sup>Required</sup> <a name="groupAttributeField" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.property.groupAttributeField"></a>

```typescript
public readonly groupAttributeField: string;
```

- *Type:* string

---

##### `issuer`<sup>Required</sup> <a name="issuer" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.property.issuer"></a>

```typescript
public readonly issuer: string;
```

- *Type:* string

---

##### `keyLocation`<sup>Required</sup> <a name="keyLocation" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.property.keyLocation"></a>

```typescript
public readonly keyLocation: string;
```

- *Type:* string

---

##### `secretManagerArn`<sup>Required</sup> <a name="secretManagerArn" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.property.secretManagerArn"></a>

```typescript
public readonly secretManagerArn: string;
```

- *Type:* string

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

---

##### `userNameAttributeField`<sup>Required</sup> <a name="userNameAttributeField" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.property.userNameAttributeField"></a>

```typescript
public readonly userNameAttributeField: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccKendraIndexUserTokenConfigurationsJwtTokenTypeConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsJwtTokenTypeConfiguration">DataAwsccKendraIndexUserTokenConfigurationsJwtTokenTypeConfiguration</a>

---


### DataAwsccKendraIndexUserTokenConfigurationsList <a name="DataAwsccKendraIndexUserTokenConfigurationsList" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsList.Initializer"></a>

```typescript
import { dataAwsccKendraIndex } from '@cdktn/provider-awscc'

new dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsList.get"></a>

```typescript
public get(index: number): DataAwsccKendraIndexUserTokenConfigurationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccKendraIndexUserTokenConfigurationsOutputReference <a name="DataAwsccKendraIndexUserTokenConfigurationsOutputReference" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsOutputReference.Initializer"></a>

```typescript
import { dataAwsccKendraIndex } from '@cdktn/provider-awscc'

new dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsOutputReference.property.jsonTokenTypeConfiguration">jsonTokenTypeConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference">DataAwsccKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsOutputReference.property.jwtTokenTypeConfiguration">jwtTokenTypeConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference">DataAwsccKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurations">DataAwsccKendraIndexUserTokenConfigurations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `jsonTokenTypeConfiguration`<sup>Required</sup> <a name="jsonTokenTypeConfiguration" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsOutputReference.property.jsonTokenTypeConfiguration"></a>

```typescript
public readonly jsonTokenTypeConfiguration: DataAwsccKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference">DataAwsccKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference</a>

---

##### `jwtTokenTypeConfiguration`<sup>Required</sup> <a name="jwtTokenTypeConfiguration" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsOutputReference.property.jwtTokenTypeConfiguration"></a>

```typescript
public readonly jwtTokenTypeConfiguration: DataAwsccKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference">DataAwsccKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccKendraIndexUserTokenConfigurations;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurations">DataAwsccKendraIndexUserTokenConfigurations</a>

---



