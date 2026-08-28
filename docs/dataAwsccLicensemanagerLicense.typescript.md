# `dataAwsccLicensemanagerLicense` Submodule <a name="`dataAwsccLicensemanagerLicense` Submodule" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicense"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccLicensemanagerLicense <a name="DataAwsccLicensemanagerLicense" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicense"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/licensemanager_license awscc_licensemanager_license}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicense.Initializer"></a>

```typescript
import { dataAwsccLicensemanagerLicense } from '@cdktn/provider-awscc'

new dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicense(scope: Construct, id: string, config: DataAwsccLicensemanagerLicenseConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicense.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicense.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicense.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseConfig">DataAwsccLicensemanagerLicenseConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicense.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicense.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicense.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseConfig">DataAwsccLicensemanagerLicenseConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicense.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicense.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicense.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicense.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicense.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicense.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicense.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicense.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicense.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicense.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicense.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicense.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicense.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicense.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicense.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicense.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicense.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicense.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicense.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicense.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicense.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicense.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicense.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicense.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicense.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicense.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicense.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicense.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicense.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicense.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicense.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicense.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicense.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicense.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicense.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicense.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicense.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicense.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicense.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicense.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicense.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicense.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicense.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicense.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicense.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicense.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicense.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicense.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicense.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicense.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicense.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicense.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicense.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicense.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccLicensemanagerLicense resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicense.isConstruct"></a>

```typescript
import { dataAwsccLicensemanagerLicense } from '@cdktn/provider-awscc'

dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicense.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicense.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicense.isTerraformElement"></a>

```typescript
import { dataAwsccLicensemanagerLicense } from '@cdktn/provider-awscc'

dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicense.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicense.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicense.isTerraformDataSource"></a>

```typescript
import { dataAwsccLicensemanagerLicense } from '@cdktn/provider-awscc'

dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicense.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicense.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicense.generateConfigForImport"></a>

```typescript
import { dataAwsccLicensemanagerLicense } from '@cdktn/provider-awscc'

dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicense.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccLicensemanagerLicense resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicense.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicense.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccLicensemanagerLicense to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicense.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccLicensemanagerLicense that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/licensemanager_license#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicense.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccLicensemanagerLicense to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicense.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicense.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicense.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicense.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicense.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicense.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicense.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicense.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicense.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicense.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicense.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicense.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicense.property.beneficiary">beneficiary</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicense.property.consumptionConfiguration">consumptionConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseConsumptionConfigurationOutputReference">DataAwsccLicensemanagerLicenseConsumptionConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicense.property.entitlements">entitlements</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseEntitlementsList">DataAwsccLicensemanagerLicenseEntitlementsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicense.property.homeRegion">homeRegion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicense.property.issuer">issuer</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseIssuerOutputReference">DataAwsccLicensemanagerLicenseIssuerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicense.property.licenseArn">licenseArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicense.property.licenseMetadata">licenseMetadata</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseLicenseMetadataList">DataAwsccLicensemanagerLicenseLicenseMetadataList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicense.property.licenseName">licenseName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicense.property.productName">productName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicense.property.productSku">productSku</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicense.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicense.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseTagsList">DataAwsccLicensemanagerLicenseTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicense.property.validity">validity</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseValidityOutputReference">DataAwsccLicensemanagerLicenseValidityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicense.property.version">version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicense.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicense.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicense.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicense.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicense.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicense.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicense.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicense.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicense.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicense.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicense.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicense.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicense.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicense.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `beneficiary`<sup>Required</sup> <a name="beneficiary" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicense.property.beneficiary"></a>

```typescript
public readonly beneficiary: string;
```

- *Type:* string

---

##### `consumptionConfiguration`<sup>Required</sup> <a name="consumptionConfiguration" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicense.property.consumptionConfiguration"></a>

```typescript
public readonly consumptionConfiguration: DataAwsccLicensemanagerLicenseConsumptionConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseConsumptionConfigurationOutputReference">DataAwsccLicensemanagerLicenseConsumptionConfigurationOutputReference</a>

---

##### `entitlements`<sup>Required</sup> <a name="entitlements" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicense.property.entitlements"></a>

