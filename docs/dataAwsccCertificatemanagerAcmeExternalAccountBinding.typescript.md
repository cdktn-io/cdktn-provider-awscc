# `dataAwsccCertificatemanagerAcmeExternalAccountBinding` Submodule <a name="`dataAwsccCertificatemanagerAcmeExternalAccountBinding` Submodule" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeExternalAccountBinding"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccCertificatemanagerAcmeExternalAccountBinding <a name="DataAwsccCertificatemanagerAcmeExternalAccountBinding" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeExternalAccountBinding.DataAwsccCertificatemanagerAcmeExternalAccountBinding"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/certificatemanager_acme_external_account_binding awscc_certificatemanager_acme_external_account_binding}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeExternalAccountBinding.DataAwsccCertificatemanagerAcmeExternalAccountBinding.Initializer"></a>

```typescript
import { dataAwsccCertificatemanagerAcmeExternalAccountBinding } from '@cdktn/provider-awscc'

new dataAwsccCertificatemanagerAcmeExternalAccountBinding.DataAwsccCertificatemanagerAcmeExternalAccountBinding(scope: Construct, id: string, config: DataAwsccCertificatemanagerAcmeExternalAccountBindingConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeExternalAccountBinding.DataAwsccCertificatemanagerAcmeExternalAccountBinding.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeExternalAccountBinding.DataAwsccCertificatemanagerAcmeExternalAccountBinding.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeExternalAccountBinding.DataAwsccCertificatemanagerAcmeExternalAccountBinding.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeExternalAccountBinding.DataAwsccCertificatemanagerAcmeExternalAccountBindingConfig">DataAwsccCertificatemanagerAcmeExternalAccountBindingConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeExternalAccountBinding.DataAwsccCertificatemanagerAcmeExternalAccountBinding.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeExternalAccountBinding.DataAwsccCertificatemanagerAcmeExternalAccountBinding.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeExternalAccountBinding.DataAwsccCertificatemanagerAcmeExternalAccountBinding.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeExternalAccountBinding.DataAwsccCertificatemanagerAcmeExternalAccountBindingConfig">DataAwsccCertificatemanagerAcmeExternalAccountBindingConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeExternalAccountBinding.DataAwsccCertificatemanagerAcmeExternalAccountBinding.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeExternalAccountBinding.DataAwsccCertificatemanagerAcmeExternalAccountBinding.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeExternalAccountBinding.DataAwsccCertificatemanagerAcmeExternalAccountBinding.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeExternalAccountBinding.DataAwsccCertificatemanagerAcmeExternalAccountBinding.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeExternalAccountBinding.DataAwsccCertificatemanagerAcmeExternalAccountBinding.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeExternalAccountBinding.DataAwsccCertificatemanagerAcmeExternalAccountBinding.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeExternalAccountBinding.DataAwsccCertificatemanagerAcmeExternalAccountBinding.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeExternalAccountBinding.DataAwsccCertificatemanagerAcmeExternalAccountBinding.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeExternalAccountBinding.DataAwsccCertificatemanagerAcmeExternalAccountBinding.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeExternalAccountBinding.DataAwsccCertificatemanagerAcmeExternalAccountBinding.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeExternalAccountBinding.DataAwsccCertificatemanagerAcmeExternalAccountBinding.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeExternalAccountBinding.DataAwsccCertificatemanagerAcmeExternalAccountBinding.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeExternalAccountBinding.DataAwsccCertificatemanagerAcmeExternalAccountBinding.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeExternalAccountBinding.DataAwsccCertificatemanagerAcmeExternalAccountBinding.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeExternalAccountBinding.DataAwsccCertificatemanagerAcmeExternalAccountBinding.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeExternalAccountBinding.DataAwsccCertificatemanagerAcmeExternalAccountBinding.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeExternalAccountBinding.DataAwsccCertificatemanagerAcmeExternalAccountBinding.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeExternalAccountBinding.DataAwsccCertificatemanagerAcmeExternalAccountBinding.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeExternalAccountBinding.DataAwsccCertificatemanagerAcmeExternalAccountBinding.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeExternalAccountBinding.DataAwsccCertificatemanagerAcmeExternalAccountBinding.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeExternalAccountBinding.DataAwsccCertificatemanagerAcmeExternalAccountBinding.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeExternalAccountBinding.DataAwsccCertificatemanagerAcmeExternalAccountBinding.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeExternalAccountBinding.DataAwsccCertificatemanagerAcmeExternalAccountBinding.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeExternalAccountBinding.DataAwsccCertificatemanagerAcmeExternalAccountBinding.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeExternalAccountBinding.DataAwsccCertificatemanagerAcmeExternalAccountBinding.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeExternalAccountBinding.DataAwsccCertificatemanagerAcmeExternalAccountBinding.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeExternalAccountBinding.DataAwsccCertificatemanagerAcmeExternalAccountBinding.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeExternalAccountBinding.DataAwsccCertificatemanagerAcmeExternalAccountBinding.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeExternalAccountBinding.DataAwsccCertificatemanagerAcmeExternalAccountBinding.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeExternalAccountBinding.DataAwsccCertificatemanagerAcmeExternalAccountBinding.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeExternalAccountBinding.DataAwsccCertificatemanagerAcmeExternalAccountBinding.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeExternalAccountBinding.DataAwsccCertificatemanagerAcmeExternalAccountBinding.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeExternalAccountBinding.DataAwsccCertificatemanagerAcmeExternalAccountBinding.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeExternalAccountBinding.DataAwsccCertificatemanagerAcmeExternalAccountBinding.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeExternalAccountBinding.DataAwsccCertificatemanagerAcmeExternalAccountBinding.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeExternalAccountBinding.DataAwsccCertificatemanagerAcmeExternalAccountBinding.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeExternalAccountBinding.DataAwsccCertificatemanagerAcmeExternalAccountBinding.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeExternalAccountBinding.DataAwsccCertificatemanagerAcmeExternalAccountBinding.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeExternalAccountBinding.DataAwsccCertificatemanagerAcmeExternalAccountBinding.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeExternalAccountBinding.DataAwsccCertificatemanagerAcmeExternalAccountBinding.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeExternalAccountBinding.DataAwsccCertificatemanagerAcmeExternalAccountBinding.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeExternalAccountBinding.DataAwsccCertificatemanagerAcmeExternalAccountBinding.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeExternalAccountBinding.DataAwsccCertificatemanagerAcmeExternalAccountBinding.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeExternalAccountBinding.DataAwsccCertificatemanagerAcmeExternalAccountBinding.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeExternalAccountBinding.DataAwsccCertificatemanagerAcmeExternalAccountBinding.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeExternalAccountBinding.DataAwsccCertificatemanagerAcmeExternalAccountBinding.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeExternalAccountBinding.DataAwsccCertificatemanagerAcmeExternalAccountBinding.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeExternalAccountBinding.DataAwsccCertificatemanagerAcmeExternalAccountBinding.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeExternalAccountBinding.DataAwsccCertificatemanagerAcmeExternalAccountBinding.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeExternalAccountBinding.DataAwsccCertificatemanagerAcmeExternalAccountBinding.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeExternalAccountBinding.DataAwsccCertificatemanagerAcmeExternalAccountBinding.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeExternalAccountBinding.DataAwsccCertificatemanagerAcmeExternalAccountBinding.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeExternalAccountBinding.DataAwsccCertificatemanagerAcmeExternalAccountBinding.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeExternalAccountBinding.DataAwsccCertificatemanagerAcmeExternalAccountBinding.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccCertificatemanagerAcmeExternalAccountBinding resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeExternalAccountBinding.DataAwsccCertificatemanagerAcmeExternalAccountBinding.isConstruct"></a>

```typescript
import { dataAwsccCertificatemanagerAcmeExternalAccountBinding } from '@cdktn/provider-awscc'

