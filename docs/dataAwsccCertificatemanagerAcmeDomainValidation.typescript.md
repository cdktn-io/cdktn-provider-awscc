# `dataAwsccCertificatemanagerAcmeDomainValidation` Submodule <a name="`dataAwsccCertificatemanagerAcmeDomainValidation` Submodule" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccCertificatemanagerAcmeDomainValidation <a name="DataAwsccCertificatemanagerAcmeDomainValidation" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/certificatemanager_acme_domain_validation awscc_certificatemanager_acme_domain_validation}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidation.Initializer"></a>

```typescript
import { dataAwsccCertificatemanagerAcmeDomainValidation } from '@cdktn/provider-awscc'

new dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidation(scope: Construct, id: string, config: DataAwsccCertificatemanagerAcmeDomainValidationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidation.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidation.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidation.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationConfig">DataAwsccCertificatemanagerAcmeDomainValidationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidation.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidation.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidation.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationConfig">DataAwsccCertificatemanagerAcmeDomainValidationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidation.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidation.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidation.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidation.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidation.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidation.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidation.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidation.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidation.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidation.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidation.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidation.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidation.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidation.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidation.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidation.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidation.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidation.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidation.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidation.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidation.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidation.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidation.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidation.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidation.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidation.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidation.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidation.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidation.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidation.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidation.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidation.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidation.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidation.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidation.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidation.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidation.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidation.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidation.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidation.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidation.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidation.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidation.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccCertificatemanagerAcmeDomainValidation resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidation.isConstruct"></a>

```typescript
import { dataAwsccCertificatemanagerAcmeDomainValidation } from '@cdktn/provider-awscc'

dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidation.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidation.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidation.isTerraformElement"></a>

```typescript
import { dataAwsccCertificatemanagerAcmeDomainValidation } from '@cdktn/provider-awscc'

dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidation.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidation.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidation.isTerraformDataSource"></a>

```typescript
import { dataAwsccCertificatemanagerAcmeDomainValidation } from '@cdktn/provider-awscc'

dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidation.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidation.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidation.generateConfigForImport"></a>

```typescript
import { dataAwsccCertificatemanagerAcmeDomainValidation } from '@cdktn/provider-awscc'

dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidation.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccCertificatemanagerAcmeDomainValidation resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidation.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidation.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccCertificatemanagerAcmeDomainValidation to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccCertificatemanagerAcmeDomainValidation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/certificatemanager_acme_domain_validation#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidation.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccCertificatemanagerAcmeDomainValidation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidation.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidation.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidation.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidation.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidation.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidation.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidation.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidation.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidation.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidation.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidation.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidation.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidation.property.acmeEndpointArn">acmeEndpointArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidation.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidation.property.domainName">domainName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidation.property.prevalidationOptions">prevalidationOptions</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsOutputReference">DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidation.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationTagsList">DataAwsccCertificatemanagerAcmeDomainValidationTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidation.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidation.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidation.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidation.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidation.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidation.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidation.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidation.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidation.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidation.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidation.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidation.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidation.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidation.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `acmeEndpointArn`<sup>Required</sup> <a name="acmeEndpointArn" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidation.property.acmeEndpointArn"></a>

```typescript
public readonly acmeEndpointArn: string;
```

- *Type:* string

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidation.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `domainName`<sup>Required</sup> <a name="domainName" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidation.property.domainName"></a>

```typescript
public readonly domainName: string;
```

- *Type:* string

---

##### `prevalidationOptions`<sup>Required</sup> <a name="prevalidationOptions" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidation.property.prevalidationOptions"></a>

```typescript
public readonly prevalidationOptions: DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsOutputReference">DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidation.property.tags"></a>

```typescript
public readonly tags: DataAwsccCertificatemanagerAcmeDomainValidationTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationTagsList">DataAwsccCertificatemanagerAcmeDomainValidationTagsList</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidation.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidation.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidation.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidation.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccCertificatemanagerAcmeDomainValidationConfig <a name="DataAwsccCertificatemanagerAcmeDomainValidationConfig" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationConfig.Initializer"></a>

```typescript
import { dataAwsccCertificatemanagerAcmeDomainValidation } from '@cdktn/provider-awscc'

const dataAwsccCertificatemanagerAcmeDomainValidationConfig: dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/certificatemanager_acme_domain_validation#id DataAwsccCertificatemanagerAcmeDomainValidation#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptions <a name="DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptions" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptions.Initializer"></a>

```typescript
import { dataAwsccCertificatemanagerAcmeDomainValidation } from '@cdktn/provider-awscc'

const dataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptions: dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptions = { ... }
```


### DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidation <a name="DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidation" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidation.Initializer"></a>

```typescript
import { dataAwsccCertificatemanagerAcmeDomainValidation } from '@cdktn/provider-awscc'

const dataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidation: dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidation = { ... }
```


### DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScope <a name="DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScope" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScope"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScope.Initializer"></a>

```typescript
import { dataAwsccCertificatemanagerAcmeDomainValidation } from '@cdktn/provider-awscc'

const dataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScope: dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScope = { ... }
```


### DataAwsccCertificatemanagerAcmeDomainValidationTags <a name="DataAwsccCertificatemanagerAcmeDomainValidationTags" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationTags.Initializer"></a>

```typescript
import { dataAwsccCertificatemanagerAcmeDomainValidation } from '@cdktn/provider-awscc'

const dataAwsccCertificatemanagerAcmeDomainValidationTags: dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationTags = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScopeOutputReference <a name="DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScopeOutputReference" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScopeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScopeOutputReference.Initializer"></a>

```typescript
import { dataAwsccCertificatemanagerAcmeDomainValidation } from '@cdktn/provider-awscc'

new dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScopeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScopeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScopeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScopeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScopeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScopeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScopeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScopeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScopeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScopeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScopeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScopeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScopeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScopeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScopeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScopeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScopeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScopeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScopeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScopeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScopeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScopeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScopeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScopeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScopeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScopeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScopeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScopeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScopeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScopeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScopeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScopeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScopeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScopeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScopeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScopeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScopeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScopeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScopeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScopeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScopeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScopeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScopeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScopeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScopeOutputReference.property.exactDomain">exactDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScopeOutputReference.property.subdomains">subdomains</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScopeOutputReference.property.wildcards">wildcards</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScopeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScope">DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScope</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScopeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScopeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `exactDomain`<sup>Required</sup> <a name="exactDomain" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScopeOutputReference.property.exactDomain"></a>

```typescript
public readonly exactDomain: string;
```

- *Type:* string

---

##### `subdomains`<sup>Required</sup> <a name="subdomains" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScopeOutputReference.property.subdomains"></a>

```typescript
public readonly subdomains: string;
```

- *Type:* string

---

##### `wildcards`<sup>Required</sup> <a name="wildcards" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScopeOutputReference.property.wildcards"></a>

```typescript
public readonly wildcards: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScopeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScope;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScope">DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScope</a>

---


### DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationOutputReference <a name="DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationOutputReference" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationOutputReference.Initializer"></a>

```typescript
import { dataAwsccCertificatemanagerAcmeDomainValidation } from '@cdktn/provider-awscc'

new dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationOutputReference.property.domainScope">domainScope</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScopeOutputReference">DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScopeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationOutputReference.property.hostedZoneId">hostedZoneId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidation">DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidation</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `domainScope`<sup>Required</sup> <a name="domainScope" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationOutputReference.property.domainScope"></a>

```typescript
public readonly domainScope: DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScopeOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScopeOutputReference">DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScopeOutputReference</a>

---

##### `hostedZoneId`<sup>Required</sup> <a name="hostedZoneId" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationOutputReference.property.hostedZoneId"></a>

```typescript
public readonly hostedZoneId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidation;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidation">DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidation</a>

---


### DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsOutputReference <a name="DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsOutputReference" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsOutputReference.Initializer"></a>

```typescript
import { dataAwsccCertificatemanagerAcmeDomainValidation } from '@cdktn/provider-awscc'

new dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsOutputReference.property.dnsPrevalidation">dnsPrevalidation</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationOutputReference">DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptions">DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dnsPrevalidation`<sup>Required</sup> <a name="dnsPrevalidation" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsOutputReference.property.dnsPrevalidation"></a>

```typescript
public readonly dnsPrevalidation: DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationOutputReference">DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptions;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptions">DataAwsccCertificatemanagerAcmeDomainValidationPrevalidationOptions</a>

---


### DataAwsccCertificatemanagerAcmeDomainValidationTagsList <a name="DataAwsccCertificatemanagerAcmeDomainValidationTagsList" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationTagsList.Initializer"></a>

```typescript
import { dataAwsccCertificatemanagerAcmeDomainValidation } from '@cdktn/provider-awscc'

new dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationTagsList.get"></a>

```typescript
public get(index: number): DataAwsccCertificatemanagerAcmeDomainValidationTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccCertificatemanagerAcmeDomainValidationTagsOutputReference <a name="DataAwsccCertificatemanagerAcmeDomainValidationTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationTagsOutputReference.Initializer"></a>

```typescript
import { dataAwsccCertificatemanagerAcmeDomainValidation } from '@cdktn/provider-awscc'

new dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationTags">DataAwsccCertificatemanagerAcmeDomainValidationTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccCertificatemanagerAcmeDomainValidationTags;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCertificatemanagerAcmeDomainValidation.DataAwsccCertificatemanagerAcmeDomainValidationTags">DataAwsccCertificatemanagerAcmeDomainValidationTags</a>

---



