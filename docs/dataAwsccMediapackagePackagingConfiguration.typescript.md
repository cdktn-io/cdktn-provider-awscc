# `dataAwsccMediapackagePackagingConfiguration` Submodule <a name="`dataAwsccMediapackagePackagingConfiguration` Submodule" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccMediapackagePackagingConfiguration <a name="DataAwsccMediapackagePackagingConfiguration" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/mediapackage_packaging_configuration awscc_mediapackage_packaging_configuration}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfiguration.Initializer"></a>

```typescript
import { dataAwsccMediapackagePackagingConfiguration } from '@cdktn/provider-awscc'

new dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfiguration(scope: Construct, id: string, config: DataAwsccMediapackagePackagingConfigurationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfiguration.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfiguration.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfiguration.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationConfig">DataAwsccMediapackagePackagingConfigurationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfiguration.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfiguration.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfiguration.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationConfig">DataAwsccMediapackagePackagingConfigurationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfiguration.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfiguration.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfiguration.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfiguration.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfiguration.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfiguration.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfiguration.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfiguration.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfiguration.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfiguration.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfiguration.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfiguration.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfiguration.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfiguration.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfiguration.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfiguration.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfiguration.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfiguration.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfiguration.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfiguration.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfiguration.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfiguration.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfiguration.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfiguration.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfiguration.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfiguration.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfiguration.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfiguration.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfiguration.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfiguration.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfiguration.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfiguration.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfiguration.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfiguration.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfiguration.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfiguration.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfiguration.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfiguration.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfiguration.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfiguration.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfiguration.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfiguration.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfiguration.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccMediapackagePackagingConfiguration resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfiguration.isConstruct"></a>

```typescript
import { dataAwsccMediapackagePackagingConfiguration } from '@cdktn/provider-awscc'

dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfiguration.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfiguration.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfiguration.isTerraformElement"></a>

```typescript
import { dataAwsccMediapackagePackagingConfiguration } from '@cdktn/provider-awscc'

dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfiguration.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfiguration.isTerraformDataSource"></a>

```typescript
import { dataAwsccMediapackagePackagingConfiguration } from '@cdktn/provider-awscc'

dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfiguration.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfiguration.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfiguration.generateConfigForImport"></a>

```typescript
import { dataAwsccMediapackagePackagingConfiguration } from '@cdktn/provider-awscc'

dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfiguration.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccMediapackagePackagingConfiguration resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccMediapackagePackagingConfiguration to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccMediapackagePackagingConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/mediapackage_packaging_configuration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccMediapackagePackagingConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfiguration.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfiguration.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfiguration.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfiguration.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfiguration.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfiguration.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfiguration.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfiguration.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfiguration.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfiguration.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfiguration.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfiguration.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfiguration.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfiguration.property.cmafPackage">cmafPackage</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageOutputReference">DataAwsccMediapackagePackagingConfigurationCmafPackageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfiguration.property.dashPackage">dashPackage</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageOutputReference">DataAwsccMediapackagePackagingConfigurationDashPackageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfiguration.property.hlsPackage">hlsPackage</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageOutputReference">DataAwsccMediapackagePackagingConfigurationHlsPackageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfiguration.property.mssPackage">mssPackage</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageOutputReference">DataAwsccMediapackagePackagingConfigurationMssPackageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfiguration.property.packagingConfigurationId">packagingConfigurationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfiguration.property.packagingGroupId">packagingGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfiguration.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationTagsList">DataAwsccMediapackagePackagingConfigurationTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfiguration.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfiguration.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfiguration.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfiguration.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfiguration.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfiguration.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfiguration.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfiguration.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfiguration.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfiguration.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfiguration.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfiguration.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfiguration.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfiguration.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfiguration.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `cmafPackage`<sup>Required</sup> <a name="cmafPackage" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfiguration.property.cmafPackage"></a>

```typescript
public readonly cmafPackage: DataAwsccMediapackagePackagingConfigurationCmafPackageOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageOutputReference">DataAwsccMediapackagePackagingConfigurationCmafPackageOutputReference</a>

---

##### `dashPackage`<sup>Required</sup> <a name="dashPackage" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfiguration.property.dashPackage"></a>

```typescript
public readonly dashPackage: DataAwsccMediapackagePackagingConfigurationDashPackageOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageOutputReference">DataAwsccMediapackagePackagingConfigurationDashPackageOutputReference</a>

---

##### `hlsPackage`<sup>Required</sup> <a name="hlsPackage" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfiguration.property.hlsPackage"></a>

```typescript
public readonly hlsPackage: DataAwsccMediapackagePackagingConfigurationHlsPackageOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageOutputReference">DataAwsccMediapackagePackagingConfigurationHlsPackageOutputReference</a>

---

##### `mssPackage`<sup>Required</sup> <a name="mssPackage" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfiguration.property.mssPackage"></a>

```typescript
public readonly mssPackage: DataAwsccMediapackagePackagingConfigurationMssPackageOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageOutputReference">DataAwsccMediapackagePackagingConfigurationMssPackageOutputReference</a>

---

##### `packagingConfigurationId`<sup>Required</sup> <a name="packagingConfigurationId" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfiguration.property.packagingConfigurationId"></a>

```typescript
public readonly packagingConfigurationId: string;
```

- *Type:* string

---

##### `packagingGroupId`<sup>Required</sup> <a name="packagingGroupId" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfiguration.property.packagingGroupId"></a>

```typescript
public readonly packagingGroupId: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfiguration.property.tags"></a>

```typescript
public readonly tags: DataAwsccMediapackagePackagingConfigurationTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationTagsList">DataAwsccMediapackagePackagingConfigurationTagsList</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfiguration.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfiguration.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfiguration.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfiguration.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccMediapackagePackagingConfigurationCmafPackage <a name="DataAwsccMediapackagePackagingConfigurationCmafPackage" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackage"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackage.Initializer"></a>

```typescript
import { dataAwsccMediapackagePackagingConfiguration } from '@cdktn/provider-awscc'

