# `dataAwsccInspectorv2CisScanConfiguration` Submodule <a name="`dataAwsccInspectorv2CisScanConfiguration` Submodule" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccInspectorv2CisScanConfiguration <a name="DataAwsccInspectorv2CisScanConfiguration" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/inspectorv2_cis_scan_configuration awscc_inspectorv2_cis_scan_configuration}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.Initializer"></a>

```typescript
import { dataAwsccInspectorv2CisScanConfiguration } from '@cdktn/provider-awscc'

new dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration(scope: Construct, id: string, config: DataAwsccInspectorv2CisScanConfigurationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationConfig">DataAwsccInspectorv2CisScanConfigurationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationConfig">DataAwsccInspectorv2CisScanConfigurationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccInspectorv2CisScanConfiguration resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.isConstruct"></a>

```typescript
import { dataAwsccInspectorv2CisScanConfiguration } from '@cdktn/provider-awscc'

dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.isTerraformElement"></a>

```typescript
import { dataAwsccInspectorv2CisScanConfiguration } from '@cdktn/provider-awscc'

dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.isTerraformDataSource"></a>

```typescript
import { dataAwsccInspectorv2CisScanConfiguration } from '@cdktn/provider-awscc'

dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.generateConfigForImport"></a>

```typescript
import { dataAwsccInspectorv2CisScanConfiguration } from '@cdktn/provider-awscc'

dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccInspectorv2CisScanConfiguration resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccInspectorv2CisScanConfiguration to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccInspectorv2CisScanConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/inspectorv2_cis_scan_configuration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccInspectorv2CisScanConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.property.scanName">scanName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.property.schedule">schedule</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleOutputReference">DataAwsccInspectorv2CisScanConfigurationScheduleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.property.securityLevel">securityLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.property.tags">tags</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.property.targets">targets</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationTargetsOutputReference">DataAwsccInspectorv2CisScanConfigurationTargetsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `scanName`<sup>Required</sup> <a name="scanName" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.property.scanName"></a>

```typescript
public readonly scanName: string;
```

- *Type:* string

---

##### `schedule`<sup>Required</sup> <a name="schedule" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.property.schedule"></a>

```typescript
public readonly schedule: DataAwsccInspectorv2CisScanConfigurationScheduleOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleOutputReference">DataAwsccInspectorv2CisScanConfigurationScheduleOutputReference</a>

---

##### `securityLevel`<sup>Required</sup> <a name="securityLevel" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.property.securityLevel"></a>

```typescript
public readonly securityLevel: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.property.tags"></a>

```typescript
public readonly tags: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `targets`<sup>Required</sup> <a name="targets" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.property.targets"></a>

```typescript
public readonly targets: DataAwsccInspectorv2CisScanConfigurationTargetsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationTargetsOutputReference">DataAwsccInspectorv2CisScanConfigurationTargetsOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccInspectorv2CisScanConfigurationConfig <a name="DataAwsccInspectorv2CisScanConfigurationConfig" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationConfig.Initializer"></a>

```typescript
import { dataAwsccInspectorv2CisScanConfiguration } from '@cdktn/provider-awscc'

const dataAwsccInspectorv2CisScanConfigurationConfig: dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/inspectorv2_cis_scan_configuration#id DataAwsccInspectorv2CisScanConfiguration#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccInspectorv2CisScanConfigurationSchedule <a name="DataAwsccInspectorv2CisScanConfigurationSchedule" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationSchedule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationSchedule.Initializer"></a>

```typescript
import { dataAwsccInspectorv2CisScanConfiguration } from '@cdktn/provider-awscc'

const dataAwsccInspectorv2CisScanConfigurationSchedule: dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationSchedule = { ... }
```


### DataAwsccInspectorv2CisScanConfigurationScheduleDaily <a name="DataAwsccInspectorv2CisScanConfigurationScheduleDaily" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDaily"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDaily.Initializer"></a>

```typescript
import { dataAwsccInspectorv2CisScanConfiguration } from '@cdktn/provider-awscc'

const dataAwsccInspectorv2CisScanConfigurationScheduleDaily: dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDaily = { ... }
```


### DataAwsccInspectorv2CisScanConfigurationScheduleDailyStartTime <a name="DataAwsccInspectorv2CisScanConfigurationScheduleDailyStartTime" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyStartTime"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyStartTime.Initializer"></a>

```typescript
import { dataAwsccInspectorv2CisScanConfiguration } from '@cdktn/provider-awscc'

const dataAwsccInspectorv2CisScanConfigurationScheduleDailyStartTime: dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyStartTime = { ... }
```


### DataAwsccInspectorv2CisScanConfigurationScheduleMonthly <a name="DataAwsccInspectorv2CisScanConfigurationScheduleMonthly" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthly"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthly.Initializer"></a>

```typescript
import { dataAwsccInspectorv2CisScanConfiguration } from '@cdktn/provider-awscc'

const dataAwsccInspectorv2CisScanConfigurationScheduleMonthly: dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthly = { ... }
```


### DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyStartTime <a name="DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyStartTime" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyStartTime"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyStartTime.Initializer"></a>

```typescript
import { dataAwsccInspectorv2CisScanConfiguration } from '@cdktn/provider-awscc'

const dataAwsccInspectorv2CisScanConfigurationScheduleMonthlyStartTime: dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyStartTime = { ... }
```


### DataAwsccInspectorv2CisScanConfigurationScheduleWeekly <a name="DataAwsccInspectorv2CisScanConfigurationScheduleWeekly" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeekly"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeekly.Initializer"></a>

```typescript
import { dataAwsccInspectorv2CisScanConfiguration } from '@cdktn/provider-awscc'

const dataAwsccInspectorv2CisScanConfigurationScheduleWeekly: dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeekly = { ... }
```


### DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyStartTime <a name="DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyStartTime" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyStartTime"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyStartTime.Initializer"></a>

```typescript
import { dataAwsccInspectorv2CisScanConfiguration } from '@cdktn/provider-awscc'

const dataAwsccInspectorv2CisScanConfigurationScheduleWeeklyStartTime: dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyStartTime = { ... }
```


### DataAwsccInspectorv2CisScanConfigurationTargets <a name="DataAwsccInspectorv2CisScanConfigurationTargets" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationTargets"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationTargets.Initializer"></a>

```typescript
import { dataAwsccInspectorv2CisScanConfiguration } from '@cdktn/provider-awscc'

const dataAwsccInspectorv2CisScanConfigurationTargets: dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationTargets = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccInspectorv2CisScanConfigurationScheduleDailyOutputReference <a name="DataAwsccInspectorv2CisScanConfigurationScheduleDailyOutputReference" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyOutputReference.Initializer"></a>

```typescript
import { dataAwsccInspectorv2CisScanConfiguration } from '@cdktn/provider-awscc'

new dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyOutputReference.property.startTime">startTime</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference">DataAwsccInspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDaily">DataAwsccInspectorv2CisScanConfigurationScheduleDaily</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `startTime`<sup>Required</sup> <a name="startTime" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyOutputReference.property.startTime"></a>

```typescript
public readonly startTime: DataAwsccInspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference">DataAwsccInspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccInspectorv2CisScanConfigurationScheduleDaily;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDaily">DataAwsccInspectorv2CisScanConfigurationScheduleDaily</a>

---


### DataAwsccInspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference <a name="DataAwsccInspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.Initializer"></a>

```typescript
import { dataAwsccInspectorv2CisScanConfiguration } from '@cdktn/provider-awscc'

new dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.property.timeOfDay">timeOfDay</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.property.timeZone">timeZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyStartTime">DataAwsccInspectorv2CisScanConfigurationScheduleDailyStartTime</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `timeOfDay`<sup>Required</sup> <a name="timeOfDay" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.property.timeOfDay"></a>

```typescript
public readonly timeOfDay: string;
```

- *Type:* string

---

##### `timeZone`<sup>Required</sup> <a name="timeZone" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.property.timeZone"></a>

```typescript
public readonly timeZone: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccInspectorv2CisScanConfigurationScheduleDailyStartTime;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyStartTime">DataAwsccInspectorv2CisScanConfigurationScheduleDailyStartTime</a>

---


### DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyOutputReference <a name="DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyOutputReference" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyOutputReference.Initializer"></a>

```typescript
import { dataAwsccInspectorv2CisScanConfiguration } from '@cdktn/provider-awscc'

new dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyOutputReference.property.day">day</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyOutputReference.property.startTime">startTime</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference">DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthly">DataAwsccInspectorv2CisScanConfigurationScheduleMonthly</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `day`<sup>Required</sup> <a name="day" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyOutputReference.property.day"></a>

```typescript
public readonly day: string;
```

- *Type:* string

---

##### `startTime`<sup>Required</sup> <a name="startTime" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyOutputReference.property.startTime"></a>

```typescript
public readonly startTime: DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference">DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccInspectorv2CisScanConfigurationScheduleMonthly;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthly">DataAwsccInspectorv2CisScanConfigurationScheduleMonthly</a>

---


### DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference <a name="DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.Initializer"></a>

```typescript
import { dataAwsccInspectorv2CisScanConfiguration } from '@cdktn/provider-awscc'

new dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.property.timeOfDay">timeOfDay</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.property.timeZone">timeZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyStartTime">DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyStartTime</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `timeOfDay`<sup>Required</sup> <a name="timeOfDay" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.property.timeOfDay"></a>

```typescript
public readonly timeOfDay: string;
```

- *Type:* string

---

##### `timeZone`<sup>Required</sup> <a name="timeZone" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.property.timeZone"></a>

```typescript
public readonly timeZone: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyStartTime;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyStartTime">DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyStartTime</a>

---


### DataAwsccInspectorv2CisScanConfigurationScheduleOutputReference <a name="DataAwsccInspectorv2CisScanConfigurationScheduleOutputReference" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleOutputReference.Initializer"></a>

```typescript
import { dataAwsccInspectorv2CisScanConfiguration } from '@cdktn/provider-awscc'

new dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleOutputReference.property.daily">daily</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyOutputReference">DataAwsccInspectorv2CisScanConfigurationScheduleDailyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleOutputReference.property.monthly">monthly</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyOutputReference">DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleOutputReference.property.oneTime">oneTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleOutputReference.property.weekly">weekly</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyOutputReference">DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationSchedule">DataAwsccInspectorv2CisScanConfigurationSchedule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `daily`<sup>Required</sup> <a name="daily" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleOutputReference.property.daily"></a>

```typescript
public readonly daily: DataAwsccInspectorv2CisScanConfigurationScheduleDailyOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyOutputReference">DataAwsccInspectorv2CisScanConfigurationScheduleDailyOutputReference</a>

---

##### `monthly`<sup>Required</sup> <a name="monthly" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleOutputReference.property.monthly"></a>

```typescript
public readonly monthly: DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyOutputReference">DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyOutputReference</a>

---

##### `oneTime`<sup>Required</sup> <a name="oneTime" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleOutputReference.property.oneTime"></a>

```typescript
public readonly oneTime: string;
```

- *Type:* string

---

##### `weekly`<sup>Required</sup> <a name="weekly" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleOutputReference.property.weekly"></a>

```typescript
public readonly weekly: DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyOutputReference">DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccInspectorv2CisScanConfigurationSchedule;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationSchedule">DataAwsccInspectorv2CisScanConfigurationSchedule</a>

---


### DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyOutputReference <a name="DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyOutputReference" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyOutputReference.Initializer"></a>

```typescript
import { dataAwsccInspectorv2CisScanConfiguration } from '@cdktn/provider-awscc'

new dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyOutputReference.property.days">days</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyOutputReference.property.startTime">startTime</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference">DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeekly">DataAwsccInspectorv2CisScanConfigurationScheduleWeekly</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `days`<sup>Required</sup> <a name="days" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyOutputReference.property.days"></a>

```typescript
public readonly days: string[];
```

- *Type:* string[]

---

##### `startTime`<sup>Required</sup> <a name="startTime" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyOutputReference.property.startTime"></a>

```typescript
public readonly startTime: DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference">DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccInspectorv2CisScanConfigurationScheduleWeekly;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeekly">DataAwsccInspectorv2CisScanConfigurationScheduleWeekly</a>

---


### DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference <a name="DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.Initializer"></a>

```typescript
import { dataAwsccInspectorv2CisScanConfiguration } from '@cdktn/provider-awscc'

new dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.property.timeOfDay">timeOfDay</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.property.timeZone">timeZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyStartTime">DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyStartTime</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `timeOfDay`<sup>Required</sup> <a name="timeOfDay" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.property.timeOfDay"></a>

```typescript
public readonly timeOfDay: string;
```

- *Type:* string

---

##### `timeZone`<sup>Required</sup> <a name="timeZone" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.property.timeZone"></a>

```typescript
public readonly timeZone: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyStartTime;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyStartTime">DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyStartTime</a>

---


### DataAwsccInspectorv2CisScanConfigurationTargetsOutputReference <a name="DataAwsccInspectorv2CisScanConfigurationTargetsOutputReference" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationTargetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationTargetsOutputReference.Initializer"></a>

```typescript
import { dataAwsccInspectorv2CisScanConfiguration } from '@cdktn/provider-awscc'

new dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationTargetsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationTargetsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationTargetsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationTargetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationTargetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationTargetsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationTargetsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationTargetsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationTargetsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationTargetsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationTargetsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationTargetsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationTargetsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationTargetsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationTargetsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationTargetsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationTargetsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationTargetsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationTargetsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationTargetsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationTargetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationTargetsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationTargetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationTargetsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationTargetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationTargetsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationTargetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationTargetsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationTargetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationTargetsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationTargetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationTargetsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationTargetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationTargetsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationTargetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationTargetsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationTargetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationTargetsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationTargetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationTargetsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationTargetsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationTargetsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationTargetsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationTargetsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationTargetsOutputReference.property.accountIds">accountIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationTargetsOutputReference.property.targetResourceTags">targetResourceTags</a></code> | <code>cdktn.StringListMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationTargetsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationTargets">DataAwsccInspectorv2CisScanConfigurationTargets</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationTargetsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationTargetsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `accountIds`<sup>Required</sup> <a name="accountIds" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationTargetsOutputReference.property.accountIds"></a>

```typescript
public readonly accountIds: string[];
```

- *Type:* string[]

---

##### `targetResourceTags`<sup>Required</sup> <a name="targetResourceTags" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationTargetsOutputReference.property.targetResourceTags"></a>

```typescript
public readonly targetResourceTags: StringListMap;
```

- *Type:* cdktn.StringListMap

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationTargetsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccInspectorv2CisScanConfigurationTargets;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationTargets">DataAwsccInspectorv2CisScanConfigurationTargets</a>

---