```typescript
public readonly entitlements: DataAwsccLicensemanagerLicenseEntitlementsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseEntitlementsList">DataAwsccLicensemanagerLicenseEntitlementsList</a>

---

##### `homeRegion`<sup>Required</sup> <a name="homeRegion" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicense.property.homeRegion"></a>

```typescript
public readonly homeRegion: string;
```

- *Type:* string

---

##### `issuer`<sup>Required</sup> <a name="issuer" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicense.property.issuer"></a>

```typescript
public readonly issuer: DataAwsccLicensemanagerLicenseIssuerOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseIssuerOutputReference">DataAwsccLicensemanagerLicenseIssuerOutputReference</a>

---

##### `licenseArn`<sup>Required</sup> <a name="licenseArn" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicense.property.licenseArn"></a>

```typescript
public readonly licenseArn: string;
```

- *Type:* string

---

##### `licenseMetadata`<sup>Required</sup> <a name="licenseMetadata" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicense.property.licenseMetadata"></a>

```typescript
public readonly licenseMetadata: DataAwsccLicensemanagerLicenseLicenseMetadataList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseLicenseMetadataList">DataAwsccLicensemanagerLicenseLicenseMetadataList</a>

---

##### `licenseName`<sup>Required</sup> <a name="licenseName" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicense.property.licenseName"></a>

```typescript
public readonly licenseName: string;
```

- *Type:* string

---

##### `productName`<sup>Required</sup> <a name="productName" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicense.property.productName"></a>

```typescript
public readonly productName: string;
```

- *Type:* string

---

##### `productSku`<sup>Required</sup> <a name="productSku" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicense.property.productSku"></a>

```typescript
public readonly productSku: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicense.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicense.property.tags"></a>

```typescript
public readonly tags: DataAwsccLicensemanagerLicenseTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseTagsList">DataAwsccLicensemanagerLicenseTagsList</a>

---

##### `validity`<sup>Required</sup> <a name="validity" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicense.property.validity"></a>

```typescript
public readonly validity: DataAwsccLicensemanagerLicenseValidityOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseValidityOutputReference">DataAwsccLicensemanagerLicenseValidityOutputReference</a>

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicense.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicense.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicense.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicense.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicense.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccLicensemanagerLicenseConfig <a name="DataAwsccLicensemanagerLicenseConfig" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseConfig.Initializer"></a>

```typescript
import { dataAwsccLicensemanagerLicense } from '@cdktn/provider-awscc'

const dataAwsccLicensemanagerLicenseConfig: dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/licensemanager_license#id DataAwsccLicensemanagerLicense#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccLicensemanagerLicenseConsumptionConfiguration <a name="DataAwsccLicensemanagerLicenseConsumptionConfiguration" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseConsumptionConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseConsumptionConfiguration.Initializer"></a>

```typescript
import { dataAwsccLicensemanagerLicense } from '@cdktn/provider-awscc'

const dataAwsccLicensemanagerLicenseConsumptionConfiguration: dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseConsumptionConfiguration = { ... }
```


### DataAwsccLicensemanagerLicenseConsumptionConfigurationBorrowConfiguration <a name="DataAwsccLicensemanagerLicenseConsumptionConfigurationBorrowConfiguration" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseConsumptionConfigurationBorrowConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseConsumptionConfigurationBorrowConfiguration.Initializer"></a>

```typescript
import { dataAwsccLicensemanagerLicense } from '@cdktn/provider-awscc'

const dataAwsccLicensemanagerLicenseConsumptionConfigurationBorrowConfiguration: dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseConsumptionConfigurationBorrowConfiguration = { ... }
```


### DataAwsccLicensemanagerLicenseConsumptionConfigurationProvisionalConfiguration <a name="DataAwsccLicensemanagerLicenseConsumptionConfigurationProvisionalConfiguration" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseConsumptionConfigurationProvisionalConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseConsumptionConfigurationProvisionalConfiguration.Initializer"></a>

```typescript
import { dataAwsccLicensemanagerLicense } from '@cdktn/provider-awscc'