dataAwsccCertificatemanagerAcmeExternalAccountBinding.DataAwsccCertificatemanagerAcmeExternalAccountBinding.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeExternalAccountBinding.DataAwsccCertificatemanagerAcmeExternalAccountBinding.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeExternalAccountBinding.DataAwsccCertificatemanagerAcmeExternalAccountBinding.isTerraformElement"></a>

```typescript
import { dataAwsccCertificatemanagerAcmeExternalAccountBinding } from '@cdktn/provider-awscc'

dataAwsccCertificatemanagerAcmeExternalAccountBinding.DataAwsccCertificatemanagerAcmeExternalAccountBinding.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeExternalAccountBinding.DataAwsccCertificatemanagerAcmeExternalAccountBinding.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeExternalAccountBinding.DataAwsccCertificatemanagerAcmeExternalAccountBinding.isTerraformDataSource"></a>

```typescript
import { dataAwsccCertificatemanagerAcmeExternalAccountBinding } from '@cdktn/provider-awscc'

dataAwsccCertificatemanagerAcmeExternalAccountBinding.DataAwsccCertificatemanagerAcmeExternalAccountBinding.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeExternalAccountBinding.DataAwsccCertificatemanagerAcmeExternalAccountBinding.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeExternalAccountBinding.DataAwsccCertificatemanagerAcmeExternalAccountBinding.generateConfigForImport"></a>