const dataAwsccMediapackagePackagingConfigurationCmafPackage: dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackage = { ... }
```


### DataAwsccMediapackagePackagingConfigurationCmafPackageEncryption <a name="DataAwsccMediapackagePackagingConfigurationCmafPackageEncryption" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryption"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryption.Initializer"></a>

```typescript
import { dataAwsccMediapackagePackagingConfiguration } from '@cdktn/provider-awscc'

const dataAwsccMediapackagePackagingConfigurationCmafPackageEncryption: dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryption = { ... }
```


### DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProvider <a name="DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProvider" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProvider"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProvider.Initializer"></a>

```typescript
import { dataAwsccMediapackagePackagingConfiguration } from '@cdktn/provider-awscc'

const dataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProvider: dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProvider = { ... }
```


### DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration <a name="DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration.Initializer"></a>

```typescript
import { dataAwsccMediapackagePackagingConfiguration } from '@cdktn/provider-awscc'

const dataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration: dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration = { ... }
```


### DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifests <a name="DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifests" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifests"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifests.Initializer"></a>

```typescript
import { dataAwsccMediapackagePackagingConfiguration } from '@cdktn/provider-awscc'

const dataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifests: dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifests = { ... }
```


### DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelection <a name="DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelection" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelection"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelection.Initializer"></a>

```typescript
import { dataAwsccMediapackagePackagingConfiguration } from '@cdktn/provider-awscc'

const dataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelection: dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelection = { ... }
```


### DataAwsccMediapackagePackagingConfigurationConfig <a name="DataAwsccMediapackagePackagingConfigurationConfig" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationConfig.Initializer"></a>

```typescript
import { dataAwsccMediapackagePackagingConfiguration } from '@cdktn/provider-awscc'

const dataAwsccMediapackagePackagingConfigurationConfig: dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/mediapackage_packaging_configuration#id DataAwsccMediapackagePackagingConfiguration#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccMediapackagePackagingConfigurationDashPackage <a name="DataAwsccMediapackagePackagingConfigurationDashPackage" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackage"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackage.Initializer"></a>

```typescript
import { dataAwsccMediapackagePackagingConfiguration } from '@cdktn/provider-awscc'

const dataAwsccMediapackagePackagingConfigurationDashPackage: dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackage = { ... }
```


### DataAwsccMediapackagePackagingConfigurationDashPackageDashManifests <a name="DataAwsccMediapackagePackagingConfigurationDashPackageDashManifests" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifests"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifests.Initializer"></a>

```typescript
import { dataAwsccMediapackagePackagingConfiguration } from '@cdktn/provider-awscc'

const dataAwsccMediapackagePackagingConfigurationDashPackageDashManifests: dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifests = { ... }
```


### DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsStreamSelection <a name="DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsStreamSelection" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsStreamSelection"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsStreamSelection.Initializer"></a>

```typescript
import { dataAwsccMediapackagePackagingConfiguration } from '@cdktn/provider-awscc'

const dataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsStreamSelection: dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsStreamSelection = { ... }
```


### DataAwsccMediapackagePackagingConfigurationDashPackageEncryption <a name="DataAwsccMediapackagePackagingConfigurationDashPackageEncryption" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryption"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryption.Initializer"></a>

```typescript
import { dataAwsccMediapackagePackagingConfiguration } from '@cdktn/provider-awscc'

const dataAwsccMediapackagePackagingConfigurationDashPackageEncryption: dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryption = { ... }
```


### DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProvider <a name="DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProvider" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProvider"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProvider.Initializer"></a>

```typescript
import { dataAwsccMediapackagePackagingConfiguration } from '@cdktn/provider-awscc'

const dataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProvider: dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProvider = { ... }
```


### DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration <a name="DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration.Initializer"></a>

```typescript
import { dataAwsccMediapackagePackagingConfiguration } from '@cdktn/provider-awscc'

const dataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration: dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration = { ... }
```


### DataAwsccMediapackagePackagingConfigurationHlsPackage <a name="DataAwsccMediapackagePackagingConfigurationHlsPackage" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackage"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackage.Initializer"></a>

```typescript
import { dataAwsccMediapackagePackagingConfiguration } from '@cdktn/provider-awscc'

const dataAwsccMediapackagePackagingConfigurationHlsPackage: dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackage = { ... }
```


### DataAwsccMediapackagePackagingConfigurationHlsPackageEncryption <a name="DataAwsccMediapackagePackagingConfigurationHlsPackageEncryption" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryption"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryption.Initializer"></a>

```typescript
import { dataAwsccMediapackagePackagingConfiguration } from '@cdktn/provider-awscc'

const dataAwsccMediapackagePackagingConfigurationHlsPackageEncryption: dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryption = { ... }
```


### DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProvider <a name="DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProvider" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProvider"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProvider.Initializer"></a>

```typescript
import { dataAwsccMediapackagePackagingConfiguration } from '@cdktn/provider-awscc'

const dataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProvider: dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProvider = { ... }
```


### DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration <a name="DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration.Initializer"></a>

```typescript
import { dataAwsccMediapackagePackagingConfiguration } from '@cdktn/provider-awscc'

const dataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration: dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration = { ... }
```


### DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifests <a name="DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifests" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifests"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifests.Initializer"></a>

```typescript
import { dataAwsccMediapackagePackagingConfiguration } from '@cdktn/provider-awscc'

const dataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifests: dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifests = { ... }
```


### DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelection <a name="DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelection" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelection"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelection.Initializer"></a>

