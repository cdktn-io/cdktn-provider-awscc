# `dataAwsccIotSoftwarePackageVersion` Submodule <a name="`dataAwsccIotSoftwarePackageVersion` Submodule" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccIotSoftwarePackageVersion <a name="DataAwsccIotSoftwarePackageVersion" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersion"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/iot_software_package_version awscc_iot_software_package_version}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersion.Initializer"></a>

```typescript
import { dataAwsccIotSoftwarePackageVersion } from '@cdktn/provider-awscc'

new dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersion(scope: Construct, id: string, config: DataAwsccIotSoftwarePackageVersionConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersion.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersion.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersion.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionConfig">DataAwsccIotSoftwarePackageVersionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersion.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersion.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersion.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionConfig">DataAwsccIotSoftwarePackageVersionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersion.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersion.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersion.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersion.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersion.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersion.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersion.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersion.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersion.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersion.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersion.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersion.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersion.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersion.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersion.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersion.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersion.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersion.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersion.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersion.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersion.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersion.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersion.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersion.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersion.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersion.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersion.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersion.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersion.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersion.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersion.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersion.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersion.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersion.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersion.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersion.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersion.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersion.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersion.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersion.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersion.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersion.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersion.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersion.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersion.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersion.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersion.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersion.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersion.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersion.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersion.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersion.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersion.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersion.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccIotSoftwarePackageVersion resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersion.isConstruct"></a>

```typescript
import { dataAwsccIotSoftwarePackageVersion } from '@cdktn/provider-awscc'

dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersion.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersion.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersion.isTerraformElement"></a>

```typescript
import { dataAwsccIotSoftwarePackageVersion } from '@cdktn/provider-awscc'

dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersion.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersion.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersion.isTerraformDataSource"></a>

```typescript
import { dataAwsccIotSoftwarePackageVersion } from '@cdktn/provider-awscc'

dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersion.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersion.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersion.generateConfigForImport"></a>

```typescript
import { dataAwsccIotSoftwarePackageVersion } from '@cdktn/provider-awscc'

dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersion.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccIotSoftwarePackageVersion resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersion.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersion.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccIotSoftwarePackageVersion to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersion.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccIotSoftwarePackageVersion that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/iot_software_package_version#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersion.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccIotSoftwarePackageVersion to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersion.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersion.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersion.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersion.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersion.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersion.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersion.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersion.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersion.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersion.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersion.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersion.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersion.property.artifact">artifact</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionArtifactOutputReference">DataAwsccIotSoftwarePackageVersionArtifactOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersion.property.attributes">attributes</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersion.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersion.property.errorReason">errorReason</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersion.property.packageName">packageName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersion.property.packageVersionArn">packageVersionArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersion.property.recipe">recipe</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersion.property.sbom">sbom</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionSbomOutputReference">DataAwsccIotSoftwarePackageVersionSbomOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersion.property.sbomValidationStatus">sbomValidationStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersion.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersion.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionTagsList">DataAwsccIotSoftwarePackageVersionTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersion.property.versionName">versionName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersion.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersion.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersion.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersion.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersion.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersion.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersion.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersion.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersion.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersion.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersion.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersion.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersion.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersion.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `artifact`<sup>Required</sup> <a name="artifact" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersion.property.artifact"></a>

```typescript
public readonly artifact: DataAwsccIotSoftwarePackageVersionArtifactOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionArtifactOutputReference">DataAwsccIotSoftwarePackageVersionArtifactOutputReference</a>

---

##### `attributes`<sup>Required</sup> <a name="attributes" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersion.property.attributes"></a>

