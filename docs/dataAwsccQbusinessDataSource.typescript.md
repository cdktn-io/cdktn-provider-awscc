# `dataAwsccQbusinessDataSource` Submodule <a name="`dataAwsccQbusinessDataSource` Submodule" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccQbusinessDataSource <a name="DataAwsccQbusinessDataSource" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSource"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/qbusiness_data_source awscc_qbusiness_data_source}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSource.Initializer"></a>

```typescript
import { dataAwsccQbusinessDataSource } from '@cdktn/provider-awscc'

new dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSource(scope: Construct, id: string, config: DataAwsccQbusinessDataSourceConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSource.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSource.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSource.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceConfig">DataAwsccQbusinessDataSourceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSource.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSource.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSource.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceConfig">DataAwsccQbusinessDataSourceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSource.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSource.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSource.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSource.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSource.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSource.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSource.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSource.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSource.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSource.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSource.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSource.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSource.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSource.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSource.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSource.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSource.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSource.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSource.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSource.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSource.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSource.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSource.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSource.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSource.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSource.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSource.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSource.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSource.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSource.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSource.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSource.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSource.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSource.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSource.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSource.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSource.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSource.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSource.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSource.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSource.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSource.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSource.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSource.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSource.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSource.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSource.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSource.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSource.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSource.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSource.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSource.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSource.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSource.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccQbusinessDataSource resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSource.isConstruct"></a>

```typescript
import { dataAwsccQbusinessDataSource } from '@cdktn/provider-awscc'

dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSource.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSource.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSource.isTerraformElement"></a>

```typescript
import { dataAwsccQbusinessDataSource } from '@cdktn/provider-awscc'

dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSource.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSource.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSource.isTerraformDataSource"></a>

```typescript
import { dataAwsccQbusinessDataSource } from '@cdktn/provider-awscc'

dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSource.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSource.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSource.generateConfigForImport"></a>

```typescript
import { dataAwsccQbusinessDataSource } from '@cdktn/provider-awscc'

dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSource.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccQbusinessDataSource resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSource.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSource.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccQbusinessDataSource to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSource.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccQbusinessDataSource that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/qbusiness_data_source#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSource.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccQbusinessDataSource to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSource.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSource.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSource.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSource.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSource.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSource.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSource.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSource.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSource.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSource.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSource.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSource.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSource.property.applicationId">applicationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSource.property.configuration">configuration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSource.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSource.property.dataSourceArn">dataSourceArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSource.property.dataSourceId">dataSourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSource.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSource.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSource.property.documentEnrichmentConfiguration">documentEnrichmentConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationOutputReference">DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSource.property.indexId">indexId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSource.property.mediaExtractionConfiguration">mediaExtractionConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationOutputReference">DataAwsccQbusinessDataSourceMediaExtractionConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSource.property.roleArn">roleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSource.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSource.property.syncSchedule">syncSchedule</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSource.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceTagsList">DataAwsccQbusinessDataSourceTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSource.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSource.property.updatedAt">updatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSource.property.vpcConfiguration">vpcConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceVpcConfigurationOutputReference">DataAwsccQbusinessDataSourceVpcConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSource.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSource.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSource.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSource.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSource.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSource.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSource.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSource.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSource.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSource.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSource.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSource.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSource.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSource.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `applicationId`<sup>Required</sup> <a name="applicationId" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSource.property.applicationId"></a>

```typescript
public readonly applicationId: string;
```

- *Type:* string

---

##### `configuration`<sup>Required</sup> <a name="configuration" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSource.property.configuration"></a>

```typescript
public readonly configuration: string;
```

- *Type:* string

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSource.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `dataSourceArn`<sup>Required</sup> <a name="dataSourceArn" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSource.property.dataSourceArn"></a>

```typescript
public readonly dataSourceArn: string;
```

- *Type:* string

---

##### `dataSourceId`<sup>Required</sup> <a name="dataSourceId" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSource.property.dataSourceId"></a>

```typescript
public readonly dataSourceId: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSource.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSource.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `documentEnrichmentConfiguration`<sup>Required</sup> <a name="documentEnrichmentConfiguration" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSource.property.documentEnrichmentConfiguration"></a>