```typescript
import { dataAwsccMediapackagePackagingConfiguration } from '@cdktn/provider-awscc'

const dataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelection: dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelection = { ... }
```


### DataAwsccMediapackagePackagingConfigurationMssPackage <a name="DataAwsccMediapackagePackagingConfigurationMssPackage" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackage"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackage.Initializer"></a>

```typescript
import { dataAwsccMediapackagePackagingConfiguration } from '@cdktn/provider-awscc'

const dataAwsccMediapackagePackagingConfigurationMssPackage: dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackage = { ... }
```


### DataAwsccMediapackagePackagingConfigurationMssPackageEncryption <a name="DataAwsccMediapackagePackagingConfigurationMssPackageEncryption" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryption"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryption.Initializer"></a>

```typescript
import { dataAwsccMediapackagePackagingConfiguration } from '@cdktn/provider-awscc'

const dataAwsccMediapackagePackagingConfigurationMssPackageEncryption: dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryption = { ... }
```


### DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProvider <a name="DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProvider" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProvider"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProvider.Initializer"></a>

```typescript
import { dataAwsccMediapackagePackagingConfiguration } from '@cdktn/provider-awscc'

const dataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProvider: dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProvider = { ... }
```


### DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration <a name="DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration.Initializer"></a>

```typescript
import { dataAwsccMediapackagePackagingConfiguration } from '@cdktn/provider-awscc'

const dataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration: dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration = { ... }
```


### DataAwsccMediapackagePackagingConfigurationMssPackageMssManifests <a name="DataAwsccMediapackagePackagingConfigurationMssPackageMssManifests" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifests"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifests.Initializer"></a>

```typescript
import { dataAwsccMediapackagePackagingConfiguration } from '@cdktn/provider-awscc'

const dataAwsccMediapackagePackagingConfigurationMssPackageMssManifests: dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifests = { ... }
```


### DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsStreamSelection <a name="DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsStreamSelection" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsStreamSelection"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsStreamSelection.Initializer"></a>

```typescript
import { dataAwsccMediapackagePackagingConfiguration } from '@cdktn/provider-awscc'

const dataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsStreamSelection: dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsStreamSelection = { ... }
```


### DataAwsccMediapackagePackagingConfigurationTags <a name="DataAwsccMediapackagePackagingConfigurationTags" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationTags.Initializer"></a>

```typescript
import { dataAwsccMediapackagePackagingConfiguration } from '@cdktn/provider-awscc'

const dataAwsccMediapackagePackagingConfigurationTags: dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationTags = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionOutputReference <a name="DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionOutputReference" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionOutputReference.Initializer"></a>

```typescript
import { dataAwsccMediapackagePackagingConfiguration } from '@cdktn/provider-awscc'

new dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionOutputReference.property.spekeKeyProvider">spekeKeyProvider</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference">DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryption">DataAwsccMediapackagePackagingConfigurationCmafPackageEncryption</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `spekeKeyProvider`<sup>Required</sup> <a name="spekeKeyProvider" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionOutputReference.property.spekeKeyProvider"></a>

```typescript
public readonly spekeKeyProvider: DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference">DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccMediapackagePackagingConfigurationCmafPackageEncryption;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryption">DataAwsccMediapackagePackagingConfigurationCmafPackageEncryption</a>

---


### DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference <a name="DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.Initializer"></a>

```typescript
import { dataAwsccMediapackagePackagingConfiguration } from '@cdktn/provider-awscc'

new dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.property.presetSpeke20Audio">presetSpeke20Audio</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.property.presetSpeke20Video">presetSpeke20Video</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration">DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `presetSpeke20Audio`<sup>Required</sup> <a name="presetSpeke20Audio" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.property.presetSpeke20Audio"></a>

```typescript
public readonly presetSpeke20Audio: string;
```

- *Type:* string

---

##### `presetSpeke20Video`<sup>Required</sup> <a name="presetSpeke20Video" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.property.presetSpeke20Video"></a>

```typescript
public readonly presetSpeke20Video: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration">DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration</a>

---


### DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference <a name="DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference.Initializer"></a>

```typescript
import { dataAwsccMediapackagePackagingConfiguration } from '@cdktn/provider-awscc'

new dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference.property.encryptionContractConfiguration">encryptionContractConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference">DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference.property.roleArn">roleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference.property.systemIds">systemIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference.property.url">url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProvider">DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProvider</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `encryptionContractConfiguration`<sup>Required</sup> <a name="encryptionContractConfiguration" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference.property.encryptionContractConfiguration"></a>

```typescript
public readonly encryptionContractConfiguration: DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference">DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference</a>

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

---

##### `systemIds`<sup>Required</sup> <a name="systemIds" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference.property.systemIds"></a>

```typescript
public readonly systemIds: string[];
```

- *Type:* string[]

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProvider;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProvider">DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProvider</a>

---


### DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsList <a name="DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsList" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsList.Initializer"></a>

```typescript
import { dataAwsccMediapackagePackagingConfiguration } from '@cdktn/provider-awscc'

new dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsList.get"></a>

```typescript
public get(index: number): DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference <a name="DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.Initializer"></a>

```typescript
import { dataAwsccMediapackagePackagingConfiguration } from '@cdktn/provider-awscc'

new dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.property.adMarkers">adMarkers</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.property.includeIframeOnlyStream">includeIframeOnlyStream</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.property.manifestName">manifestName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.property.programDateTimeIntervalSeconds">programDateTimeIntervalSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.property.repeatExtXKey">repeatExtXKey</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.property.streamSelection">streamSelection</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionOutputReference">DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifests">DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifests</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `adMarkers`<sup>Required</sup> <a name="adMarkers" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.property.adMarkers"></a>