const dataAwsccLicensemanagerLicenseConsumptionConfigurationProvisionalConfiguration: dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseConsumptionConfigurationProvisionalConfiguration = { ... }
```


### DataAwsccLicensemanagerLicenseEntitlements <a name="DataAwsccLicensemanagerLicenseEntitlements" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseEntitlements"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseEntitlements.Initializer"></a>

```typescript
import { dataAwsccLicensemanagerLicense } from '@cdktn/provider-awscc'

const dataAwsccLicensemanagerLicenseEntitlements: dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseEntitlements = { ... }
```


### DataAwsccLicensemanagerLicenseIssuer <a name="DataAwsccLicensemanagerLicenseIssuer" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseIssuer"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseIssuer.Initializer"></a>

```typescript
import { dataAwsccLicensemanagerLicense } from '@cdktn/provider-awscc'

const dataAwsccLicensemanagerLicenseIssuer: dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseIssuer = { ... }
```


### DataAwsccLicensemanagerLicenseLicenseMetadata <a name="DataAwsccLicensemanagerLicenseLicenseMetadata" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseLicenseMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseLicenseMetadata.Initializer"></a>

```typescript
import { dataAwsccLicensemanagerLicense } from '@cdktn/provider-awscc'

const dataAwsccLicensemanagerLicenseLicenseMetadata: dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseLicenseMetadata = { ... }
```


### DataAwsccLicensemanagerLicenseTags <a name="DataAwsccLicensemanagerLicenseTags" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseTags.Initializer"></a>

```typescript
import { dataAwsccLicensemanagerLicense } from '@cdktn/provider-awscc'

const dataAwsccLicensemanagerLicenseTags: dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseTags = { ... }
```


### DataAwsccLicensemanagerLicenseValidity <a name="DataAwsccLicensemanagerLicenseValidity" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseValidity"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseValidity.Initializer"></a>

```typescript
import { dataAwsccLicensemanagerLicense } from '@cdktn/provider-awscc'

const dataAwsccLicensemanagerLicenseValidity: dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseValidity = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccLicensemanagerLicenseConsumptionConfigurationBorrowConfigurationOutputReference <a name="DataAwsccLicensemanagerLicenseConsumptionConfigurationBorrowConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseConsumptionConfigurationBorrowConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseConsumptionConfigurationBorrowConfigurationOutputReference.Initializer"></a>

```typescript
import { dataAwsccLicensemanagerLicense } from '@cdktn/provider-awscc'

new dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseConsumptionConfigurationBorrowConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseConsumptionConfigurationBorrowConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseConsumptionConfigurationBorrowConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseConsumptionConfigurationBorrowConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseConsumptionConfigurationBorrowConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseConsumptionConfigurationBorrowConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseConsumptionConfigurationBorrowConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseConsumptionConfigurationBorrowConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseConsumptionConfigurationBorrowConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseConsumptionConfigurationBorrowConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseConsumptionConfigurationBorrowConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseConsumptionConfigurationBorrowConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseConsumptionConfigurationBorrowConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseConsumptionConfigurationBorrowConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseConsumptionConfigurationBorrowConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseConsumptionConfigurationBorrowConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseConsumptionConfigurationBorrowConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseConsumptionConfigurationBorrowConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseConsumptionConfigurationBorrowConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseConsumptionConfigurationBorrowConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseConsumptionConfigurationBorrowConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseConsumptionConfigurationBorrowConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseConsumptionConfigurationBorrowConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseConsumptionConfigurationBorrowConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseConsumptionConfigurationBorrowConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseConsumptionConfigurationBorrowConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseConsumptionConfigurationBorrowConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseConsumptionConfigurationBorrowConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseConsumptionConfigurationBorrowConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseConsumptionConfigurationBorrowConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseConsumptionConfigurationBorrowConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseConsumptionConfigurationBorrowConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseConsumptionConfigurationBorrowConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseConsumptionConfigurationBorrowConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseConsumptionConfigurationBorrowConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseConsumptionConfigurationBorrowConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseConsumptionConfigurationBorrowConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseConsumptionConfigurationBorrowConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseConsumptionConfigurationBorrowConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseConsumptionConfigurationBorrowConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseConsumptionConfigurationBorrowConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseConsumptionConfigurationBorrowConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseConsumptionConfigurationBorrowConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseConsumptionConfigurationBorrowConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseConsumptionConfigurationBorrowConfigurationOutputReference.property.allowEarlyCheckIn">allowEarlyCheckIn</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseConsumptionConfigurationBorrowConfigurationOutputReference.property.maxTimeToLiveInMinutes">maxTimeToLiveInMinutes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseConsumptionConfigurationBorrowConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseConsumptionConfigurationBorrowConfiguration">DataAwsccLicensemanagerLicenseConsumptionConfigurationBorrowConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseConsumptionConfigurationBorrowConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseConsumptionConfigurationBorrowConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `allowEarlyCheckIn`<sup>Required</sup> <a name="allowEarlyCheckIn" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseConsumptionConfigurationBorrowConfigurationOutputReference.property.allowEarlyCheckIn"></a>

```typescript
public readonly allowEarlyCheckIn: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `maxTimeToLiveInMinutes`<sup>Required</sup> <a name="maxTimeToLiveInMinutes" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseConsumptionConfigurationBorrowConfigurationOutputReference.property.maxTimeToLiveInMinutes"></a>