```typescript
public readonly documentEnrichmentConfiguration: DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationOutputReference">DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationOutputReference</a>

---

##### `indexId`<sup>Required</sup> <a name="indexId" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSource.property.indexId"></a>

```typescript
public readonly indexId: string;
```

- *Type:* string

---

##### `mediaExtractionConfiguration`<sup>Required</sup> <a name="mediaExtractionConfiguration" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSource.property.mediaExtractionConfiguration"></a>

```typescript
public readonly mediaExtractionConfiguration: DataAwsccQbusinessDataSourceMediaExtractionConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationOutputReference">DataAwsccQbusinessDataSourceMediaExtractionConfigurationOutputReference</a>

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSource.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSource.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `syncSchedule`<sup>Required</sup> <a name="syncSchedule" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSource.property.syncSchedule"></a>

```typescript
public readonly syncSchedule: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSource.property.tags"></a>

```typescript
public readonly tags: DataAwsccQbusinessDataSourceTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceTagsList">DataAwsccQbusinessDataSourceTagsList</a>

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSource.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSource.property.updatedAt"></a>

```typescript
public readonly updatedAt: string;
```

- *Type:* string

---

##### `vpcConfiguration`<sup>Required</sup> <a name="vpcConfiguration" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSource.property.vpcConfiguration"></a>

```typescript
public readonly vpcConfiguration: DataAwsccQbusinessDataSourceVpcConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceVpcConfigurationOutputReference">DataAwsccQbusinessDataSourceVpcConfigurationOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSource.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSource.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSource.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSource.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccQbusinessDataSourceConfig <a name="DataAwsccQbusinessDataSourceConfig" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceConfig.Initializer"></a>

```typescript
import { dataAwsccQbusinessDataSource } from '@cdktn/provider-awscc'

const dataAwsccQbusinessDataSourceConfig: dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/qbusiness_data_source#id DataAwsccQbusinessDataSource#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccQbusinessDataSourceDocumentEnrichmentConfiguration <a name="DataAwsccQbusinessDataSourceDocumentEnrichmentConfiguration" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfiguration.Initializer"></a>

```typescript
import { dataAwsccQbusinessDataSource } from '@cdktn/provider-awscc'

const dataAwsccQbusinessDataSourceDocumentEnrichmentConfiguration: dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfiguration = { ... }
```


### DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurations <a name="DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurations" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurations.Initializer"></a>

```typescript
import { dataAwsccQbusinessDataSource } from '@cdktn/provider-awscc'

const dataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurations: dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurations = { ... }
```


### DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsCondition <a name="DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsCondition" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsCondition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsCondition.Initializer"></a>

```typescript
import { dataAwsccQbusinessDataSource } from '@cdktn/provider-awscc'

const dataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsCondition: dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsCondition = { ... }
```


### DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValue <a name="DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValue" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValue"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValue.Initializer"></a>

```typescript
import { dataAwsccQbusinessDataSource } from '@cdktn/provider-awscc'

const dataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValue: dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValue = { ... }
```


### DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTarget <a name="DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTarget" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTarget"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTarget.Initializer"></a>

```typescript
import { dataAwsccQbusinessDataSource } from '@cdktn/provider-awscc'

const dataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTarget: dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTarget = { ... }
```


### DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValue <a name="DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValue" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValue"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValue.Initializer"></a>

```typescript
import { dataAwsccQbusinessDataSource } from '@cdktn/provider-awscc'

const dataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValue: dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValue = { ... }
```


### DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfiguration <a name="DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfiguration" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfiguration.Initializer"></a>

```typescript
import { dataAwsccQbusinessDataSource } from '@cdktn/provider-awscc'

const dataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfiguration: dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfiguration = { ... }
```


### DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationCondition <a name="DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationCondition" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationCondition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationCondition.Initializer"></a>

```typescript
import { dataAwsccQbusinessDataSource } from '@cdktn/provider-awscc'

const dataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationCondition: dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationCondition = { ... }
```


### DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValue <a name="DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValue" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValue"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValue.Initializer"></a>

```typescript
import { dataAwsccQbusinessDataSource } from '@cdktn/provider-awscc'

const dataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValue: dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValue = { ... }
```


### DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfiguration <a name="DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfiguration" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfiguration.Initializer"></a>

```typescript
import { dataAwsccQbusinessDataSource } from '@cdktn/provider-awscc'

const dataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfiguration: dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfiguration = { ... }
```


### DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationCondition <a name="DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationCondition" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationCondition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationCondition.Initializer"></a>

```typescript
import { dataAwsccQbusinessDataSource } from '@cdktn/provider-awscc'

const dataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationCondition: dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationCondition = { ... }
```


### DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValue <a name="DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValue" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValue"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValue.Initializer"></a>

```typescript
import { dataAwsccQbusinessDataSource } from '@cdktn/provider-awscc'

const dataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValue: dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValue = { ... }
```


### DataAwsccQbusinessDataSourceMediaExtractionConfiguration <a name="DataAwsccQbusinessDataSourceMediaExtractionConfiguration" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfiguration.Initializer"></a>

```typescript
import { dataAwsccQbusinessDataSource } from '@cdktn/provider-awscc'

const dataAwsccQbusinessDataSourceMediaExtractionConfiguration: dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfiguration = { ... }
```


### DataAwsccQbusinessDataSourceMediaExtractionConfigurationAudioExtractionConfiguration <a name="DataAwsccQbusinessDataSourceMediaExtractionConfigurationAudioExtractionConfiguration" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationAudioExtractionConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationAudioExtractionConfiguration.Initializer"></a>

```typescript
import { dataAwsccQbusinessDataSource } from '@cdktn/provider-awscc'

const dataAwsccQbusinessDataSourceMediaExtractionConfigurationAudioExtractionConfiguration: dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationAudioExtractionConfiguration = { ... }
```


### DataAwsccQbusinessDataSourceMediaExtractionConfigurationImageExtractionConfiguration <a name="DataAwsccQbusinessDataSourceMediaExtractionConfigurationImageExtractionConfiguration" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationImageExtractionConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationImageExtractionConfiguration.Initializer"></a>

```typescript
import { dataAwsccQbusinessDataSource } from '@cdktn/provider-awscc'

const dataAwsccQbusinessDataSourceMediaExtractionConfigurationImageExtractionConfiguration: dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationImageExtractionConfiguration = { ... }
```


### DataAwsccQbusinessDataSourceMediaExtractionConfigurationVideoExtractionConfiguration <a name="DataAwsccQbusinessDataSourceMediaExtractionConfigurationVideoExtractionConfiguration" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationVideoExtractionConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationVideoExtractionConfiguration.Initializer"></a>

```typescript
import { dataAwsccQbusinessDataSource } from '@cdktn/provider-awscc'

const dataAwsccQbusinessDataSourceMediaExtractionConfigurationVideoExtractionConfiguration: dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationVideoExtractionConfiguration = { ... }
```


### DataAwsccQbusinessDataSourceTags <a name="DataAwsccQbusinessDataSourceTags" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceTags.Initializer"></a>

```typescript
import { dataAwsccQbusinessDataSource } from '@cdktn/provider-awscc'

const dataAwsccQbusinessDataSourceTags: dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceTags = { ... }
```


### DataAwsccQbusinessDataSourceVpcConfiguration <a name="DataAwsccQbusinessDataSourceVpcConfiguration" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceVpcConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceVpcConfiguration.Initializer"></a>

```typescript
import { dataAwsccQbusinessDataSource } from '@cdktn/provider-awscc'

const dataAwsccQbusinessDataSourceVpcConfiguration: dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceVpcConfiguration = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference <a name="DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.Initializer"></a>

```typescript
import { dataAwsccQbusinessDataSource } from '@cdktn/provider-awscc'

new dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.property.operator">operator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.property.value">value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValueOutputReference">DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValueOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsCondition">DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsCondition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.property.operator"></a>

```typescript
public readonly operator: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.property.value"></a>

```typescript
public readonly value: DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValueOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValueOutputReference">DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValueOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsCondition;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsCondition">DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsCondition</a>

---


### DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValueOutputReference <a name="DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValueOutputReference" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValueOutputReference.Initializer"></a>

```typescript
import { dataAwsccQbusinessDataSource } from '@cdktn/provider-awscc'

new dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValueOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValueOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValueOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValueOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValueOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValueOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValueOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValueOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValueOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValueOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValueOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValueOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValueOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValueOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValueOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValueOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValueOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValueOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValueOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValueOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValueOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValueOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValueOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValueOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValueOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValueOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValueOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValueOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValueOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValueOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValueOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValueOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValueOutputReference.property.dateValue">dateValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValueOutputReference.property.longValue">longValue</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValueOutputReference.property.stringListValue">stringListValue</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValueOutputReference.property.stringValue">stringValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValueOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValue">DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValue</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValueOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValueOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dateValue`<sup>Required</sup> <a name="dateValue" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValueOutputReference.property.dateValue"></a>