```typescript
public readonly adMarkers: string;
```

- *Type:* string

---

##### `includeIframeOnlyStream`<sup>Required</sup> <a name="includeIframeOnlyStream" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.property.includeIframeOnlyStream"></a>

```typescript
public readonly includeIframeOnlyStream: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `manifestName`<sup>Required</sup> <a name="manifestName" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.property.manifestName"></a>

```typescript
public readonly manifestName: string;
```

- *Type:* string

---

##### `programDateTimeIntervalSeconds`<sup>Required</sup> <a name="programDateTimeIntervalSeconds" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.property.programDateTimeIntervalSeconds"></a>

```typescript
public readonly programDateTimeIntervalSeconds: number;
```

- *Type:* number

---

##### `repeatExtXKey`<sup>Required</sup> <a name="repeatExtXKey" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.property.repeatExtXKey"></a>

```typescript
public readonly repeatExtXKey: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `streamSelection`<sup>Required</sup> <a name="streamSelection" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.property.streamSelection"></a>

```typescript
public readonly streamSelection: DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionOutputReference">DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifests;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifests">DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifests</a>

---


### DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionOutputReference <a name="DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionOutputReference" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionOutputReference.Initializer"></a>

```typescript
import { dataAwsccMediapackagePackagingConfiguration } from '@cdktn/provider-awscc'

new dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionOutputReference.property.maxVideoBitsPerSecond">maxVideoBitsPerSecond</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionOutputReference.property.minVideoBitsPerSecond">minVideoBitsPerSecond</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionOutputReference.property.streamOrder">streamOrder</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelection">DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `maxVideoBitsPerSecond`<sup>Required</sup> <a name="maxVideoBitsPerSecond" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionOutputReference.property.maxVideoBitsPerSecond"></a>

```typescript
public readonly maxVideoBitsPerSecond: number;
```

- *Type:* number

---

##### `minVideoBitsPerSecond`<sup>Required</sup> <a name="minVideoBitsPerSecond" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionOutputReference.property.minVideoBitsPerSecond"></a>

```typescript
public readonly minVideoBitsPerSecond: number;
```

- *Type:* number

---

##### `streamOrder`<sup>Required</sup> <a name="streamOrder" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionOutputReference.property.streamOrder"></a>

```typescript
public readonly streamOrder: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelection;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelection">DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelection</a>

---


### DataAwsccMediapackagePackagingConfigurationCmafPackageOutputReference <a name="DataAwsccMediapackagePackagingConfigurationCmafPackageOutputReference" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageOutputReference.Initializer"></a>

```typescript
import { dataAwsccMediapackagePackagingConfiguration } from '@cdktn/provider-awscc'

new dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageOutputReference.property.encryption">encryption</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionOutputReference">DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageOutputReference.property.hlsManifests">hlsManifests</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsList">DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageOutputReference.property.includeEncoderConfigurationInSegments">includeEncoderConfigurationInSegments</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageOutputReference.property.segmentDurationSeconds">segmentDurationSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackage">DataAwsccMediapackagePackagingConfigurationCmafPackage</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `encryption`<sup>Required</sup> <a name="encryption" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageOutputReference.property.encryption"></a>

```typescript
public readonly encryption: DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionOutputReference">DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionOutputReference</a>

---

##### `hlsManifests`<sup>Required</sup> <a name="hlsManifests" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageOutputReference.property.hlsManifests"></a>

```typescript
public readonly hlsManifests: DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsList">DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsList</a>

---

##### `includeEncoderConfigurationInSegments`<sup>Required</sup> <a name="includeEncoderConfigurationInSegments" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageOutputReference.property.includeEncoderConfigurationInSegments"></a>

```typescript
public readonly includeEncoderConfigurationInSegments: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `segmentDurationSeconds`<sup>Required</sup> <a name="segmentDurationSeconds" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageOutputReference.property.segmentDurationSeconds"></a>

```typescript
public readonly segmentDurationSeconds: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackageOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccMediapackagePackagingConfigurationCmafPackage;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationCmafPackage">DataAwsccMediapackagePackagingConfigurationCmafPackage</a>

---


### DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsList <a name="DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsList" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsList.Initializer"></a>

```typescript
import { dataAwsccMediapackagePackagingConfiguration } from '@cdktn/provider-awscc'

new dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsList.get"></a>

```typescript
public get(index: number): DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsOutputReference <a name="DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsOutputReference" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.Initializer"></a>

```typescript
import { dataAwsccMediapackagePackagingConfiguration } from '@cdktn/provider-awscc'

new dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.property.manifestLayout">manifestLayout</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.property.manifestName">manifestName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.property.minBufferTimeSeconds">minBufferTimeSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.property.profile">profile</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.property.scteMarkersSource">scteMarkersSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.property.streamSelection">streamSelection</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionOutputReference">DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifests">DataAwsccMediapackagePackagingConfigurationDashPackageDashManifests</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `manifestLayout`<sup>Required</sup> <a name="manifestLayout" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.property.manifestLayout"></a>

```typescript
public readonly manifestLayout: string;
```

- *Type:* string

---

##### `manifestName`<sup>Required</sup> <a name="manifestName" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.property.manifestName"></a>

```typescript
public readonly manifestName: string;
```

- *Type:* string

---

##### `minBufferTimeSeconds`<sup>Required</sup> <a name="minBufferTimeSeconds" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.property.minBufferTimeSeconds"></a>

```typescript
public readonly minBufferTimeSeconds: number;
```

- *Type:* number

---

##### `profile`<sup>Required</sup> <a name="profile" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.property.profile"></a>

```typescript
public readonly profile: string;
```

- *Type:* string

---

##### `scteMarkersSource`<sup>Required</sup> <a name="scteMarkersSource" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.property.scteMarkersSource"></a>

```typescript
public readonly scteMarkersSource: string;
```

- *Type:* string

---

##### `streamSelection`<sup>Required</sup> <a name="streamSelection" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.property.streamSelection"></a>

```typescript
public readonly streamSelection: DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionOutputReference">DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccMediapackagePackagingConfigurationDashPackageDashManifests;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifests">DataAwsccMediapackagePackagingConfigurationDashPackageDashManifests</a>