```typescript
public readonly maxTimeToLiveInMinutes: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseConsumptionConfigurationBorrowConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccLicensemanagerLicenseConsumptionConfigurationBorrowConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseConsumptionConfigurationBorrowConfiguration">DataAwsccLicensemanagerLicenseConsumptionConfigurationBorrowConfiguration</a>

---


### DataAwsccLicensemanagerLicenseConsumptionConfigurationOutputReference <a name="DataAwsccLicensemanagerLicenseConsumptionConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseConsumptionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseConsumptionConfigurationOutputReference.Initializer"></a>

```typescript
import { dataAwsccLicensemanagerLicense } from '@cdktn/provider-awscc'

new dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseConsumptionConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseConsumptionConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseConsumptionConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseConsumptionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseConsumptionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseConsumptionConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseConsumptionConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseConsumptionConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseConsumptionConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseConsumptionConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseConsumptionConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseConsumptionConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseConsumptionConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseConsumptionConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseConsumptionConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseConsumptionConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseConsumptionConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseConsumptionConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseConsumptionConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseConsumptionConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseConsumptionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseConsumptionConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseConsumptionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseConsumptionConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseConsumptionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseConsumptionConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseConsumptionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseConsumptionConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseConsumptionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseConsumptionConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseConsumptionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseConsumptionConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseConsumptionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseConsumptionConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseConsumptionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseConsumptionConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseConsumptionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseConsumptionConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseConsumptionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseConsumptionConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseConsumptionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseConsumptionConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseConsumptionConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseConsumptionConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseConsumptionConfigurationOutputReference.property.borrowConfiguration">borrowConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseConsumptionConfigurationBorrowConfigurationOutputReference">DataAwsccLicensemanagerLicenseConsumptionConfigurationBorrowConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseConsumptionConfigurationOutputReference.property.provisionalConfiguration">provisionalConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseConsumptionConfigurationProvisionalConfigurationOutputReference">DataAwsccLicensemanagerLicenseConsumptionConfigurationProvisionalConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseConsumptionConfigurationOutputReference.property.renewType">renewType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseConsumptionConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseConsumptionConfiguration">DataAwsccLicensemanagerLicenseConsumptionConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseConsumptionConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseConsumptionConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `borrowConfiguration`<sup>Required</sup> <a name="borrowConfiguration" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseConsumptionConfigurationOutputReference.property.borrowConfiguration"></a>