```typescript
public readonly dateValue: string;
```

- *Type:* string

---

##### `longValue`<sup>Required</sup> <a name="longValue" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValueOutputReference.property.longValue"></a>

```typescript
public readonly longValue: number;
```

- *Type:* number

---

##### `stringListValue`<sup>Required</sup> <a name="stringListValue" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValueOutputReference.property.stringListValue"></a>

```typescript
public readonly stringListValue: string[];
```

- *Type:* string[]

---

##### `stringValue`<sup>Required</sup> <a name="stringValue" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValueOutputReference.property.stringValue"></a>

```typescript
public readonly stringValue: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValueOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValue;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValue">DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValue</a>

---


### DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsList <a name="DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsList" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsList.Initializer"></a>

```typescript
import { dataAwsccQbusinessDataSource } from '@cdktn/provider-awscc'

new dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsList.get"></a>

```typescript
public get(index: number): DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsOutputReference <a name="DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsOutputReference" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.Initializer"></a>

```typescript
import { dataAwsccQbusinessDataSource } from '@cdktn/provider-awscc'

new dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.property.condition">condition</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference">DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.property.documentContentOperator">documentContentOperator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.property.target">target</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference">DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurations">DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.property.condition"></a>

```typescript
public readonly condition: DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference">DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference</a>

---

##### `documentContentOperator`<sup>Required</sup> <a name="documentContentOperator" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.property.documentContentOperator"></a>

```typescript
public readonly documentContentOperator: string;
```

- *Type:* string

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.property.target"></a>

```typescript
public readonly target: DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference">DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurations;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurations">DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurations</a>

---


### DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference <a name="DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.Initializer"></a>

```typescript
import { dataAwsccQbusinessDataSource } from '@cdktn/provider-awscc'

new dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.property.attributeValueOperator">attributeValueOperator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.property.value">value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValueOutputReference">DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValueOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTarget">DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTarget</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `attributeValueOperator`<sup>Required</sup> <a name="attributeValueOperator" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.property.attributeValueOperator"></a>

```typescript
public readonly attributeValueOperator: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.property.value"></a>

```typescript
public readonly value: DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValueOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValueOutputReference">DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValueOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTarget;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTarget">DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTarget</a>

---


### DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValueOutputReference <a name="DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValueOutputReference" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValueOutputReference.Initializer"></a>

```typescript
import { dataAwsccQbusinessDataSource } from '@cdktn/provider-awscc'

new dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValueOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValueOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValueOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValueOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValueOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValueOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValueOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValueOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValueOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValueOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValueOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValueOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValueOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValueOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValueOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValueOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValueOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValueOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValueOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValueOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValueOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValueOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValueOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValueOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValueOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValueOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValueOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValueOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValueOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValueOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValueOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValueOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValueOutputReference.property.dateValue">dateValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValueOutputReference.property.longValue">longValue</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValueOutputReference.property.stringListValue">stringListValue</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValueOutputReference.property.stringValue">stringValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValueOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValue">DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValue</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValueOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValueOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dateValue`<sup>Required</sup> <a name="dateValue" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValueOutputReference.property.dateValue"></a>

```typescript
public readonly dateValue: string;
```

- *Type:* string

---

##### `longValue`<sup>Required</sup> <a name="longValue" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValueOutputReference.property.longValue"></a>

```typescript
public readonly longValue: number;
```

- *Type:* number

---

##### `stringListValue`<sup>Required</sup> <a name="stringListValue" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValueOutputReference.property.stringListValue"></a>

```typescript
public readonly stringListValue: string[];
```

- *Type:* string[]

---

##### `stringValue`<sup>Required</sup> <a name="stringValue" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValueOutputReference.property.stringValue"></a>

```typescript
public readonly stringValue: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValueOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValue;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValue">DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValue</a>

---


### DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationOutputReference <a name="DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationOutputReference.Initializer"></a>

```typescript
import { dataAwsccQbusinessDataSource } from '@cdktn/provider-awscc'

new dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationOutputReference.property.inlineConfigurations">inlineConfigurations</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsList">DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationOutputReference.property.postExtractionHookConfiguration">postExtractionHookConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference">DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationOutputReference.property.preExtractionHookConfiguration">preExtractionHookConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference">DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfiguration">DataAwsccQbusinessDataSourceDocumentEnrichmentConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `inlineConfigurations`<sup>Required</sup> <a name="inlineConfigurations" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationOutputReference.property.inlineConfigurations"></a>

```typescript
public readonly inlineConfigurations: DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsList">DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsList</a>

---

##### `postExtractionHookConfiguration`<sup>Required</sup> <a name="postExtractionHookConfiguration" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationOutputReference.property.postExtractionHookConfiguration"></a>

```typescript
public readonly postExtractionHookConfiguration: DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference">DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference</a>

---

##### `preExtractionHookConfiguration`<sup>Required</sup> <a name="preExtractionHookConfiguration" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationOutputReference.property.preExtractionHookConfiguration"></a>

```typescript
public readonly preExtractionHookConfiguration: DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference">DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccQbusinessDataSourceDocumentEnrichmentConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfiguration">DataAwsccQbusinessDataSourceDocumentEnrichmentConfiguration</a>

---


### DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference <a name="DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.Initializer"></a>

```typescript
import { dataAwsccQbusinessDataSource } from '@cdktn/provider-awscc'

new dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.property.operator">operator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.property.value">value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValueOutputReference">DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValueOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationCondition">DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationCondition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.property.operator"></a>

```typescript
public readonly operator: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.property.value"></a>

```typescript
public readonly value: DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValueOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValueOutputReference">DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValueOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationCondition;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationCondition">DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationCondition</a>

---


### DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValueOutputReference <a name="DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValueOutputReference" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValueOutputReference.Initializer"></a>

```typescript
import { dataAwsccQbusinessDataSource } from '@cdktn/provider-awscc'

new dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValueOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValueOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValueOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValueOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValueOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValueOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValueOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValueOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValueOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValueOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValueOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValueOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValueOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValueOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValueOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValueOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValueOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValueOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValueOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValueOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValueOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValueOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValueOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValueOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValueOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValueOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValueOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValueOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValueOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValueOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValueOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValueOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValueOutputReference.property.dateValue">dateValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValueOutputReference.property.longValue">longValue</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValueOutputReference.property.stringListValue">stringListValue</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValueOutputReference.property.stringValue">stringValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValueOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValue">DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValue</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValueOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValueOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dateValue`<sup>Required</sup> <a name="dateValue" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValueOutputReference.property.dateValue"></a>

```typescript
public readonly dateValue: string;
```

- *Type:* string

---

##### `longValue`<sup>Required</sup> <a name="longValue" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValueOutputReference.property.longValue"></a>

```typescript
public readonly longValue: number;
```

- *Type:* number

---

##### `stringListValue`<sup>Required</sup> <a name="stringListValue" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValueOutputReference.property.stringListValue"></a>

```typescript
public readonly stringListValue: string[];
```

- *Type:* string[]

---

##### `stringValue`<sup>Required</sup> <a name="stringValue" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValueOutputReference.property.stringValue"></a>

```typescript
public readonly stringValue: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValueOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValue;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValue">DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValue</a>

---


### DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference <a name="DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.Initializer"></a>

```typescript
import { dataAwsccQbusinessDataSource } from '@cdktn/provider-awscc'

new dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.property.invocationCondition">invocationCondition</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference">DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.property.lambdaArn">lambdaArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.property.roleArn">roleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.property.s3BucketName">s3BucketName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfiguration">DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `invocationCondition`<sup>Required</sup> <a name="invocationCondition" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.property.invocationCondition"></a>

```typescript
public readonly invocationCondition: DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference">DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference</a>

---

##### `lambdaArn`<sup>Required</sup> <a name="lambdaArn" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.property.lambdaArn"></a>

```typescript
public readonly lambdaArn: string;
```

- *Type:* string

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

---

##### `s3BucketName`<sup>Required</sup> <a name="s3BucketName" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.property.s3BucketName"></a>

```typescript
public readonly s3BucketName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfiguration">DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfiguration</a>

---


### DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference <a name="DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.Initializer"></a>