---


### DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionOutputReference <a name="DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionOutputReference" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionOutputReference.Initializer"></a>

```typescript
import { dataAwsccMediapackagePackagingConfiguration } from '@cdktn/provider-awscc'

new dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionOutputReference.property.maxVideoBitsPerSecond">maxVideoBitsPerSecond</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionOutputReference.property.minVideoBitsPerSecond">minVideoBitsPerSecond</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionOutputReference.property.streamOrder">streamOrder</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsStreamSelection">DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsStreamSelection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `maxVideoBitsPerSecond`<sup>Required</sup> <a name="maxVideoBitsPerSecond" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionOutputReference.property.maxVideoBitsPerSecond"></a>

```typescript
public readonly maxVideoBitsPerSecond: number;
```

- *Type:* number

---

##### `minVideoBitsPerSecond`<sup>Required</sup> <a name="minVideoBitsPerSecond" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionOutputReference.property.minVideoBitsPerSecond"></a>

```typescript
public readonly minVideoBitsPerSecond: number;
```

- *Type:* number

---

##### `streamOrder`<sup>Required</sup> <a name="streamOrder" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionOutputReference.property.streamOrder"></a>

```typescript
public readonly streamOrder: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsStreamSelection;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsStreamSelection">DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsStreamSelection</a>

---


### DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionOutputReference <a name="DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionOutputReference" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionOutputReference.Initializer"></a>

```typescript
import { dataAwsccMediapackagePackagingConfiguration } from '@cdktn/provider-awscc'

new dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionOutputReference.property.spekeKeyProvider">spekeKeyProvider</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference">DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryption">DataAwsccMediapackagePackagingConfigurationDashPackageEncryption</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `spekeKeyProvider`<sup>Required</sup> <a name="spekeKeyProvider" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionOutputReference.property.spekeKeyProvider"></a>

```typescript
public readonly spekeKeyProvider: DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference">DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccMediapackagePackagingConfigurationDashPackageEncryption;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryption">DataAwsccMediapackagePackagingConfigurationDashPackageEncryption</a>

---


### DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference <a name="DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.Initializer"></a>

```typescript
import { dataAwsccMediapackagePackagingConfiguration } from '@cdktn/provider-awscc'

new dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.property.presetSpeke20Audio">presetSpeke20Audio</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.property.presetSpeke20Video">presetSpeke20Video</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration">DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `presetSpeke20Audio`<sup>Required</sup> <a name="presetSpeke20Audio" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.property.presetSpeke20Audio"></a>

```typescript
public readonly presetSpeke20Audio: string;
```

- *Type:* string

---

##### `presetSpeke20Video`<sup>Required</sup> <a name="presetSpeke20Video" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.property.presetSpeke20Video"></a>

```typescript
public readonly presetSpeke20Video: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration">DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration</a>

---


### DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference <a name="DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference.Initializer"></a>

```typescript
import { dataAwsccMediapackagePackagingConfiguration } from '@cdktn/provider-awscc'

new dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference.property.encryptionContractConfiguration">encryptionContractConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference">DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference.property.roleArn">roleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference.property.systemIds">systemIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference.property.url">url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProvider">DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProvider</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `encryptionContractConfiguration`<sup>Required</sup> <a name="encryptionContractConfiguration" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference.property.encryptionContractConfiguration"></a>

```typescript
public readonly encryptionContractConfiguration: DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference">DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference</a>

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

---

##### `systemIds`<sup>Required</sup> <a name="systemIds" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference.property.systemIds"></a>

```typescript
public readonly systemIds: string[];
```

- *Type:* string[]

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProvider;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProvider">DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProvider</a>

---


### DataAwsccMediapackagePackagingConfigurationDashPackageOutputReference <a name="DataAwsccMediapackagePackagingConfigurationDashPackageOutputReference" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageOutputReference.Initializer"></a>

```typescript
import { dataAwsccMediapackagePackagingConfiguration } from '@cdktn/provider-awscc'

new dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageOutputReference.property.dashManifests">dashManifests</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsList">DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageOutputReference.property.encryption">encryption</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionOutputReference">DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageOutputReference.property.includeEncoderConfigurationInSegments">includeEncoderConfigurationInSegments</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageOutputReference.property.includeIframeOnlyStream">includeIframeOnlyStream</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageOutputReference.property.periodTriggers">periodTriggers</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageOutputReference.property.segmentDurationSeconds">segmentDurationSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageOutputReference.property.segmentTemplateFormat">segmentTemplateFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackage">DataAwsccMediapackagePackagingConfigurationDashPackage</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dashManifests`<sup>Required</sup> <a name="dashManifests" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageOutputReference.property.dashManifests"></a>

```typescript
public readonly dashManifests: DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsList">DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsList</a>

---

##### `encryption`<sup>Required</sup> <a name="encryption" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageOutputReference.property.encryption"></a>

```typescript
public readonly encryption: DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionOutputReference">DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionOutputReference</a>