```typescript
import { dataAwsccCertificatemanagerAcmeExternalAccountBinding } from '@cdktn/provider-awscc'

dataAwsccCertificatemanagerAcmeExternalAccountBinding.DataAwsccCertificatemanagerAcmeExternalAccountBinding.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccCertificatemanagerAcmeExternalAccountBinding resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeExternalAccountBinding.DataAwsccCertificatemanagerAcmeExternalAccountBinding.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeExternalAccountBinding.DataAwsccCertificatemanagerAcmeExternalAccountBinding.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccCertificatemanagerAcmeExternalAccountBinding to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeExternalAccountBinding.DataAwsccCertificatemanagerAcmeExternalAccountBinding.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccCertificatemanagerAcmeExternalAccountBinding that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/certificatemanager_acme_external_account_binding#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeExternalAccountBinding.DataAwsccCertificatemanagerAcmeExternalAccountBinding.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccCertificatemanagerAcmeExternalAccountBinding to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeExternalAccountBinding.DataAwsccCertificatemanagerAcmeExternalAccountBinding.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeExternalAccountBinding.DataAwsccCertificatemanagerAcmeExternalAccountBinding.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeExternalAccountBinding.DataAwsccCertificatemanagerAcmeExternalAccountBinding.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeExternalAccountBinding.DataAwsccCertificatemanagerAcmeExternalAccountBinding.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeExternalAccountBinding.DataAwsccCertificatemanagerAcmeExternalAccountBinding.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeExternalAccountBinding.DataAwsccCertificatemanagerAcmeExternalAccountBinding.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeExternalAccountBinding.DataAwsccCertificatemanagerAcmeExternalAccountBinding.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeExternalAccountBinding.DataAwsccCertificatemanagerAcmeExternalAccountBinding.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeExternalAccountBinding.DataAwsccCertificatemanagerAcmeExternalAccountBinding.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeExternalAccountBinding.DataAwsccCertificatemanagerAcmeExternalAccountBinding.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeExternalAccountBinding.DataAwsccCertificatemanagerAcmeExternalAccountBinding.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeExternalAccountBinding.DataAwsccCertificatemanagerAcmeExternalAccountBinding.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeExternalAccountBinding.DataAwsccCertificatemanagerAcmeExternalAccountBinding.property.acmeEndpointArn">acmeEndpointArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeExternalAccountBinding.DataAwsccCertificatemanagerAcmeExternalAccountBinding.property.acmeExternalAccountBindingArn">acmeExternalAccountBindingArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeExternalAccountBinding.DataAwsccCertificatemanagerAcmeExternalAccountBinding.property.expiration">expiration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeExternalAccountBinding.DataAwsccCertificatemanagerAcmeExternalAccountBindingExpirationOutputReference">DataAwsccCertificatemanagerAcmeExternalAccountBindingExpirationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeExternalAccountBinding.DataAwsccCertificatemanagerAcmeExternalAccountBinding.property.roleArn">roleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeExternalAccountBinding.DataAwsccCertificatemanagerAcmeExternalAccountBinding.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeExternalAccountBinding.DataAwsccCertificatemanagerAcmeExternalAccountBindingTagsList">DataAwsccCertificatemanagerAcmeExternalAccountBindingTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeExternalAccountBinding.DataAwsccCertificatemanagerAcmeExternalAccountBinding.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeExternalAccountBinding.DataAwsccCertificatemanagerAcmeExternalAccountBinding.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeExternalAccountBinding.DataAwsccCertificatemanagerAcmeExternalAccountBinding.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeExternalAccountBinding.DataAwsccCertificatemanagerAcmeExternalAccountBinding.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeExternalAccountBinding.DataAwsccCertificatemanagerAcmeExternalAccountBinding.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeExternalAccountBinding.DataAwsccCertificatemanagerAcmeExternalAccountBinding.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeExternalAccountBinding.DataAwsccCertificatemanagerAcmeExternalAccountBinding.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeExternalAccountBinding.DataAwsccCertificatemanagerAcmeExternalAccountBinding.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeExternalAccountBinding.DataAwsccCertificatemanagerAcmeExternalAccountBinding.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeExternalAccountBinding.DataAwsccCertificatemanagerAcmeExternalAccountBinding.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeExternalAccountBinding.DataAwsccCertificatemanagerAcmeExternalAccountBinding.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeExternalAccountBinding.DataAwsccCertificatemanagerAcmeExternalAccountBinding.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeExternalAccountBinding.DataAwsccCertificatemanagerAcmeExternalAccountBinding.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeExternalAccountBinding.DataAwsccCertificatemanagerAcmeExternalAccountBinding.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `acmeEndpointArn`<sup>Required</sup> <a name="acmeEndpointArn" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeExternalAccountBinding.DataAwsccCertificatemanagerAcmeExternalAccountBinding.property.acmeEndpointArn"></a>

```typescript
public readonly acmeEndpointArn: string;
```

- *Type:* string

---

##### `acmeExternalAccountBindingArn`<sup>Required</sup> <a name="acmeExternalAccountBindingArn" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeExternalAccountBinding.DataAwsccCertificatemanagerAcmeExternalAccountBinding.property.acmeExternalAccountBindingArn"></a>

```typescript
public readonly acmeExternalAccountBindingArn: string;
```

- *Type:* string

---

##### `expiration`<sup>Required</sup> <a name="expiration" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeExternalAccountBinding.DataAwsccCertificatemanagerAcmeExternalAccountBinding.property.expiration"></a>

```typescript
public readonly expiration: DataAwsccCertificatemanagerAcmeExternalAccountBindingExpirationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeExternalAccountBinding.DataAwsccCertificatemanagerAcmeExternalAccountBindingExpirationOutputReference">DataAwsccCertificatemanagerAcmeExternalAccountBindingExpirationOutputReference</a>

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeExternalAccountBinding.DataAwsccCertificatemanagerAcmeExternalAccountBinding.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeExternalAccountBinding.DataAwsccCertificatemanagerAcmeExternalAccountBinding.property.tags"></a>