```typescript
import { dataAwsccQbusinessDataSource } from '@cdktn/provider-awscc'

new dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.property.operator">operator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.property.value">value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValueOutputReference">DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValueOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationCondition">DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationCondition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.property.operator"></a>

```typescript
public readonly operator: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.property.value"></a>

```typescript
public readonly value: DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValueOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValueOutputReference">DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValueOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationCondition;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationCondition">DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationCondition</a>

---


### DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValueOutputReference <a name="DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValueOutputReference" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValueOutputReference.Initializer"></a>

```typescript
import { dataAwsccQbusinessDataSource } from '@cdktn/provider-awscc'

new dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValueOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValueOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValueOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValueOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValueOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValueOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValueOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValueOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValueOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValueOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValueOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValueOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValueOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValueOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValueOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValueOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValueOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValueOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValueOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValueOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValueOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValueOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValueOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValueOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValueOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValueOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValueOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValueOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValueOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValueOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValueOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValueOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValueOutputReference.property.dateValue">dateValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValueOutputReference.property.longValue">longValue</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValueOutputReference.property.stringListValue">stringListValue</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValueOutputReference.property.stringValue">stringValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValueOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValue">DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValue</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValueOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValueOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dateValue`<sup>Required</sup> <a name="dateValue" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValueOutputReference.property.dateValue"></a>

```typescript
public readonly dateValue: string;
```

- *Type:* string

---

##### `longValue`<sup>Required</sup> <a name="longValue" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValueOutputReference.property.longValue"></a>

```typescript
public readonly longValue: number;
```

- *Type:* number

---

##### `stringListValue`<sup>Required</sup> <a name="stringListValue" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValueOutputReference.property.stringListValue"></a>

```typescript
public readonly stringListValue: string[];
```

- *Type:* string[]

---

##### `stringValue`<sup>Required</sup> <a name="stringValue" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValueOutputReference.property.stringValue"></a>

```typescript
public readonly stringValue: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValueOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValue;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValue">DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValue</a>

---


### DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference <a name="DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.Initializer"></a>

```typescript
import { dataAwsccQbusinessDataSource } from '@cdktn/provider-awscc'

new dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.property.invocationCondition">invocationCondition</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference">DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.property.lambdaArn">lambdaArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.property.roleArn">roleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.property.s3BucketName">s3BucketName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfiguration">DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `invocationCondition`<sup>Required</sup> <a name="invocationCondition" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.property.invocationCondition"></a>

```typescript
public readonly invocationCondition: DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference">DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference</a>

---

##### `lambdaArn`<sup>Required</sup> <a name="lambdaArn" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.property.lambdaArn"></a>

```typescript
public readonly lambdaArn: string;
```

- *Type:* string

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

---

##### `s3BucketName`<sup>Required</sup> <a name="s3BucketName" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.property.s3BucketName"></a>

```typescript
public readonly s3BucketName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfiguration">DataAwsccQbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfiguration</a>

---


### DataAwsccQbusinessDataSourceMediaExtractionConfigurationAudioExtractionConfigurationOutputReference <a name="DataAwsccQbusinessDataSourceMediaExtractionConfigurationAudioExtractionConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationAudioExtractionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.Initializer"></a>

```typescript
import { dataAwsccQbusinessDataSource } from '@cdktn/provider-awscc'

new dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationAudioExtractionConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.property.audioExtractionStatus">audioExtractionStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationAudioExtractionConfiguration">DataAwsccQbusinessDataSourceMediaExtractionConfigurationAudioExtractionConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `audioExtractionStatus`<sup>Required</sup> <a name="audioExtractionStatus" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.property.audioExtractionStatus"></a>

```typescript
public readonly audioExtractionStatus: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccQbusinessDataSourceMediaExtractionConfigurationAudioExtractionConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationAudioExtractionConfiguration">DataAwsccQbusinessDataSourceMediaExtractionConfigurationAudioExtractionConfiguration</a>

---


### DataAwsccQbusinessDataSourceMediaExtractionConfigurationImageExtractionConfigurationOutputReference <a name="DataAwsccQbusinessDataSourceMediaExtractionConfigurationImageExtractionConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationImageExtractionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationImageExtractionConfigurationOutputReference.Initializer"></a>