---

##### `includeEncoderConfigurationInSegments`<sup>Required</sup> <a name="includeEncoderConfigurationInSegments" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageOutputReference.property.includeEncoderConfigurationInSegments"></a>

```typescript
public readonly includeEncoderConfigurationInSegments: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `includeIframeOnlyStream`<sup>Required</sup> <a name="includeIframeOnlyStream" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageOutputReference.property.includeIframeOnlyStream"></a>

```typescript
public readonly includeIframeOnlyStream: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `periodTriggers`<sup>Required</sup> <a name="periodTriggers" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageOutputReference.property.periodTriggers"></a>

```typescript
public readonly periodTriggers: string[];
```

- *Type:* string[]

---

##### `segmentDurationSeconds`<sup>Required</sup> <a name="segmentDurationSeconds" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageOutputReference.property.segmentDurationSeconds"></a>

```typescript
public readonly segmentDurationSeconds: number;
```

- *Type:* number

---

##### `segmentTemplateFormat`<sup>Required</sup> <a name="segmentTemplateFormat" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageOutputReference.property.segmentTemplateFormat"></a>

```typescript
public readonly segmentTemplateFormat: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackageOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccMediapackagePackagingConfigurationDashPackage;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationDashPackage">DataAwsccMediapackagePackagingConfigurationDashPackage</a>

---


### DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionOutputReference <a name="DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionOutputReference" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionOutputReference.Initializer"></a>

```typescript
import { dataAwsccMediapackagePackagingConfiguration } from '@cdktn/provider-awscc'

new dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionOutputReference.property.constantInitializationVector">constantInitializationVector</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionOutputReference.property.encryptionMethod">encryptionMethod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionOutputReference.property.spekeKeyProvider">spekeKeyProvider</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference">DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryption">DataAwsccMediapackagePackagingConfigurationHlsPackageEncryption</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `constantInitializationVector`<sup>Required</sup> <a name="constantInitializationVector" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionOutputReference.property.constantInitializationVector"></a>

```typescript
public readonly constantInitializationVector: string;
```

- *Type:* string

---

##### `encryptionMethod`<sup>Required</sup> <a name="encryptionMethod" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionOutputReference.property.encryptionMethod"></a>

```typescript
public readonly encryptionMethod: string;
```

- *Type:* string

---

##### `spekeKeyProvider`<sup>Required</sup> <a name="spekeKeyProvider" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionOutputReference.property.spekeKeyProvider"></a>

```typescript
public readonly spekeKeyProvider: DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference">DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccMediapackagePackagingConfigurationHlsPackageEncryption;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryption">DataAwsccMediapackagePackagingConfigurationHlsPackageEncryption</a>

---


### DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference <a name="DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.Initializer"></a>

```typescript
import { dataAwsccMediapackagePackagingConfiguration } from '@cdktn/provider-awscc'

new dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.property.presetSpeke20Audio">presetSpeke20Audio</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.property.presetSpeke20Video">presetSpeke20Video</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration">DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `presetSpeke20Audio`<sup>Required</sup> <a name="presetSpeke20Audio" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.property.presetSpeke20Audio"></a>

```typescript
public readonly presetSpeke20Audio: string;
```

- *Type:* string

---

##### `presetSpeke20Video`<sup>Required</sup> <a name="presetSpeke20Video" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.property.presetSpeke20Video"></a>

```typescript
public readonly presetSpeke20Video: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration">DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration</a>

---


### DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference <a name="DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference.Initializer"></a>

```typescript
import { dataAwsccMediapackagePackagingConfiguration } from '@cdktn/provider-awscc'

new dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference.property.encryptionContractConfiguration">encryptionContractConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference">DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference.property.roleArn">roleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference.property.systemIds">systemIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference.property.url">url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProvider">DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProvider</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `encryptionContractConfiguration`<sup>Required</sup> <a name="encryptionContractConfiguration" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference.property.encryptionContractConfiguration"></a>

```typescript
public readonly encryptionContractConfiguration: DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference">DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference</a>

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

---

##### `systemIds`<sup>Required</sup> <a name="systemIds" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference.property.systemIds"></a>

```typescript
public readonly systemIds: string[];
```

- *Type:* string[]

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProvider;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProvider">DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProvider</a>

---


### DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsList <a name="DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsList" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsList.Initializer"></a>

```typescript
import { dataAwsccMediapackagePackagingConfiguration } from '@cdktn/provider-awscc'

new dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsList.get"></a>

```typescript
public get(index: number): DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference <a name="DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.Initializer"></a>

```typescript
import { dataAwsccMediapackagePackagingConfiguration } from '@cdktn/provider-awscc'

new dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.property.adMarkers">adMarkers</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.property.includeIframeOnlyStream">includeIframeOnlyStream</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.property.manifestName">manifestName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.property.programDateTimeIntervalSeconds">programDateTimeIntervalSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.property.repeatExtXKey">repeatExtXKey</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.property.streamSelection">streamSelection</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionOutputReference">DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifests">DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifests</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `adMarkers`<sup>Required</sup> <a name="adMarkers" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.property.adMarkers"></a>

```typescript
public readonly adMarkers: string;
```

- *Type:* string

---

##### `includeIframeOnlyStream`<sup>Required</sup> <a name="includeIframeOnlyStream" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.property.includeIframeOnlyStream"></a>