```typescript
public readonly tags: DataAwsccCertificatemanagerAcmeExternalAccountBindingTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeExternalAccountBinding.DataAwsccCertificatemanagerAcmeExternalAccountBindingTagsList">DataAwsccCertificatemanagerAcmeExternalAccountBindingTagsList</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeExternalAccountBinding.DataAwsccCertificatemanagerAcmeExternalAccountBinding.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeExternalAccountBinding.DataAwsccCertificatemanagerAcmeExternalAccountBinding.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeExternalAccountBinding.DataAwsccCertificatemanagerAcmeExternalAccountBinding.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeExternalAccountBinding.DataAwsccCertificatemanagerAcmeExternalAccountBinding.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccCertificatemanagerAcmeExternalAccountBindingConfig <a name="DataAwsccCertificatemanagerAcmeExternalAccountBindingConfig" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeExternalAccountBinding.DataAwsccCertificatemanagerAcmeExternalAccountBindingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeExternalAccountBinding.DataAwsccCertificatemanagerAcmeExternalAccountBindingConfig.Initializer"></a>

```typescript
import { dataAwsccCertificatemanagerAcmeExternalAccountBinding } from '@cdktn/provider-awscc'

const dataAwsccCertificatemanagerAcmeExternalAccountBindingConfig: dataAwsccCertificatemanagerAcmeExternalAccountBinding.DataAwsccCertificatemanagerAcmeExternalAccountBindingConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeExternalAccountBinding.DataAwsccCertificatemanagerAcmeExternalAccountBindingConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeExternalAccountBinding.DataAwsccCertificatemanagerAcmeExternalAccountBindingConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeExternalAccountBinding.DataAwsccCertificatemanagerAcmeExternalAccountBindingConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeExternalAccountBinding.DataAwsccCertificatemanagerAcmeExternalAccountBindingConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeExternalAccountBinding.DataAwsccCertificatemanagerAcmeExternalAccountBindingConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeExternalAccountBinding.DataAwsccCertificatemanagerAcmeExternalAccountBindingConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeExternalAccountBinding.DataAwsccCertificatemanagerAcmeExternalAccountBindingConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeExternalAccountBinding.DataAwsccCertificatemanagerAcmeExternalAccountBindingConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeExternalAccountBinding.DataAwsccCertificatemanagerAcmeExternalAccountBindingConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeExternalAccountBinding.DataAwsccCertificatemanagerAcmeExternalAccountBindingConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeExternalAccountBinding.DataAwsccCertificatemanagerAcmeExternalAccountBindingConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeExternalAccountBinding.DataAwsccCertificatemanagerAcmeExternalAccountBindingConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeExternalAccountBinding.DataAwsccCertificatemanagerAcmeExternalAccountBindingConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeExternalAccountBinding.DataAwsccCertificatemanagerAcmeExternalAccountBindingConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeExternalAccountBinding.DataAwsccCertificatemanagerAcmeExternalAccountBindingConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeExternalAccountBinding.DataAwsccCertificatemanagerAcmeExternalAccountBindingConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/certificatemanager_acme_external_account_binding#id DataAwsccCertificatemanagerAcmeExternalAccountBinding#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccCertificatemanagerAcmeExternalAccountBindingExpiration <a name="DataAwsccCertificatemanagerAcmeExternalAccountBindingExpiration" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeExternalAccountBinding.DataAwsccCertificatemanagerAcmeExternalAccountBindingExpiration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeExternalAccountBinding.DataAwsccCertificatemanagerAcmeExternalAccountBindingExpiration.Initializer"></a>