```typescript
public readonly borrowConfiguration: DataAwsccLicensemanagerLicenseConsumptionConfigurationBorrowConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseConsumptionConfigurationBorrowConfigurationOutputReference">DataAwsccLicensemanagerLicenseConsumptionConfigurationBorrowConfigurationOutputReference</a>

---

##### `provisionalConfiguration`<sup>Required</sup> <a name="provisionalConfiguration" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseConsumptionConfigurationOutputReference.property.provisionalConfiguration"></a>

```typescript
public readonly provisionalConfiguration: DataAwsccLicensemanagerLicenseConsumptionConfigurationProvisionalConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseConsumptionConfigurationProvisionalConfigurationOutputReference">DataAwsccLicensemanagerLicenseConsumptionConfigurationProvisionalConfigurationOutputReference</a>

---

##### `renewType`<sup>Required</sup> <a name="renewType" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseConsumptionConfigurationOutputReference.property.renewType"></a>

```typescript
public readonly renewType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseConsumptionConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccLicensemanagerLicenseConsumptionConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseConsumptionConfiguration">DataAwsccLicensemanagerLicenseConsumptionConfiguration</a>

---


### DataAwsccLicensemanagerLicenseConsumptionConfigurationProvisionalConfigurationOutputReference <a name="DataAwsccLicensemanagerLicenseConsumptionConfigurationProvisionalConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseConsumptionConfigurationProvisionalConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.Initializer"></a>

```typescript
import { dataAwsccLicensemanagerLicense } from '@cdktn/provider-awscc'

new dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseConsumptionConfigurationProvisionalConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.property.maxTimeToLiveInMinutes">maxTimeToLiveInMinutes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseConsumptionConfigurationProvisionalConfiguration">DataAwsccLicensemanagerLicenseConsumptionConfigurationProvisionalConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `maxTimeToLiveInMinutes`<sup>Required</sup> <a name="maxTimeToLiveInMinutes" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.property.maxTimeToLiveInMinutes"></a>

```typescript
public readonly maxTimeToLiveInMinutes: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccLicensemanagerLicenseConsumptionConfigurationProvisionalConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseConsumptionConfigurationProvisionalConfiguration">DataAwsccLicensemanagerLicenseConsumptionConfigurationProvisionalConfiguration</a>

---


### DataAwsccLicensemanagerLicenseEntitlementsList <a name="DataAwsccLicensemanagerLicenseEntitlementsList" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseEntitlementsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseEntitlementsList.Initializer"></a>

```typescript
import { dataAwsccLicensemanagerLicense } from '@cdktn/provider-awscc'

new dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseEntitlementsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseEntitlementsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseEntitlementsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseEntitlementsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseEntitlementsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseEntitlementsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseEntitlementsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseEntitlementsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseEntitlementsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseEntitlementsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseEntitlementsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseEntitlementsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseEntitlementsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseEntitlementsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseEntitlementsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseEntitlementsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseEntitlementsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseEntitlementsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseEntitlementsList.get"></a>

```typescript
public get(index: number): DataAwsccLicensemanagerLicenseEntitlementsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseEntitlementsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseEntitlementsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseEntitlementsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseEntitlementsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseEntitlementsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccLicensemanagerLicenseEntitlementsOutputReference <a name="DataAwsccLicensemanagerLicenseEntitlementsOutputReference" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseEntitlementsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseEntitlementsOutputReference.Initializer"></a>

```typescript
import { dataAwsccLicensemanagerLicense } from '@cdktn/provider-awscc'

new dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseEntitlementsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseEntitlementsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseEntitlementsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseEntitlementsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseEntitlementsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseEntitlementsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseEntitlementsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseEntitlementsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseEntitlementsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseEntitlementsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseEntitlementsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseEntitlementsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseEntitlementsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseEntitlementsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseEntitlementsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseEntitlementsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseEntitlementsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseEntitlementsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseEntitlementsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseEntitlementsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseEntitlementsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseEntitlementsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseEntitlementsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseEntitlementsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseEntitlementsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseEntitlementsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseEntitlementsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseEntitlementsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseEntitlementsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseEntitlementsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseEntitlementsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseEntitlementsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseEntitlementsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseEntitlementsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseEntitlementsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseEntitlementsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseEntitlementsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseEntitlementsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseEntitlementsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseEntitlementsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseEntitlementsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseEntitlementsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseEntitlementsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseEntitlementsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseEntitlementsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseEntitlementsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseEntitlementsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseEntitlementsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseEntitlementsOutputReference.property.allowCheckIn">allowCheckIn</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseEntitlementsOutputReference.property.maxCount">maxCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseEntitlementsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseEntitlementsOutputReference.property.overage">overage</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseEntitlementsOutputReference.property.unit">unit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseEntitlementsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseEntitlementsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseEntitlements">DataAwsccLicensemanagerLicenseEntitlements</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseEntitlementsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseEntitlementsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `allowCheckIn`<sup>Required</sup> <a name="allowCheckIn" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseEntitlementsOutputReference.property.allowCheckIn"></a>