```typescript
public readonly attributes: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersion.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `errorReason`<sup>Required</sup> <a name="errorReason" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersion.property.errorReason"></a>

```typescript
public readonly errorReason: string;
```

- *Type:* string

---

##### `packageName`<sup>Required</sup> <a name="packageName" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersion.property.packageName"></a>

```typescript
public readonly packageName: string;
```

- *Type:* string

---

##### `packageVersionArn`<sup>Required</sup> <a name="packageVersionArn" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersion.property.packageVersionArn"></a>

```typescript
public readonly packageVersionArn: string;
```

- *Type:* string

---

##### `recipe`<sup>Required</sup> <a name="recipe" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersion.property.recipe"></a>

```typescript
public readonly recipe: string;
```

- *Type:* string

---

##### `sbom`<sup>Required</sup> <a name="sbom" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersion.property.sbom"></a>

```typescript
public readonly sbom: DataAwsccIotSoftwarePackageVersionSbomOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionSbomOutputReference">DataAwsccIotSoftwarePackageVersionSbomOutputReference</a>

---

##### `sbomValidationStatus`<sup>Required</sup> <a name="sbomValidationStatus" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersion.property.sbomValidationStatus"></a>

```typescript
public readonly sbomValidationStatus: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersion.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersion.property.tags"></a>

```typescript
public readonly tags: DataAwsccIotSoftwarePackageVersionTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionTagsList">DataAwsccIotSoftwarePackageVersionTagsList</a>

---

##### `versionName`<sup>Required</sup> <a name="versionName" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersion.property.versionName"></a>

```typescript
public readonly versionName: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersion.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersion.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersion.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersion.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccIotSoftwarePackageVersionArtifact <a name="DataAwsccIotSoftwarePackageVersionArtifact" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionArtifact"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionArtifact.Initializer"></a>

```typescript
import { dataAwsccIotSoftwarePackageVersion } from '@cdktn/provider-awscc'

const dataAwsccIotSoftwarePackageVersionArtifact: dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionArtifact = { ... }
```


### DataAwsccIotSoftwarePackageVersionArtifactS3Location <a name="DataAwsccIotSoftwarePackageVersionArtifactS3Location" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionArtifactS3Location"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionArtifactS3Location.Initializer"></a>

```typescript
import { dataAwsccIotSoftwarePackageVersion } from '@cdktn/provider-awscc'

const dataAwsccIotSoftwarePackageVersionArtifactS3Location: dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionArtifactS3Location = { ... }
```


### DataAwsccIotSoftwarePackageVersionConfig <a name="DataAwsccIotSoftwarePackageVersionConfig" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionConfig.Initializer"></a>

```typescript
import { dataAwsccIotSoftwarePackageVersion } from '@cdktn/provider-awscc'

const dataAwsccIotSoftwarePackageVersionConfig: dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/iot_software_package_version#id DataAwsccIotSoftwarePackageVersion#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccIotSoftwarePackageVersionSbom <a name="DataAwsccIotSoftwarePackageVersionSbom" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionSbom"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionSbom.Initializer"></a>

```typescript
import { dataAwsccIotSoftwarePackageVersion } from '@cdktn/provider-awscc'

const dataAwsccIotSoftwarePackageVersionSbom: dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionSbom = { ... }
```


### DataAwsccIotSoftwarePackageVersionSbomS3Location <a name="DataAwsccIotSoftwarePackageVersionSbomS3Location" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionSbomS3Location"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionSbomS3Location.Initializer"></a>

```typescript
import { dataAwsccIotSoftwarePackageVersion } from '@cdktn/provider-awscc'

const dataAwsccIotSoftwarePackageVersionSbomS3Location: dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionSbomS3Location = { ... }
```


### DataAwsccIotSoftwarePackageVersionTags <a name="DataAwsccIotSoftwarePackageVersionTags" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionTags.Initializer"></a>

```typescript
import { dataAwsccIotSoftwarePackageVersion } from '@cdktn/provider-awscc'

const dataAwsccIotSoftwarePackageVersionTags: dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionTags = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccIotSoftwarePackageVersionArtifactOutputReference <a name="DataAwsccIotSoftwarePackageVersionArtifactOutputReference" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionArtifactOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionArtifactOutputReference.Initializer"></a>

```typescript
import { dataAwsccIotSoftwarePackageVersion } from '@cdktn/provider-awscc'

new dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionArtifactOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionArtifactOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionArtifactOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionArtifactOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionArtifactOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionArtifactOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionArtifactOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionArtifactOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionArtifactOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionArtifactOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionArtifactOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionArtifactOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionArtifactOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionArtifactOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionArtifactOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionArtifactOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionArtifactOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionArtifactOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionArtifactOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionArtifactOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionArtifactOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionArtifactOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionArtifactOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionArtifactOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionArtifactOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionArtifactOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionArtifactOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionArtifactOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionArtifactOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionArtifactOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionArtifactOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionArtifactOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionArtifactOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionArtifactOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionArtifactOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionArtifactOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionArtifactOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionArtifactOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionArtifactOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionArtifactOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionArtifactOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionArtifactOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionArtifactOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionArtifactOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionArtifactOutputReference.property.s3Location">s3Location</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionArtifactS3LocationOutputReference">DataAwsccIotSoftwarePackageVersionArtifactS3LocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionArtifactOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionArtifact">DataAwsccIotSoftwarePackageVersionArtifact</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionArtifactOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionArtifactOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `s3Location`<sup>Required</sup> <a name="s3Location" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionArtifactOutputReference.property.s3Location"></a>

```typescript
public readonly s3Location: DataAwsccIotSoftwarePackageVersionArtifactS3LocationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionArtifactS3LocationOutputReference">DataAwsccIotSoftwarePackageVersionArtifactS3LocationOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionArtifactOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccIotSoftwarePackageVersionArtifact;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionArtifact">DataAwsccIotSoftwarePackageVersionArtifact</a>

---


### DataAwsccIotSoftwarePackageVersionArtifactS3LocationOutputReference <a name="DataAwsccIotSoftwarePackageVersionArtifactS3LocationOutputReference" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionArtifactS3LocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionArtifactS3LocationOutputReference.Initializer"></a>

```typescript
import { dataAwsccIotSoftwarePackageVersion } from '@cdktn/provider-awscc'

new dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionArtifactS3LocationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionArtifactS3LocationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionArtifactS3LocationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionArtifactS3LocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionArtifactS3LocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionArtifactS3LocationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionArtifactS3LocationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionArtifactS3LocationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionArtifactS3LocationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionArtifactS3LocationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionArtifactS3LocationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionArtifactS3LocationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionArtifactS3LocationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionArtifactS3LocationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionArtifactS3LocationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionArtifactS3LocationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionArtifactS3LocationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionArtifactS3LocationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionArtifactS3LocationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionArtifactS3LocationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionArtifactS3LocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionArtifactS3LocationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionArtifactS3LocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionArtifactS3LocationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionArtifactS3LocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionArtifactS3LocationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionArtifactS3LocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionArtifactS3LocationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionArtifactS3LocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionArtifactS3LocationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionArtifactS3LocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionArtifactS3LocationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionArtifactS3LocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionArtifactS3LocationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionArtifactS3LocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionArtifactS3LocationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionArtifactS3LocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionArtifactS3LocationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionArtifactS3LocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionArtifactS3LocationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionArtifactS3LocationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionArtifactS3LocationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionArtifactS3LocationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionArtifactS3LocationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionArtifactS3LocationOutputReference.property.bucket">bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionArtifactS3LocationOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionArtifactS3LocationOutputReference.property.version">version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionArtifactS3LocationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionArtifactS3Location">DataAwsccIotSoftwarePackageVersionArtifactS3Location</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionArtifactS3LocationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionArtifactS3LocationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionArtifactS3LocationOutputReference.property.bucket"></a>

```typescript
public readonly bucket: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionArtifactS3LocationOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionArtifactS3LocationOutputReference.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionArtifactS3LocationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccIotSoftwarePackageVersionArtifactS3Location;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionArtifactS3Location">DataAwsccIotSoftwarePackageVersionArtifactS3Location</a>

---


### DataAwsccIotSoftwarePackageVersionSbomOutputReference <a name="DataAwsccIotSoftwarePackageVersionSbomOutputReference" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionSbomOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionSbomOutputReference.Initializer"></a>

```typescript
import { dataAwsccIotSoftwarePackageVersion } from '@cdktn/provider-awscc'

new dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionSbomOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionSbomOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionSbomOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionSbomOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionSbomOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionSbomOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionSbomOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionSbomOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionSbomOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionSbomOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionSbomOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionSbomOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionSbomOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionSbomOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionSbomOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionSbomOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionSbomOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionSbomOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionSbomOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionSbomOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionSbomOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionSbomOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionSbomOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionSbomOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionSbomOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionSbomOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionSbomOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionSbomOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionSbomOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionSbomOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionSbomOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionSbomOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionSbomOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionSbomOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionSbomOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionSbomOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionSbomOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionSbomOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionSbomOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionSbomOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionSbomOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionSbomOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionSbomOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionSbomOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionSbomOutputReference.property.s3Location">s3Location</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionSbomS3LocationOutputReference">DataAwsccIotSoftwarePackageVersionSbomS3LocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionSbomOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionSbom">DataAwsccIotSoftwarePackageVersionSbom</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionSbomOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionSbomOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `s3Location`<sup>Required</sup> <a name="s3Location" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionSbomOutputReference.property.s3Location"></a>

```typescript
public readonly s3Location: DataAwsccIotSoftwarePackageVersionSbomS3LocationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionSbomS3LocationOutputReference">DataAwsccIotSoftwarePackageVersionSbomS3LocationOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionSbomOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccIotSoftwarePackageVersionSbom;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionSbom">DataAwsccIotSoftwarePackageVersionSbom</a>

---


### DataAwsccIotSoftwarePackageVersionSbomS3LocationOutputReference <a name="DataAwsccIotSoftwarePackageVersionSbomS3LocationOutputReference" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionSbomS3LocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionSbomS3LocationOutputReference.Initializer"></a>

```typescript
import { dataAwsccIotSoftwarePackageVersion } from '@cdktn/provider-awscc'

new dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionSbomS3LocationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionSbomS3LocationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionSbomS3LocationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionSbomS3LocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionSbomS3LocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionSbomS3LocationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionSbomS3LocationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionSbomS3LocationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionSbomS3LocationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionSbomS3LocationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionSbomS3LocationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionSbomS3LocationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionSbomS3LocationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionSbomS3LocationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionSbomS3LocationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionSbomS3LocationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionSbomS3LocationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionSbomS3LocationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionSbomS3LocationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionSbomS3LocationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionSbomS3LocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionSbomS3LocationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionSbomS3LocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionSbomS3LocationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionSbomS3LocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionSbomS3LocationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionSbomS3LocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionSbomS3LocationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionSbomS3LocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionSbomS3LocationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionSbomS3LocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionSbomS3LocationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionSbomS3LocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionSbomS3LocationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionSbomS3LocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionSbomS3LocationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionSbomS3LocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionSbomS3LocationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionSbomS3LocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionSbomS3LocationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionSbomS3LocationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionSbomS3LocationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionSbomS3LocationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionSbomS3LocationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionSbomS3LocationOutputReference.property.bucket">bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionSbomS3LocationOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionSbomS3LocationOutputReference.property.version">version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionSbomS3LocationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionSbomS3Location">DataAwsccIotSoftwarePackageVersionSbomS3Location</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionSbomS3LocationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionSbomS3LocationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionSbomS3LocationOutputReference.property.bucket"></a>

```typescript
public readonly bucket: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionSbomS3LocationOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionSbomS3LocationOutputReference.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionSbomS3LocationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccIotSoftwarePackageVersionSbomS3Location;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionSbomS3Location">DataAwsccIotSoftwarePackageVersionSbomS3Location</a>

---


### DataAwsccIotSoftwarePackageVersionTagsList <a name="DataAwsccIotSoftwarePackageVersionTagsList" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionTagsList.Initializer"></a>

```typescript
import { dataAwsccIotSoftwarePackageVersion } from '@cdktn/provider-awscc'

new dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionTagsList.get"></a>

```typescript
public get(index: number): DataAwsccIotSoftwarePackageVersionTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccIotSoftwarePackageVersionTagsOutputReference <a name="DataAwsccIotSoftwarePackageVersionTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionTagsOutputReference.Initializer"></a>

```typescript
import { dataAwsccIotSoftwarePackageVersion } from '@cdktn/provider-awscc'

new dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionTags">DataAwsccIotSoftwarePackageVersionTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccIotSoftwarePackageVersionTags;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotSoftwarePackageVersion.DataAwsccIotSoftwarePackageVersionTags">DataAwsccIotSoftwarePackageVersionTags</a>

---