```typescript
import { dataAwsccCertificatemanagerAcmeExternalAccountBinding } from '@cdktn/provider-awscc'

const dataAwsccCertificatemanagerAcmeExternalAccountBindingExpiration: dataAwsccCertificatemanagerAcmeExternalAccountBinding.DataAwsccCertificatemanagerAcmeExternalAccountBindingExpiration = { ... }
```


### DataAwsccCertificatemanagerAcmeExternalAccountBindingTags <a name="DataAwsccCertificatemanagerAcmeExternalAccountBindingTags" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeExternalAccountBinding.DataAwsccCertificatemanagerAcmeExternalAccountBindingTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeExternalAccountBinding.DataAwsccCertificatemanagerAcmeExternalAccountBindingTags.Initializer"></a>

```typescript
import { dataAwsccCertificatemanagerAcmeExternalAccountBinding } from '@cdktn/provider-awscc'

const dataAwsccCertificatemanagerAcmeExternalAccountBindingTags: dataAwsccCertificatemanagerAcmeExternalAccountBinding.DataAwsccCertificatemanagerAcmeExternalAccountBindingTags = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccCertificatemanagerAcmeExternalAccountBindingExpirationOutputReference <a name="DataAwsccCertificatemanagerAcmeExternalAccountBindingExpirationOutputReference" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeExternalAccountBinding.DataAwsccCertificatemanagerAcmeExternalAccountBindingExpirationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeExternalAccountBinding.DataAwsccCertificatemanagerAcmeExternalAccountBindingExpirationOutputReference.Initializer"></a>

```typescript
import { dataAwsccCertificatemanagerAcmeExternalAccountBinding } from '@cdktn/provider-awscc'