```typescript
public readonly allowCheckIn: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `maxCount`<sup>Required</sup> <a name="maxCount" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseEntitlementsOutputReference.property.maxCount"></a>

```typescript
public readonly maxCount: number;
```

- *Type:* number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseEntitlementsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `overage`<sup>Required</sup> <a name="overage" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseEntitlementsOutputReference.property.overage"></a>

```typescript
public readonly overage: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `unit`<sup>Required</sup> <a name="unit" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseEntitlementsOutputReference.property.unit"></a>

```typescript
public readonly unit: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseEntitlementsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseEntitlementsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccLicensemanagerLicenseEntitlements;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseEntitlements">DataAwsccLicensemanagerLicenseEntitlements</a>

---


### DataAwsccLicensemanagerLicenseIssuerOutputReference <a name="DataAwsccLicensemanagerLicenseIssuerOutputReference" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseIssuerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseIssuerOutputReference.Initializer"></a>

```typescript
import { dataAwsccLicensemanagerLicense } from '@cdktn/provider-awscc'

new dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseIssuerOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseIssuerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseIssuerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseIssuerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseIssuerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseIssuerOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseIssuerOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseIssuerOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseIssuerOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseIssuerOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseIssuerOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseIssuerOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseIssuerOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseIssuerOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseIssuerOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseIssuerOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseIssuerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseIssuerOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseIssuerOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseIssuerOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseIssuerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseIssuerOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseIssuerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseIssuerOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseIssuerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseIssuerOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseIssuerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseIssuerOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseIssuerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseIssuerOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseIssuerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseIssuerOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseIssuerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseIssuerOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseIssuerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseIssuerOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseIssuerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseIssuerOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseIssuerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseIssuerOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseIssuerOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseIssuerOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseIssuerOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseIssuerOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseIssuerOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseIssuerOutputReference.property.signKey">signKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseIssuerOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseIssuer">DataAwsccLicensemanagerLicenseIssuer</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseIssuerOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseIssuerOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseIssuerOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `signKey`<sup>Required</sup> <a name="signKey" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseIssuerOutputReference.property.signKey"></a>

```typescript
public readonly signKey: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseIssuerOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccLicensemanagerLicenseIssuer;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseIssuer">DataAwsccLicensemanagerLicenseIssuer</a>

---


### DataAwsccLicensemanagerLicenseLicenseMetadataList <a name="DataAwsccLicensemanagerLicenseLicenseMetadataList" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseLicenseMetadataList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseLicenseMetadataList.Initializer"></a>

```typescript
import { dataAwsccLicensemanagerLicense } from '@cdktn/provider-awscc'

new dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseLicenseMetadataList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseLicenseMetadataList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseLicenseMetadataList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseLicenseMetadataList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseLicenseMetadataList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseLicenseMetadataList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseLicenseMetadataList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseLicenseMetadataList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseLicenseMetadataList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseLicenseMetadataList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseLicenseMetadataList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseLicenseMetadataList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseLicenseMetadataList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseLicenseMetadataList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseLicenseMetadataList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseLicenseMetadataList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseLicenseMetadataList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseLicenseMetadataList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseLicenseMetadataList.get"></a>

```typescript
public get(index: number): DataAwsccLicensemanagerLicenseLicenseMetadataOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseLicenseMetadataList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseLicenseMetadataList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseLicenseMetadataList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseLicenseMetadataList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseLicenseMetadataList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccLicensemanagerLicenseLicenseMetadataOutputReference <a name="DataAwsccLicensemanagerLicenseLicenseMetadataOutputReference" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseLicenseMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseLicenseMetadataOutputReference.Initializer"></a>

```typescript
import { dataAwsccLicensemanagerLicense } from '@cdktn/provider-awscc'

new dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseLicenseMetadataOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseLicenseMetadataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseLicenseMetadataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseLicenseMetadataOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseLicenseMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseLicenseMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseLicenseMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseLicenseMetadataOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseLicenseMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseLicenseMetadataOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseLicenseMetadataOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseLicenseMetadataOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseLicenseMetadataOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseLicenseMetadataOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseLicenseMetadataOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseLicenseMetadataOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseLicenseMetadataOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseLicenseMetadataOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseLicenseMetadataOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseLicenseMetadataOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseLicenseMetadataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseLicenseMetadataOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseLicenseMetadataOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseLicenseMetadataOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseLicenseMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseLicenseMetadataOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseLicenseMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseLicenseMetadataOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseLicenseMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseLicenseMetadataOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseLicenseMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseLicenseMetadataOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseLicenseMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseLicenseMetadataOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseLicenseMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseLicenseMetadataOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseLicenseMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseLicenseMetadataOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseLicenseMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseLicenseMetadataOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseLicenseMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseLicenseMetadataOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseLicenseMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseLicenseMetadataOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseLicenseMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseLicenseMetadataOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseLicenseMetadataOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseLicenseMetadataOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseLicenseMetadataOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseLicenseMetadataOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseLicenseMetadataOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseLicenseMetadata">DataAwsccLicensemanagerLicenseLicenseMetadata</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseLicenseMetadataOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseLicenseMetadataOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseLicenseMetadataOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseLicenseMetadataOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseLicenseMetadataOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccLicensemanagerLicenseLicenseMetadata;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseLicenseMetadata">DataAwsccLicensemanagerLicenseLicenseMetadata</a>

---


### DataAwsccLicensemanagerLicenseTagsList <a name="DataAwsccLicensemanagerLicenseTagsList" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseTagsList.Initializer"></a>

```typescript
import { dataAwsccLicensemanagerLicense } from '@cdktn/provider-awscc'

new dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseTagsList.get"></a>

```typescript
public get(index: number): DataAwsccLicensemanagerLicenseTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccLicensemanagerLicenseTagsOutputReference <a name="DataAwsccLicensemanagerLicenseTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseTagsOutputReference.Initializer"></a>

```typescript
import { dataAwsccLicensemanagerLicense } from '@cdktn/provider-awscc'

new dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseTags">DataAwsccLicensemanagerLicenseTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccLicensemanagerLicenseTags;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseTags">DataAwsccLicensemanagerLicenseTags</a>

---


### DataAwsccLicensemanagerLicenseValidityOutputReference <a name="DataAwsccLicensemanagerLicenseValidityOutputReference" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseValidityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseValidityOutputReference.Initializer"></a>

```typescript
import { dataAwsccLicensemanagerLicense } from '@cdktn/provider-awscc'

new dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseValidityOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseValidityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseValidityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseValidityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseValidityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseValidityOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseValidityOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseValidityOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseValidityOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseValidityOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseValidityOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseValidityOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseValidityOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseValidityOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseValidityOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseValidityOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseValidityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseValidityOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseValidityOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseValidityOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseValidityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseValidityOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseValidityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseValidityOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseValidityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseValidityOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseValidityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseValidityOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseValidityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseValidityOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseValidityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseValidityOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseValidityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseValidityOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseValidityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseValidityOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseValidityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseValidityOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseValidityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseValidityOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseValidityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseValidityOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseValidityOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseValidityOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseValidityOutputReference.property.begin">begin</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseValidityOutputReference.property.end">end</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseValidityOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseValidity">DataAwsccLicensemanagerLicenseValidity</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseValidityOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseValidityOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `begin`<sup>Required</sup> <a name="begin" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseValidityOutputReference.property.begin"></a>

```typescript
public readonly begin: string;
```

- *Type:* string

---

##### `end`<sup>Required</sup> <a name="end" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseValidityOutputReference.property.end"></a>

```typescript
public readonly end: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseValidityOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccLicensemanagerLicenseValidity;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLicensemanagerLicense.DataAwsccLicensemanagerLicenseValidity">DataAwsccLicensemanagerLicenseValidity</a>

---