```typescript
public readonly includeIframeOnlyStream: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `manifestName`<sup>Required</sup> <a name="manifestName" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.property.manifestName"></a>

```typescript
public readonly manifestName: string;
```

- *Type:* string

---

##### `programDateTimeIntervalSeconds`<sup>Required</sup> <a name="programDateTimeIntervalSeconds" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.property.programDateTimeIntervalSeconds"></a>

```typescript
public readonly programDateTimeIntervalSeconds: number;
```

- *Type:* number

---

##### `repeatExtXKey`<sup>Required</sup> <a name="repeatExtXKey" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.property.repeatExtXKey"></a>

```typescript
public readonly repeatExtXKey: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `streamSelection`<sup>Required</sup> <a name="streamSelection" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.property.streamSelection"></a>

```typescript
public readonly streamSelection: DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionOutputReference">DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifests;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifests">DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifests</a>

---


### DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionOutputReference <a name="DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionOutputReference" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionOutputReference.Initializer"></a>

```typescript
import { dataAwsccMediapackagePackagingConfiguration } from '@cdktn/provider-awscc'

new dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionOutputReference.property.maxVideoBitsPerSecond">maxVideoBitsPerSecond</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionOutputReference.property.minVideoBitsPerSecond">minVideoBitsPerSecond</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionOutputReference.property.streamOrder">streamOrder</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelection">DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `maxVideoBitsPerSecond`<sup>Required</sup> <a name="maxVideoBitsPerSecond" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionOutputReference.property.maxVideoBitsPerSecond"></a>

```typescript
public readonly maxVideoBitsPerSecond: number;
```

- *Type:* number

---

##### `minVideoBitsPerSecond`<sup>Required</sup> <a name="minVideoBitsPerSecond" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionOutputReference.property.minVideoBitsPerSecond"></a>

```typescript
public readonly minVideoBitsPerSecond: number;
```

- *Type:* number

---

##### `streamOrder`<sup>Required</sup> <a name="streamOrder" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionOutputReference.property.streamOrder"></a>

```typescript
public readonly streamOrder: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelection;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelection">DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelection</a>

---


### DataAwsccMediapackagePackagingConfigurationHlsPackageOutputReference <a name="DataAwsccMediapackagePackagingConfigurationHlsPackageOutputReference" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageOutputReference.Initializer"></a>

```typescript
import { dataAwsccMediapackagePackagingConfiguration } from '@cdktn/provider-awscc'

new dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageOutputReference.property.encryption">encryption</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionOutputReference">DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageOutputReference.property.hlsManifests">hlsManifests</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsList">DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageOutputReference.property.includeDvbSubtitles">includeDvbSubtitles</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageOutputReference.property.segmentDurationSeconds">segmentDurationSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageOutputReference.property.useAudioRenditionGroup">useAudioRenditionGroup</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackage">DataAwsccMediapackagePackagingConfigurationHlsPackage</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `encryption`<sup>Required</sup> <a name="encryption" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageOutputReference.property.encryption"></a>

```typescript
public readonly encryption: DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionOutputReference">DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionOutputReference</a>

---

##### `hlsManifests`<sup>Required</sup> <a name="hlsManifests" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageOutputReference.property.hlsManifests"></a>

```typescript
public readonly hlsManifests: DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsList">DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsList</a>

---

##### `includeDvbSubtitles`<sup>Required</sup> <a name="includeDvbSubtitles" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageOutputReference.property.includeDvbSubtitles"></a>

```typescript
public readonly includeDvbSubtitles: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `segmentDurationSeconds`<sup>Required</sup> <a name="segmentDurationSeconds" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageOutputReference.property.segmentDurationSeconds"></a>

```typescript
public readonly segmentDurationSeconds: number;
```

- *Type:* number

---

##### `useAudioRenditionGroup`<sup>Required</sup> <a name="useAudioRenditionGroup" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageOutputReference.property.useAudioRenditionGroup"></a>

```typescript
public readonly useAudioRenditionGroup: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackageOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccMediapackagePackagingConfigurationHlsPackage;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationHlsPackage">DataAwsccMediapackagePackagingConfigurationHlsPackage</a>

---


### DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionOutputReference <a name="DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionOutputReference" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionOutputReference.Initializer"></a>

```typescript
import { dataAwsccMediapackagePackagingConfiguration } from '@cdktn/provider-awscc'

new dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionOutputReference.property.spekeKeyProvider">spekeKeyProvider</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference">DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryption">DataAwsccMediapackagePackagingConfigurationMssPackageEncryption</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `spekeKeyProvider`<sup>Required</sup> <a name="spekeKeyProvider" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionOutputReference.property.spekeKeyProvider"></a>

```typescript
public readonly spekeKeyProvider: DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference">DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccMediapackagePackagingConfigurationMssPackageEncryption;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryption">DataAwsccMediapackagePackagingConfigurationMssPackageEncryption</a>

---


### DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference <a name="DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.Initializer"></a>

```typescript
import { dataAwsccMediapackagePackagingConfiguration } from '@cdktn/provider-awscc'

new dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.property.presetSpeke20Audio">presetSpeke20Audio</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.property.presetSpeke20Video">presetSpeke20Video</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration">DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `presetSpeke20Audio`<sup>Required</sup> <a name="presetSpeke20Audio" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.property.presetSpeke20Audio"></a>

```typescript
public readonly presetSpeke20Audio: string;
```

- *Type:* string

---

##### `presetSpeke20Video`<sup>Required</sup> <a name="presetSpeke20Video" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.property.presetSpeke20Video"></a>

```typescript
public readonly presetSpeke20Video: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration">DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration</a>

---


### DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference <a name="DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference.Initializer"></a>