new dataAwsccCertificatemanagerAcmeExternalAccountBinding.DataAwsccCertificatemanagerAcmeExternalAccountBindingExpirationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeExternalAccountBinding.DataAwsccCertificatemanagerAcmeExternalAccountBindingExpirationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeExternalAccountBinding.DataAwsccCertificatemanagerAcmeExternalAccountBindingExpirationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeExternalAccountBinding.DataAwsccCertificatemanagerAcmeExternalAccountBindingExpirationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeExternalAccountBinding.DataAwsccCertificatemanagerAcmeExternalAccountBindingExpirationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeExternalAccountBinding.DataAwsccCertificatemanagerAcmeExternalAccountBindingExpirationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeExternalAccountBinding.DataAwsccCertificatemanagerAcmeExternalAccountBindingExpirationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeExternalAccountBinding.DataAwsccCertificatemanagerAcmeExternalAccountBindingExpirationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeExternalAccountBinding.DataAwsccCertificatemanagerAcmeExternalAccountBindingExpirationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeExternalAccountBinding.DataAwsccCertificatemanagerAcmeExternalAccountBindingExpirationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeExternalAccountBinding.DataAwsccCertificatemanagerAcmeExternalAccountBindingExpirationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeExternalAccountBinding.DataAwsccCertificatemanagerAcmeExternalAccountBindingExpirationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeExternalAccountBinding.DataAwsccCertificatemanagerAcmeExternalAccountBindingExpirationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeExternalAccountBinding.DataAwsccCertificatemanagerAcmeExternalAccountBindingExpirationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeExternalAccountBinding.DataAwsccCertificatemanagerAcmeExternalAccountBindingExpirationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeExternalAccountBinding.DataAwsccCertificatemanagerAcmeExternalAccountBindingExpirationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeExternalAccountBinding.DataAwsccCertificatemanagerAcmeExternalAccountBindingExpirationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeExternalAccountBinding.DataAwsccCertificatemanagerAcmeExternalAccountBindingExpirationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeExternalAccountBinding.DataAwsccCertificatemanagerAcmeExternalAccountBindingExpirationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeExternalAccountBinding.DataAwsccCertificatemanagerAcmeExternalAccountBindingExpirationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeExternalAccountBinding.DataAwsccCertificatemanagerAcmeExternalAccountBindingExpirationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeExternalAccountBinding.DataAwsccCertificatemanagerAcmeExternalAccountBindingExpirationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeExternalAccountBinding.DataAwsccCertificatemanagerAcmeExternalAccountBindingExpirationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeExternalAccountBinding.DataAwsccCertificatemanagerAcmeExternalAccountBindingExpirationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeExternalAccountBinding.DataAwsccCertificatemanagerAcmeExternalAccountBindingExpirationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeExternalAccountBinding.DataAwsccCertificatemanagerAcmeExternalAccountBindingExpirationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeExternalAccountBinding.DataAwsccCertificatemanagerAcmeExternalAccountBindingExpirationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeExternalAccountBinding.DataAwsccCertificatemanagerAcmeExternalAccountBindingExpirationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeExternalAccountBinding.DataAwsccCertificatemanagerAcmeExternalAccountBindingExpirationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeExternalAccountBinding.DataAwsccCertificatemanagerAcmeExternalAccountBindingExpirationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeExternalAccountBinding.DataAwsccCertificatemanagerAcmeExternalAccountBindingExpirationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeExternalAccountBinding.DataAwsccCertificatemanagerAcmeExternalAccountBindingExpirationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeExternalAccountBinding.DataAwsccCertificatemanagerAcmeExternalAccountBindingExpirationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeExternalAccountBinding.DataAwsccCertificatemanagerAcmeExternalAccountBindingExpirationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeExternalAccountBinding.DataAwsccCertificatemanagerAcmeExternalAccountBindingExpirationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeExternalAccountBinding.DataAwsccCertificatemanagerAcmeExternalAccountBindingExpirationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeExternalAccountBinding.DataAwsccCertificatemanagerAcmeExternalAccountBindingExpirationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeExternalAccountBinding.DataAwsccCertificatemanagerAcmeExternalAccountBindingExpirationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeExternalAccountBinding.DataAwsccCertificatemanagerAcmeExternalAccountBindingExpirationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeExternalAccountBinding.DataAwsccCertificatemanagerAcmeExternalAccountBindingExpirationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeExternalAccountBinding.DataAwsccCertificatemanagerAcmeExternalAccountBindingExpirationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeExternalAccountBinding.DataAwsccCertificatemanagerAcmeExternalAccountBindingExpirationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeExternalAccountBinding.DataAwsccCertificatemanagerAcmeExternalAccountBindingExpirationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeExternalAccountBinding.DataAwsccCertificatemanagerAcmeExternalAccountBindingExpirationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeExternalAccountBinding.DataAwsccCertificatemanagerAcmeExternalAccountBindingExpirationOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeExternalAccountBinding.DataAwsccCertificatemanagerAcmeExternalAccountBindingExpirationOutputReference.property.value">value</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeExternalAccountBinding.DataAwsccCertificatemanagerAcmeExternalAccountBindingExpirationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeExternalAccountBinding.DataAwsccCertificatemanagerAcmeExternalAccountBindingExpiration">DataAwsccCertificatemanagerAcmeExternalAccountBindingExpiration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeExternalAccountBinding.DataAwsccCertificatemanagerAcmeExternalAccountBindingExpirationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeExternalAccountBinding.DataAwsccCertificatemanagerAcmeExternalAccountBindingExpirationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeExternalAccountBinding.DataAwsccCertificatemanagerAcmeExternalAccountBindingExpirationOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeExternalAccountBinding.DataAwsccCertificatemanagerAcmeExternalAccountBindingExpirationOutputReference.property.value"></a>

```typescript
public readonly value: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeExternalAccountBinding.DataAwsccCertificatemanagerAcmeExternalAccountBindingExpirationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccCertificatemanagerAcmeExternalAccountBindingExpiration;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeExternalAccountBinding.DataAwsccCertificatemanagerAcmeExternalAccountBindingExpiration">DataAwsccCertificatemanagerAcmeExternalAccountBindingExpiration</a>

---


### DataAwsccCertificatemanagerAcmeExternalAccountBindingTagsList <a name="DataAwsccCertificatemanagerAcmeExternalAccountBindingTagsList" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeExternalAccountBinding.DataAwsccCertificatemanagerAcmeExternalAccountBindingTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeExternalAccountBinding.DataAwsccCertificatemanagerAcmeExternalAccountBindingTagsList.Initializer"></a>

```typescript
import { dataAwsccCertificatemanagerAcmeExternalAccountBinding } from '@cdktn/provider-awscc'