```typescript
import { dataAwsccQbusinessDataSource } from '@cdktn/provider-awscc'

new dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationImageExtractionConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationImageExtractionConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationImageExtractionConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationImageExtractionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationImageExtractionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationImageExtractionConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationImageExtractionConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationImageExtractionConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationImageExtractionConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationImageExtractionConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationImageExtractionConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationImageExtractionConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationImageExtractionConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationImageExtractionConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationImageExtractionConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationImageExtractionConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationImageExtractionConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationImageExtractionConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationImageExtractionConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationImageExtractionConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationImageExtractionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationImageExtractionConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationImageExtractionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationImageExtractionConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationImageExtractionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationImageExtractionConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationImageExtractionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationImageExtractionConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationImageExtractionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationImageExtractionConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationImageExtractionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationImageExtractionConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationImageExtractionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationImageExtractionConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationImageExtractionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationImageExtractionConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationImageExtractionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationImageExtractionConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationImageExtractionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationImageExtractionConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationImageExtractionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationImageExtractionConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationImageExtractionConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationImageExtractionConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationImageExtractionConfigurationOutputReference.property.imageExtractionStatus">imageExtractionStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationImageExtractionConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationImageExtractionConfiguration">DataAwsccQbusinessDataSourceMediaExtractionConfigurationImageExtractionConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationImageExtractionConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationImageExtractionConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `imageExtractionStatus`<sup>Required</sup> <a name="imageExtractionStatus" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationImageExtractionConfigurationOutputReference.property.imageExtractionStatus"></a>

```typescript
public readonly imageExtractionStatus: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationImageExtractionConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccQbusinessDataSourceMediaExtractionConfigurationImageExtractionConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationImageExtractionConfiguration">DataAwsccQbusinessDataSourceMediaExtractionConfigurationImageExtractionConfiguration</a>

---


### DataAwsccQbusinessDataSourceMediaExtractionConfigurationOutputReference <a name="DataAwsccQbusinessDataSourceMediaExtractionConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationOutputReference.Initializer"></a>

```typescript
import { dataAwsccQbusinessDataSource } from '@cdktn/provider-awscc'

new dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationOutputReference.property.audioExtractionConfiguration">audioExtractionConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationAudioExtractionConfigurationOutputReference">DataAwsccQbusinessDataSourceMediaExtractionConfigurationAudioExtractionConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationOutputReference.property.imageExtractionConfiguration">imageExtractionConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationImageExtractionConfigurationOutputReference">DataAwsccQbusinessDataSourceMediaExtractionConfigurationImageExtractionConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationOutputReference.property.videoExtractionConfiguration">videoExtractionConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationVideoExtractionConfigurationOutputReference">DataAwsccQbusinessDataSourceMediaExtractionConfigurationVideoExtractionConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfiguration">DataAwsccQbusinessDataSourceMediaExtractionConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `audioExtractionConfiguration`<sup>Required</sup> <a name="audioExtractionConfiguration" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationOutputReference.property.audioExtractionConfiguration"></a>

```typescript
public readonly audioExtractionConfiguration: DataAwsccQbusinessDataSourceMediaExtractionConfigurationAudioExtractionConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationAudioExtractionConfigurationOutputReference">DataAwsccQbusinessDataSourceMediaExtractionConfigurationAudioExtractionConfigurationOutputReference</a>

---

##### `imageExtractionConfiguration`<sup>Required</sup> <a name="imageExtractionConfiguration" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationOutputReference.property.imageExtractionConfiguration"></a>

```typescript
public readonly imageExtractionConfiguration: DataAwsccQbusinessDataSourceMediaExtractionConfigurationImageExtractionConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationImageExtractionConfigurationOutputReference">DataAwsccQbusinessDataSourceMediaExtractionConfigurationImageExtractionConfigurationOutputReference</a>

---

##### `videoExtractionConfiguration`<sup>Required</sup> <a name="videoExtractionConfiguration" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationOutputReference.property.videoExtractionConfiguration"></a>

```typescript
public readonly videoExtractionConfiguration: DataAwsccQbusinessDataSourceMediaExtractionConfigurationVideoExtractionConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationVideoExtractionConfigurationOutputReference">DataAwsccQbusinessDataSourceMediaExtractionConfigurationVideoExtractionConfigurationOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccQbusinessDataSourceMediaExtractionConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfiguration">DataAwsccQbusinessDataSourceMediaExtractionConfiguration</a>