```typescript
import { dataAwsccMediapackagePackagingConfiguration } from '@cdktn/provider-awscc'

new dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference.property.encryptionContractConfiguration">encryptionContractConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference">DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference.property.roleArn">roleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference.property.systemIds">systemIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference.property.url">url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProvider">DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProvider</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `encryptionContractConfiguration`<sup>Required</sup> <a name="encryptionContractConfiguration" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference.property.encryptionContractConfiguration"></a>

```typescript
public readonly encryptionContractConfiguration: DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference">DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference</a>

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

---

##### `systemIds`<sup>Required</sup> <a name="systemIds" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference.property.systemIds"></a>

```typescript
public readonly systemIds: string[];
```

- *Type:* string[]

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProvider;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProvider">DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProvider</a>

---


### DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsList <a name="DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsList" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsList.Initializer"></a>

```typescript
import { dataAwsccMediapackagePackagingConfiguration } from '@cdktn/provider-awscc'

new dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsList.get"></a>

```typescript
public get(index: number): DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsOutputReference <a name="DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsOutputReference" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsOutputReference.Initializer"></a>

```typescript
import { dataAwsccMediapackagePackagingConfiguration } from '@cdktn/provider-awscc'

new dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsOutputReference.property.manifestName">manifestName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsOutputReference.property.streamSelection">streamSelection</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionOutputReference">DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifests">DataAwsccMediapackagePackagingConfigurationMssPackageMssManifests</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `manifestName`<sup>Required</sup> <a name="manifestName" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsOutputReference.property.manifestName"></a>

```typescript
public readonly manifestName: string;
```

- *Type:* string

---

##### `streamSelection`<sup>Required</sup> <a name="streamSelection" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsOutputReference.property.streamSelection"></a>

```typescript
public readonly streamSelection: DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionOutputReference">DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccMediapackagePackagingConfigurationMssPackageMssManifests;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifests">DataAwsccMediapackagePackagingConfigurationMssPackageMssManifests</a>

---


### DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionOutputReference <a name="DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionOutputReference" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionOutputReference.Initializer"></a>

```typescript
import { dataAwsccMediapackagePackagingConfiguration } from '@cdktn/provider-awscc'

new dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionOutputReference.property.maxVideoBitsPerSecond">maxVideoBitsPerSecond</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionOutputReference.property.minVideoBitsPerSecond">minVideoBitsPerSecond</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionOutputReference.property.streamOrder">streamOrder</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsStreamSelection">DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsStreamSelection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `maxVideoBitsPerSecond`<sup>Required</sup> <a name="maxVideoBitsPerSecond" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionOutputReference.property.maxVideoBitsPerSecond"></a>

```typescript
public readonly maxVideoBitsPerSecond: number;
```

- *Type:* number

---

##### `minVideoBitsPerSecond`<sup>Required</sup> <a name="minVideoBitsPerSecond" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionOutputReference.property.minVideoBitsPerSecond"></a>

```typescript
public readonly minVideoBitsPerSecond: number;
```

- *Type:* number

---

##### `streamOrder`<sup>Required</sup> <a name="streamOrder" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionOutputReference.property.streamOrder"></a>

```typescript
public readonly streamOrder: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsStreamSelection;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsStreamSelection">DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsStreamSelection</a>

---


### DataAwsccMediapackagePackagingConfigurationMssPackageOutputReference <a name="DataAwsccMediapackagePackagingConfigurationMssPackageOutputReference" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageOutputReference.Initializer"></a>

```typescript
import { dataAwsccMediapackagePackagingConfiguration } from '@cdktn/provider-awscc'

new dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageOutputReference.property.encryption">encryption</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionOutputReference">DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageOutputReference.property.mssManifests">mssManifests</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsList">DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageOutputReference.property.segmentDurationSeconds">segmentDurationSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackage">DataAwsccMediapackagePackagingConfigurationMssPackage</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `encryption`<sup>Required</sup> <a name="encryption" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageOutputReference.property.encryption"></a>

```typescript
public readonly encryption: DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionOutputReference">DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionOutputReference</a>

---

##### `mssManifests`<sup>Required</sup> <a name="mssManifests" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageOutputReference.property.mssManifests"></a>

```typescript
public readonly mssManifests: DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsList">DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsList</a>

---

##### `segmentDurationSeconds`<sup>Required</sup> <a name="segmentDurationSeconds" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageOutputReference.property.segmentDurationSeconds"></a>

```typescript
public readonly segmentDurationSeconds: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackageOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccMediapackagePackagingConfigurationMssPackage;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationMssPackage">DataAwsccMediapackagePackagingConfigurationMssPackage</a>

---


### DataAwsccMediapackagePackagingConfigurationTagsList <a name="DataAwsccMediapackagePackagingConfigurationTagsList" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationTagsList.Initializer"></a>

```typescript
import { dataAwsccMediapackagePackagingConfiguration } from '@cdktn/provider-awscc'

new dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationTagsList.get"></a>

```typescript
public get(index: number): DataAwsccMediapackagePackagingConfigurationTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccMediapackagePackagingConfigurationTagsOutputReference <a name="DataAwsccMediapackagePackagingConfigurationTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationTagsOutputReference.Initializer"></a>

```typescript
import { dataAwsccMediapackagePackagingConfiguration } from '@cdktn/provider-awscc'

new dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationTags">DataAwsccMediapackagePackagingConfigurationTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccMediapackagePackagingConfigurationTags;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingConfiguration.DataAwsccMediapackagePackagingConfigurationTags">DataAwsccMediapackagePackagingConfigurationTags</a>

---