new dataAwsccCertificatemanagerAcmeExternalAccountBinding.DataAwsccCertificatemanagerAcmeExternalAccountBindingTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeExternalAccountBinding.DataAwsccCertificatemanagerAcmeExternalAccountBindingTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeExternalAccountBinding.DataAwsccCertificatemanagerAcmeExternalAccountBindingTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeExternalAccountBinding.DataAwsccCertificatemanagerAcmeExternalAccountBindingTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeExternalAccountBinding.DataAwsccCertificatemanagerAcmeExternalAccountBindingTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeExternalAccountBinding.DataAwsccCertificatemanagerAcmeExternalAccountBindingTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeExternalAccountBinding.DataAwsccCertificatemanagerAcmeExternalAccountBindingTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeExternalAccountBinding.DataAwsccCertificatemanagerAcmeExternalAccountBindingTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeExternalAccountBinding.DataAwsccCertificatemanagerAcmeExternalAccountBindingTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeExternalAccountBinding.DataAwsccCertificatemanagerAcmeExternalAccountBindingTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeExternalAccountBinding.DataAwsccCertificatemanagerAcmeExternalAccountBindingTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeExternalAccountBinding.DataAwsccCertificatemanagerAcmeExternalAccountBindingTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeExternalAccountBinding.DataAwsccCertificatemanagerAcmeExternalAccountBindingTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeExternalAccountBinding.DataAwsccCertificatemanagerAcmeExternalAccountBindingTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeExternalAccountBinding.DataAwsccCertificatemanagerAcmeExternalAccountBindingTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeExternalAccountBinding.DataAwsccCertificatemanagerAcmeExternalAccountBindingTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeExternalAccountBinding.DataAwsccCertificatemanagerAcmeExternalAccountBindingTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeExternalAccountBinding.DataAwsccCertificatemanagerAcmeExternalAccountBindingTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeExternalAccountBinding.DataAwsccCertificatemanagerAcmeExternalAccountBindingTagsList.get"></a>

```typescript
public get(index: number): DataAwsccCertificatemanagerAcmeExternalAccountBindingTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeExternalAccountBinding.DataAwsccCertificatemanagerAcmeExternalAccountBindingTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeExternalAccountBinding.DataAwsccCertificatemanagerAcmeExternalAccountBindingTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeExternalAccountBinding.DataAwsccCertificatemanagerAcmeExternalAccountBindingTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeExternalAccountBinding.DataAwsccCertificatemanagerAcmeExternalAccountBindingTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeExternalAccountBinding.DataAwsccCertificatemanagerAcmeExternalAccountBindingTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccCertificatemanagerAcmeExternalAccountBindingTagsOutputReference <a name="DataAwsccCertificatemanagerAcmeExternalAccountBindingTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeExternalAccountBinding.DataAwsccCertificatemanagerAcmeExternalAccountBindingTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeExternalAccountBinding.DataAwsccCertificatemanagerAcmeExternalAccountBindingTagsOutputReference.Initializer"></a>

```typescript
import { dataAwsccCertificatemanagerAcmeExternalAccountBinding } from '@cdktn/provider-awscc'