---


### DataAwsccQbusinessDataSourceMediaExtractionConfigurationVideoExtractionConfigurationOutputReference <a name="DataAwsccQbusinessDataSourceMediaExtractionConfigurationVideoExtractionConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationVideoExtractionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.Initializer"></a>

```typescript
import { dataAwsccQbusinessDataSource } from '@cdktn/provider-awscc'

new dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationVideoExtractionConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.property.videoExtractionStatus">videoExtractionStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationVideoExtractionConfiguration">DataAwsccQbusinessDataSourceMediaExtractionConfigurationVideoExtractionConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `videoExtractionStatus`<sup>Required</sup> <a name="videoExtractionStatus" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.property.videoExtractionStatus"></a>

```typescript
public readonly videoExtractionStatus: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccQbusinessDataSourceMediaExtractionConfigurationVideoExtractionConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceMediaExtractionConfigurationVideoExtractionConfiguration">DataAwsccQbusinessDataSourceMediaExtractionConfigurationVideoExtractionConfiguration</a>

---


### DataAwsccQbusinessDataSourceTagsList <a name="DataAwsccQbusinessDataSourceTagsList" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceTagsList.Initializer"></a>

```typescript
import { dataAwsccQbusinessDataSource } from '@cdktn/provider-awscc'

new dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceTagsList.get"></a>

```typescript
public get(index: number): DataAwsccQbusinessDataSourceTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccQbusinessDataSourceTagsOutputReference <a name="DataAwsccQbusinessDataSourceTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceTagsOutputReference.Initializer"></a>

```typescript
import { dataAwsccQbusinessDataSource } from '@cdktn/provider-awscc'

new dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceTags">DataAwsccQbusinessDataSourceTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccQbusinessDataSourceTags;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceTags">DataAwsccQbusinessDataSourceTags</a>

---


### DataAwsccQbusinessDataSourceVpcConfigurationOutputReference <a name="DataAwsccQbusinessDataSourceVpcConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceVpcConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceVpcConfigurationOutputReference.Initializer"></a>

```typescript
import { dataAwsccQbusinessDataSource } from '@cdktn/provider-awscc'

new dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceVpcConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceVpcConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceVpcConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceVpcConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceVpcConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceVpcConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceVpcConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceVpcConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceVpcConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceVpcConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceVpcConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceVpcConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceVpcConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceVpcConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceVpcConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceVpcConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceVpcConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceVpcConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceVpcConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceVpcConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceVpcConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceVpcConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceVpcConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceVpcConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceVpcConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceVpcConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceVpcConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceVpcConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceVpcConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceVpcConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceVpcConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceVpcConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceVpcConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceVpcConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceVpcConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceVpcConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceVpcConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceVpcConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceVpcConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceVpcConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceVpcConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceVpcConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceVpcConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceVpcConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceVpcConfigurationOutputReference.property.securityGroupIds">securityGroupIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceVpcConfigurationOutputReference.property.subnetIds">subnetIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceVpcConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceVpcConfiguration">DataAwsccQbusinessDataSourceVpcConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceVpcConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceVpcConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `securityGroupIds`<sup>Required</sup> <a name="securityGroupIds" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceVpcConfigurationOutputReference.property.securityGroupIds"></a>

```typescript
public readonly securityGroupIds: string[];
```

- *Type:* string[]

---

##### `subnetIds`<sup>Required</sup> <a name="subnetIds" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceVpcConfigurationOutputReference.property.subnetIds"></a>

```typescript
public readonly subnetIds: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceVpcConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccQbusinessDataSourceVpcConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQbusinessDataSource.DataAwsccQbusinessDataSourceVpcConfiguration">DataAwsccQbusinessDataSourceVpcConfiguration</a>

---