new dataAwsccCertificatemanagerAcmeExternalAccountBinding.DataAwsccCertificatemanagerAcmeExternalAccountBindingTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeExternalAccountBinding.DataAwsccCertificatemanagerAcmeExternalAccountBindingTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeExternalAccountBinding.DataAwsccCertificatemanagerAcmeExternalAccountBindingTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeExternalAccountBinding.DataAwsccCertificatemanagerAcmeExternalAccountBindingTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeExternalAccountBinding.DataAwsccCertificatemanagerAcmeExternalAccountBindingTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeExternalAccountBinding.DataAwsccCertificatemanagerAcmeExternalAccountBindingTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeExternalAccountBinding.DataAwsccCertificatemanagerAcmeExternalAccountBindingTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeExternalAccountBinding.DataAwsccCertificatemanagerAcmeExternalAccountBindingTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeExternalAccountBinding.DataAwsccCertificatemanagerAcmeExternalAccountBindingTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeExternalAccountBinding.DataAwsccCertificatemanagerAcmeExternalAccountBindingTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeExternalAccountBinding.DataAwsccCertificatemanagerAcmeExternalAccountBindingTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeExternalAccountBinding.DataAwsccCertificatemanagerAcmeExternalAccountBindingTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeExternalAccountBinding.DataAwsccCertificatemanagerAcmeExternalAccountBindingTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeExternalAccountBinding.DataAwsccCertificatemanagerAcmeExternalAccountBindingTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeExternalAccountBinding.DataAwsccCertificatemanagerAcmeExternalAccountBindingTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeExternalAccountBinding.DataAwsccCertificatemanagerAcmeExternalAccountBindingTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeExternalAccountBinding.DataAwsccCertificatemanagerAcmeExternalAccountBindingTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeExternalAccountBinding.DataAwsccCertificatemanagerAcmeExternalAccountBindingTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeExternalAccountBinding.DataAwsccCertificatemanagerAcmeExternalAccountBindingTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeExternalAccountBinding.DataAwsccCertificatemanagerAcmeExternalAccountBindingTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeExternalAccountBinding.DataAwsccCertificatemanagerAcmeExternalAccountBindingTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeExternalAccountBinding.DataAwsccCertificatemanagerAcmeExternalAccountBindingTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeExternalAccountBinding.DataAwsccCertificatemanagerAcmeExternalAccountBindingTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeExternalAccountBinding.DataAwsccCertificatemanagerAcmeExternalAccountBindingTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeExternalAccountBinding.DataAwsccCertificatemanagerAcmeExternalAccountBindingTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeExternalAccountBinding.DataAwsccCertificatemanagerAcmeExternalAccountBindingTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeExternalAccountBinding.DataAwsccCertificatemanagerAcmeExternalAccountBindingTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeExternalAccountBinding.DataAwsccCertificatemanagerAcmeExternalAccountBindingTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeExternalAccountBinding.DataAwsccCertificatemanagerAcmeExternalAccountBindingTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeExternalAccountBinding.DataAwsccCertificatemanagerAcmeExternalAccountBindingTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeExternalAccountBinding.DataAwsccCertificatemanagerAcmeExternalAccountBindingTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeExternalAccountBinding.DataAwsccCertificatemanagerAcmeExternalAccountBindingTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeExternalAccountBinding.DataAwsccCertificatemanagerAcmeExternalAccountBindingTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeExternalAccountBinding.DataAwsccCertificatemanagerAcmeExternalAccountBindingTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeExternalAccountBinding.DataAwsccCertificatemanagerAcmeExternalAccountBindingTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeExternalAccountBinding.DataAwsccCertificatemanagerAcmeExternalAccountBindingTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeExternalAccountBinding.DataAwsccCertificatemanagerAcmeExternalAccountBindingTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeExternalAccountBinding.DataAwsccCertificatemanagerAcmeExternalAccountBindingTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeExternalAccountBinding.DataAwsccCertificatemanagerAcmeExternalAccountBindingTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeExternalAccountBinding.DataAwsccCertificatemanagerAcmeExternalAccountBindingTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeExternalAccountBinding.DataAwsccCertificatemanagerAcmeExternalAccountBindingTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeExternalAccountBinding.DataAwsccCertificatemanagerAcmeExternalAccountBindingTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeExternalAccountBinding.DataAwsccCertificatemanagerAcmeExternalAccountBindingTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeExternalAccountBinding.DataAwsccCertificatemanagerAcmeExternalAccountBindingTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeExternalAccountBinding.DataAwsccCertificatemanagerAcmeExternalAccountBindingTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeExternalAccountBinding.DataAwsccCertificatemanagerAcmeExternalAccountBindingTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeExternalAccountBinding.DataAwsccCertificatemanagerAcmeExternalAccountBindingTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeExternalAccountBinding.DataAwsccCertificatemanagerAcmeExternalAccountBindingTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeExternalAccountBinding.DataAwsccCertificatemanagerAcmeExternalAccountBindingTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeExternalAccountBinding.DataAwsccCertificatemanagerAcmeExternalAccountBindingTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeExternalAccountBinding.DataAwsccCertificatemanagerAcmeExternalAccountBindingTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeExternalAccountBinding.DataAwsccCertificatemanagerAcmeExternalAccountBindingTags">DataAwsccCertificatemanagerAcmeExternalAccountBindingTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeExternalAccountBinding.DataAwsccCertificatemanagerAcmeExternalAccountBindingTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeExternalAccountBinding.DataAwsccCertificatemanagerAcmeExternalAccountBindingTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeExternalAccountBinding.DataAwsccCertificatemanagerAcmeExternalAccountBindingTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeExternalAccountBinding.DataAwsccCertificatemanagerAcmeExternalAccountBindingTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeExternalAccountBinding.DataAwsccCertificatemanagerAcmeExternalAccountBindingTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccCertificatemanagerAcmeExternalAccountBindingTags;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeExternalAccountBinding.DataAwsccCertificatemanagerAcmeExternalAccountBindingTags">DataAwsccCertificatemanagerAcmeExternalAccountBindingTags</a>

---



