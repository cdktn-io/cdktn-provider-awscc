# `dataAwsccAcmpcaCertificateAuthority` Submodule <a name="`dataAwsccAcmpcaCertificateAuthority` Submodule" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccAcmpcaCertificateAuthority <a name="DataAwsccAcmpcaCertificateAuthority" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthority"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/acmpca_certificate_authority awscc_acmpca_certificate_authority}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthority.Initializer"></a>

```typescript
import { dataAwsccAcmpcaCertificateAuthority } from '@cdktn/provider-awscc'

new dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthority(scope: Construct, id: string, config: DataAwsccAcmpcaCertificateAuthorityConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthority.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthority.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthority.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityConfig">DataAwsccAcmpcaCertificateAuthorityConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthority.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthority.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthority.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityConfig">DataAwsccAcmpcaCertificateAuthorityConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthority.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthority.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthority.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthority.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthority.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthority.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthority.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthority.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthority.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthority.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthority.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthority.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthority.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthority.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthority.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthority.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthority.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthority.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthority.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthority.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthority.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthority.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthority.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthority.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthority.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthority.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthority.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthority.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthority.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthority.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthority.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthority.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthority.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthority.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthority.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthority.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthority.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthority.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthority.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthority.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthority.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthority.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthority.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthority.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthority.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthority.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthority.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthority.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthority.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthority.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthority.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthority.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthority.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthority.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccAcmpcaCertificateAuthority resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthority.isConstruct"></a>

```typescript
import { dataAwsccAcmpcaCertificateAuthority } from '@cdktn/provider-awscc'

dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthority.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthority.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthority.isTerraformElement"></a>

```typescript
import { dataAwsccAcmpcaCertificateAuthority } from '@cdktn/provider-awscc'

dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthority.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthority.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthority.isTerraformDataSource"></a>

```typescript
import { dataAwsccAcmpcaCertificateAuthority } from '@cdktn/provider-awscc'

dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthority.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthority.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthority.generateConfigForImport"></a>

```typescript
import { dataAwsccAcmpcaCertificateAuthority } from '@cdktn/provider-awscc'

dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthority.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccAcmpcaCertificateAuthority resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthority.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthority.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccAcmpcaCertificateAuthority to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthority.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccAcmpcaCertificateAuthority that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/acmpca_certificate_authority#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthority.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccAcmpcaCertificateAuthority to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthority.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthority.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthority.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthority.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthority.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthority.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthority.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthority.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthority.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthority.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthority.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthority.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthority.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthority.property.certificateSigningRequest">certificateSigningRequest</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthority.property.csrExtensions">csrExtensions</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsOutputReference">DataAwsccAcmpcaCertificateAuthorityCsrExtensionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthority.property.keyAlgorithm">keyAlgorithm</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthority.property.keyStorageSecurityStandard">keyStorageSecurityStandard</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthority.property.revocationConfiguration">revocationConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityRevocationConfigurationOutputReference">DataAwsccAcmpcaCertificateAuthorityRevocationConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthority.property.signingAlgorithm">signingAlgorithm</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthority.property.subject">subject</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthoritySubjectOutputReference">DataAwsccAcmpcaCertificateAuthoritySubjectOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthority.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityTagsList">DataAwsccAcmpcaCertificateAuthorityTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthority.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthority.property.usageMode">usageMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthority.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthority.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthority.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthority.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthority.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthority.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthority.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthority.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthority.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthority.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthority.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthority.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthority.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthority.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthority.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `certificateSigningRequest`<sup>Required</sup> <a name="certificateSigningRequest" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthority.property.certificateSigningRequest"></a>

```typescript
public readonly certificateSigningRequest: string;
```

- *Type:* string

---

##### `csrExtensions`<sup>Required</sup> <a name="csrExtensions" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthority.property.csrExtensions"></a>

```typescript
public readonly csrExtensions: DataAwsccAcmpcaCertificateAuthorityCsrExtensionsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsOutputReference">DataAwsccAcmpcaCertificateAuthorityCsrExtensionsOutputReference</a>

---

##### `keyAlgorithm`<sup>Required</sup> <a name="keyAlgorithm" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthority.property.keyAlgorithm"></a>

```typescript
public readonly keyAlgorithm: string;
```

- *Type:* string

---

##### `keyStorageSecurityStandard`<sup>Required</sup> <a name="keyStorageSecurityStandard" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthority.property.keyStorageSecurityStandard"></a>

```typescript
public readonly keyStorageSecurityStandard: string;
```

- *Type:* string

---

##### `revocationConfiguration`<sup>Required</sup> <a name="revocationConfiguration" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthority.property.revocationConfiguration"></a>

```typescript
public readonly revocationConfiguration: DataAwsccAcmpcaCertificateAuthorityRevocationConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityRevocationConfigurationOutputReference">DataAwsccAcmpcaCertificateAuthorityRevocationConfigurationOutputReference</a>

---

##### `signingAlgorithm`<sup>Required</sup> <a name="signingAlgorithm" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthority.property.signingAlgorithm"></a>

```typescript
public readonly signingAlgorithm: string;
```

- *Type:* string

---

##### `subject`<sup>Required</sup> <a name="subject" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthority.property.subject"></a>

```typescript
public readonly subject: DataAwsccAcmpcaCertificateAuthoritySubjectOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthoritySubjectOutputReference">DataAwsccAcmpcaCertificateAuthoritySubjectOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthority.property.tags"></a>

```typescript
public readonly tags: DataAwsccAcmpcaCertificateAuthorityTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityTagsList">DataAwsccAcmpcaCertificateAuthorityTagsList</a>

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthority.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `usageMode`<sup>Required</sup> <a name="usageMode" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthority.property.usageMode"></a>

```typescript
public readonly usageMode: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthority.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthority.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthority.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthority.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccAcmpcaCertificateAuthorityConfig <a name="DataAwsccAcmpcaCertificateAuthorityConfig" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityConfig.Initializer"></a>

```typescript
import { dataAwsccAcmpcaCertificateAuthority } from '@cdktn/provider-awscc'

const dataAwsccAcmpcaCertificateAuthorityConfig: dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/acmpca_certificate_authority#id DataAwsccAcmpcaCertificateAuthority#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccAcmpcaCertificateAuthorityCsrExtensions <a name="DataAwsccAcmpcaCertificateAuthorityCsrExtensions" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensions.Initializer"></a>

```typescript
import { dataAwsccAcmpcaCertificateAuthority } from '@cdktn/provider-awscc'

const dataAwsccAcmpcaCertificateAuthorityCsrExtensions: dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensions = { ... }
```


### DataAwsccAcmpcaCertificateAuthorityCsrExtensionsKeyUsage <a name="DataAwsccAcmpcaCertificateAuthorityCsrExtensionsKeyUsage" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsKeyUsage"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsKeyUsage.Initializer"></a>

```typescript
import { dataAwsccAcmpcaCertificateAuthority } from '@cdktn/provider-awscc'

const dataAwsccAcmpcaCertificateAuthorityCsrExtensionsKeyUsage: dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsKeyUsage = { ... }
```


### DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccess <a name="DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccess" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccess"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccess.Initializer"></a>

```typescript
import { dataAwsccAcmpcaCertificateAuthority } from '@cdktn/provider-awscc'

const dataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccess: dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccess = { ... }
```


### DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocation <a name="DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocation" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocation.Initializer"></a>

```typescript
import { dataAwsccAcmpcaCertificateAuthority } from '@cdktn/provider-awscc'

const dataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocation: dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocation = { ... }
```


### DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryName <a name="DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryName" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryName"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryName.Initializer"></a>

```typescript
import { dataAwsccAcmpcaCertificateAuthority } from '@cdktn/provider-awscc'

const dataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryName: dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryName = { ... }
```


### DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributes <a name="DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributes" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributes.Initializer"></a>

```typescript
import { dataAwsccAcmpcaCertificateAuthority } from '@cdktn/provider-awscc'

const dataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributes: dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributes = { ... }
```


### DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationEdiPartyName <a name="DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationEdiPartyName" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationEdiPartyName"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationEdiPartyName.Initializer"></a>

```typescript
import { dataAwsccAcmpcaCertificateAuthority } from '@cdktn/provider-awscc'

const dataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationEdiPartyName: dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationEdiPartyName = { ... }
```


### DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOtherName <a name="DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOtherName" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOtherName"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOtherName.Initializer"></a>

```typescript
import { dataAwsccAcmpcaCertificateAuthority } from '@cdktn/provider-awscc'

const dataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOtherName: dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOtherName = { ... }
```


### DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessMethod <a name="DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessMethod" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessMethod"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessMethod.Initializer"></a>

```typescript
import { dataAwsccAcmpcaCertificateAuthority } from '@cdktn/provider-awscc'

const dataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessMethod: dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessMethod = { ... }
```


### DataAwsccAcmpcaCertificateAuthorityRevocationConfiguration <a name="DataAwsccAcmpcaCertificateAuthorityRevocationConfiguration" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityRevocationConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityRevocationConfiguration.Initializer"></a>

```typescript
import { dataAwsccAcmpcaCertificateAuthority } from '@cdktn/provider-awscc'

const dataAwsccAcmpcaCertificateAuthorityRevocationConfiguration: dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityRevocationConfiguration = { ... }
```


### DataAwsccAcmpcaCertificateAuthorityRevocationConfigurationCrlConfiguration <a name="DataAwsccAcmpcaCertificateAuthorityRevocationConfigurationCrlConfiguration" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityRevocationConfigurationCrlConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityRevocationConfigurationCrlConfiguration.Initializer"></a>

```typescript
import { dataAwsccAcmpcaCertificateAuthority } from '@cdktn/provider-awscc'

const dataAwsccAcmpcaCertificateAuthorityRevocationConfigurationCrlConfiguration: dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityRevocationConfigurationCrlConfiguration = { ... }
```


### DataAwsccAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationCrlDistributionPointExtensionConfiguration <a name="DataAwsccAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationCrlDistributionPointExtensionConfiguration" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationCrlDistributionPointExtensionConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationCrlDistributionPointExtensionConfiguration.Initializer"></a>

```typescript
import { dataAwsccAcmpcaCertificateAuthority } from '@cdktn/provider-awscc'

const dataAwsccAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationCrlDistributionPointExtensionConfiguration: dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationCrlDistributionPointExtensionConfiguration = { ... }
```


### DataAwsccAcmpcaCertificateAuthorityRevocationConfigurationOcspConfiguration <a name="DataAwsccAcmpcaCertificateAuthorityRevocationConfigurationOcspConfiguration" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityRevocationConfigurationOcspConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityRevocationConfigurationOcspConfiguration.Initializer"></a>

```typescript
import { dataAwsccAcmpcaCertificateAuthority } from '@cdktn/provider-awscc'

const dataAwsccAcmpcaCertificateAuthorityRevocationConfigurationOcspConfiguration: dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityRevocationConfigurationOcspConfiguration = { ... }
```


### DataAwsccAcmpcaCertificateAuthoritySubject <a name="DataAwsccAcmpcaCertificateAuthoritySubject" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthoritySubject"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthoritySubject.Initializer"></a>

```typescript
import { dataAwsccAcmpcaCertificateAuthority } from '@cdktn/provider-awscc'

const dataAwsccAcmpcaCertificateAuthoritySubject: dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthoritySubject = { ... }
```


### DataAwsccAcmpcaCertificateAuthoritySubjectCustomAttributes <a name="DataAwsccAcmpcaCertificateAuthoritySubjectCustomAttributes" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthoritySubjectCustomAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthoritySubjectCustomAttributes.Initializer"></a>

```typescript
import { dataAwsccAcmpcaCertificateAuthority } from '@cdktn/provider-awscc'

const dataAwsccAcmpcaCertificateAuthoritySubjectCustomAttributes: dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthoritySubjectCustomAttributes = { ... }
```


### DataAwsccAcmpcaCertificateAuthorityTags <a name="DataAwsccAcmpcaCertificateAuthorityTags" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityTags.Initializer"></a>

```typescript
import { dataAwsccAcmpcaCertificateAuthority } from '@cdktn/provider-awscc'

const dataAwsccAcmpcaCertificateAuthorityTags: dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityTags = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccAcmpcaCertificateAuthorityCsrExtensionsKeyUsageOutputReference <a name="DataAwsccAcmpcaCertificateAuthorityCsrExtensionsKeyUsageOutputReference" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsKeyUsageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsKeyUsageOutputReference.Initializer"></a>

```typescript
import { dataAwsccAcmpcaCertificateAuthority } from '@cdktn/provider-awscc'

new dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsKeyUsageOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsKeyUsageOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsKeyUsageOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsKeyUsageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsKeyUsageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsKeyUsageOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsKeyUsageOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsKeyUsageOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsKeyUsageOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsKeyUsageOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsKeyUsageOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsKeyUsageOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsKeyUsageOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsKeyUsageOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsKeyUsageOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsKeyUsageOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsKeyUsageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsKeyUsageOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsKeyUsageOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsKeyUsageOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsKeyUsageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsKeyUsageOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsKeyUsageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsKeyUsageOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsKeyUsageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsKeyUsageOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsKeyUsageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsKeyUsageOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsKeyUsageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsKeyUsageOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsKeyUsageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsKeyUsageOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsKeyUsageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsKeyUsageOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsKeyUsageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsKeyUsageOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsKeyUsageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsKeyUsageOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsKeyUsageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsKeyUsageOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsKeyUsageOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsKeyUsageOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsKeyUsageOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsKeyUsageOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsKeyUsageOutputReference.property.crlSign">crlSign</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsKeyUsageOutputReference.property.dataEncipherment">dataEncipherment</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsKeyUsageOutputReference.property.decipherOnly">decipherOnly</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsKeyUsageOutputReference.property.digitalSignature">digitalSignature</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsKeyUsageOutputReference.property.encipherOnly">encipherOnly</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsKeyUsageOutputReference.property.keyAgreement">keyAgreement</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsKeyUsageOutputReference.property.keyCertSign">keyCertSign</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsKeyUsageOutputReference.property.keyEncipherment">keyEncipherment</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsKeyUsageOutputReference.property.nonRepudiation">nonRepudiation</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsKeyUsageOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsKeyUsage">DataAwsccAcmpcaCertificateAuthorityCsrExtensionsKeyUsage</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsKeyUsageOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsKeyUsageOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `crlSign`<sup>Required</sup> <a name="crlSign" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsKeyUsageOutputReference.property.crlSign"></a>

```typescript
public readonly crlSign: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `dataEncipherment`<sup>Required</sup> <a name="dataEncipherment" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsKeyUsageOutputReference.property.dataEncipherment"></a>

```typescript
public readonly dataEncipherment: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `decipherOnly`<sup>Required</sup> <a name="decipherOnly" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsKeyUsageOutputReference.property.decipherOnly"></a>

```typescript
public readonly decipherOnly: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `digitalSignature`<sup>Required</sup> <a name="digitalSignature" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsKeyUsageOutputReference.property.digitalSignature"></a>

```typescript
public readonly digitalSignature: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `encipherOnly`<sup>Required</sup> <a name="encipherOnly" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsKeyUsageOutputReference.property.encipherOnly"></a>

```typescript
public readonly encipherOnly: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `keyAgreement`<sup>Required</sup> <a name="keyAgreement" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsKeyUsageOutputReference.property.keyAgreement"></a>

```typescript
public readonly keyAgreement: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `keyCertSign`<sup>Required</sup> <a name="keyCertSign" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsKeyUsageOutputReference.property.keyCertSign"></a>

```typescript
public readonly keyCertSign: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `keyEncipherment`<sup>Required</sup> <a name="keyEncipherment" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsKeyUsageOutputReference.property.keyEncipherment"></a>

```typescript
public readonly keyEncipherment: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `nonRepudiation`<sup>Required</sup> <a name="nonRepudiation" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsKeyUsageOutputReference.property.nonRepudiation"></a>

```typescript
public readonly nonRepudiation: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsKeyUsageOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccAcmpcaCertificateAuthorityCsrExtensionsKeyUsage;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsKeyUsage">DataAwsccAcmpcaCertificateAuthorityCsrExtensionsKeyUsage</a>

---


### DataAwsccAcmpcaCertificateAuthorityCsrExtensionsOutputReference <a name="DataAwsccAcmpcaCertificateAuthorityCsrExtensionsOutputReference" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsOutputReference.Initializer"></a>

```typescript
import { dataAwsccAcmpcaCertificateAuthority } from '@cdktn/provider-awscc'

new dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsOutputReference.property.keyUsage">keyUsage</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsKeyUsageOutputReference">DataAwsccAcmpcaCertificateAuthorityCsrExtensionsKeyUsageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsOutputReference.property.subjectInformationAccess">subjectInformationAccess</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessList">DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensions">DataAwsccAcmpcaCertificateAuthorityCsrExtensions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyUsage`<sup>Required</sup> <a name="keyUsage" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsOutputReference.property.keyUsage"></a>

```typescript
public readonly keyUsage: DataAwsccAcmpcaCertificateAuthorityCsrExtensionsKeyUsageOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsKeyUsageOutputReference">DataAwsccAcmpcaCertificateAuthorityCsrExtensionsKeyUsageOutputReference</a>

---

##### `subjectInformationAccess`<sup>Required</sup> <a name="subjectInformationAccess" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsOutputReference.property.subjectInformationAccess"></a>

```typescript
public readonly subjectInformationAccess: DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessList">DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccAcmpcaCertificateAuthorityCsrExtensions;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensions">DataAwsccAcmpcaCertificateAuthorityCsrExtensions</a>

---


### DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesList <a name="DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesList" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesList.Initializer"></a>

```typescript
import { dataAwsccAcmpcaCertificateAuthority } from '@cdktn/provider-awscc'

new dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesList.get"></a>

```typescript
public get(index: number): DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesOutputReference <a name="DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesOutputReference" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesOutputReference.Initializer"></a>

```typescript
import { dataAwsccAcmpcaCertificateAuthority } from '@cdktn/provider-awscc'

new dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesOutputReference.property.objectIdentifier">objectIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributes">DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `objectIdentifier`<sup>Required</sup> <a name="objectIdentifier" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesOutputReference.property.objectIdentifier"></a>

```typescript
public readonly objectIdentifier: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributes;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributes">DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributes</a>

---


### DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference <a name="DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.Initializer"></a>

```typescript
import { dataAwsccAcmpcaCertificateAuthority } from '@cdktn/provider-awscc'

new dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.property.commonName">commonName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.property.country">country</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.property.customAttributes">customAttributes</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesList">DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.property.distinguishedNameQualifier">distinguishedNameQualifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.property.generationQualifier">generationQualifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.property.givenName">givenName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.property.initials">initials</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.property.locality">locality</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.property.organization">organization</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.property.organizationalUnit">organizationalUnit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.property.pseudonym">pseudonym</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.property.serialNumber">serialNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.property.surname">surname</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.property.title">title</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryName">DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryName</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `commonName`<sup>Required</sup> <a name="commonName" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.property.commonName"></a>

```typescript
public readonly commonName: string;
```

- *Type:* string

---

##### `country`<sup>Required</sup> <a name="country" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.property.country"></a>

```typescript
public readonly country: string;
```

- *Type:* string

---

##### `customAttributes`<sup>Required</sup> <a name="customAttributes" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.property.customAttributes"></a>

```typescript
public readonly customAttributes: DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesList">DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesList</a>

---

##### `distinguishedNameQualifier`<sup>Required</sup> <a name="distinguishedNameQualifier" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.property.distinguishedNameQualifier"></a>

```typescript
public readonly distinguishedNameQualifier: string;
```

- *Type:* string

---

##### `generationQualifier`<sup>Required</sup> <a name="generationQualifier" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.property.generationQualifier"></a>

```typescript
public readonly generationQualifier: string;
```

- *Type:* string

---

##### `givenName`<sup>Required</sup> <a name="givenName" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.property.givenName"></a>

```typescript
public readonly givenName: string;
```

- *Type:* string

---

##### `initials`<sup>Required</sup> <a name="initials" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.property.initials"></a>

```typescript
public readonly initials: string;
```

- *Type:* string

---

##### `locality`<sup>Required</sup> <a name="locality" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.property.locality"></a>

```typescript
public readonly locality: string;
```

- *Type:* string

---

##### `organization`<sup>Required</sup> <a name="organization" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.property.organization"></a>

```typescript
public readonly organization: string;
```

- *Type:* string

---

##### `organizationalUnit`<sup>Required</sup> <a name="organizationalUnit" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.property.organizationalUnit"></a>

```typescript
public readonly organizationalUnit: string;
```

- *Type:* string

---

##### `pseudonym`<sup>Required</sup> <a name="pseudonym" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.property.pseudonym"></a>

```typescript
public readonly pseudonym: string;
```

- *Type:* string

---

##### `serialNumber`<sup>Required</sup> <a name="serialNumber" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.property.serialNumber"></a>

```typescript
public readonly serialNumber: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `surname`<sup>Required</sup> <a name="surname" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.property.surname"></a>

```typescript
public readonly surname: string;
```

- *Type:* string

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryName;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryName">DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryName</a>

---


### DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationEdiPartyNameOutputReference <a name="DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationEdiPartyNameOutputReference" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationEdiPartyNameOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationEdiPartyNameOutputReference.Initializer"></a>

```typescript
import { dataAwsccAcmpcaCertificateAuthority } from '@cdktn/provider-awscc'

new dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationEdiPartyNameOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationEdiPartyNameOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationEdiPartyNameOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationEdiPartyNameOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationEdiPartyNameOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationEdiPartyNameOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationEdiPartyNameOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationEdiPartyNameOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationEdiPartyNameOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationEdiPartyNameOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationEdiPartyNameOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationEdiPartyNameOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationEdiPartyNameOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationEdiPartyNameOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationEdiPartyNameOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationEdiPartyNameOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationEdiPartyNameOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationEdiPartyNameOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationEdiPartyNameOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationEdiPartyNameOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationEdiPartyNameOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationEdiPartyNameOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationEdiPartyNameOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationEdiPartyNameOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationEdiPartyNameOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationEdiPartyNameOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationEdiPartyNameOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationEdiPartyNameOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationEdiPartyNameOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationEdiPartyNameOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationEdiPartyNameOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationEdiPartyNameOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationEdiPartyNameOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationEdiPartyNameOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationEdiPartyNameOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationEdiPartyNameOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationEdiPartyNameOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationEdiPartyNameOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationEdiPartyNameOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationEdiPartyNameOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationEdiPartyNameOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationEdiPartyNameOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationEdiPartyNameOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationEdiPartyNameOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationEdiPartyNameOutputReference.property.nameAssigner">nameAssigner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationEdiPartyNameOutputReference.property.partyName">partyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationEdiPartyNameOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationEdiPartyName">DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationEdiPartyName</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationEdiPartyNameOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationEdiPartyNameOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameAssigner`<sup>Required</sup> <a name="nameAssigner" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationEdiPartyNameOutputReference.property.nameAssigner"></a>

```typescript
public readonly nameAssigner: string;
```

- *Type:* string

---

##### `partyName`<sup>Required</sup> <a name="partyName" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationEdiPartyNameOutputReference.property.partyName"></a>

```typescript
public readonly partyName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationEdiPartyNameOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationEdiPartyName;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationEdiPartyName">DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationEdiPartyName</a>

---


### DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOtherNameOutputReference <a name="DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOtherNameOutputReference" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOtherNameOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOtherNameOutputReference.Initializer"></a>

```typescript
import { dataAwsccAcmpcaCertificateAuthority } from '@cdktn/provider-awscc'

new dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOtherNameOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOtherNameOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOtherNameOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOtherNameOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOtherNameOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOtherNameOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOtherNameOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOtherNameOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOtherNameOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOtherNameOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOtherNameOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOtherNameOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOtherNameOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOtherNameOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOtherNameOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOtherNameOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOtherNameOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOtherNameOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOtherNameOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOtherNameOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOtherNameOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOtherNameOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOtherNameOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOtherNameOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOtherNameOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOtherNameOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOtherNameOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOtherNameOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOtherNameOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOtherNameOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOtherNameOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOtherNameOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOtherNameOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOtherNameOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOtherNameOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOtherNameOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOtherNameOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOtherNameOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOtherNameOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOtherNameOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOtherNameOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOtherNameOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOtherNameOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOtherNameOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOtherNameOutputReference.property.typeId">typeId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOtherNameOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOtherNameOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOtherName">DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOtherName</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOtherNameOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOtherNameOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `typeId`<sup>Required</sup> <a name="typeId" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOtherNameOutputReference.property.typeId"></a>

```typescript
public readonly typeId: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOtherNameOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOtherNameOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOtherName;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOtherName">DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOtherName</a>

---


### DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference <a name="DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference.Initializer"></a>

```typescript
import { dataAwsccAcmpcaCertificateAuthority } from '@cdktn/provider-awscc'

new dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference.property.directoryName">directoryName</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference">DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference.property.dnsName">dnsName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference.property.ediPartyName">ediPartyName</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationEdiPartyNameOutputReference">DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationEdiPartyNameOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference.property.ipAddress">ipAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference.property.otherName">otherName</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOtherNameOutputReference">DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOtherNameOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference.property.registeredId">registeredId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference.property.rfc822Name">rfc822Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference.property.uniformResourceIdentifier">uniformResourceIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocation">DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocation</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `directoryName`<sup>Required</sup> <a name="directoryName" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference.property.directoryName"></a>

```typescript
public readonly directoryName: DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference">DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference</a>

---

##### `dnsName`<sup>Required</sup> <a name="dnsName" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference.property.dnsName"></a>

```typescript
public readonly dnsName: string;
```

- *Type:* string

---

##### `ediPartyName`<sup>Required</sup> <a name="ediPartyName" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference.property.ediPartyName"></a>

```typescript
public readonly ediPartyName: DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationEdiPartyNameOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationEdiPartyNameOutputReference">DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationEdiPartyNameOutputReference</a>

---

##### `ipAddress`<sup>Required</sup> <a name="ipAddress" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference.property.ipAddress"></a>

```typescript
public readonly ipAddress: string;
```

- *Type:* string

---

##### `otherName`<sup>Required</sup> <a name="otherName" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference.property.otherName"></a>

```typescript
public readonly otherName: DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOtherNameOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOtherNameOutputReference">DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOtherNameOutputReference</a>

---

##### `registeredId`<sup>Required</sup> <a name="registeredId" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference.property.registeredId"></a>

```typescript
public readonly registeredId: string;
```

- *Type:* string

---

##### `rfc822Name`<sup>Required</sup> <a name="rfc822Name" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference.property.rfc822Name"></a>

```typescript
public readonly rfc822Name: string;
```

- *Type:* string

---

##### `uniformResourceIdentifier`<sup>Required</sup> <a name="uniformResourceIdentifier" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference.property.uniformResourceIdentifier"></a>

```typescript
public readonly uniformResourceIdentifier: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocation;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocation">DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocation</a>

---


### DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessMethodOutputReference <a name="DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessMethodOutputReference" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessMethodOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessMethodOutputReference.Initializer"></a>

```typescript
import { dataAwsccAcmpcaCertificateAuthority } from '@cdktn/provider-awscc'

new dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessMethodOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessMethodOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessMethodOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessMethodOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessMethodOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessMethodOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessMethodOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessMethodOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessMethodOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessMethodOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessMethodOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessMethodOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessMethodOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessMethodOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessMethodOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessMethodOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessMethodOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessMethodOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessMethodOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessMethodOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessMethodOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessMethodOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessMethodOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessMethodOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessMethodOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessMethodOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessMethodOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessMethodOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessMethodOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessMethodOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessMethodOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessMethodOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessMethodOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessMethodOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessMethodOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessMethodOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessMethodOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessMethodOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessMethodOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessMethodOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessMethodOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessMethodOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessMethodOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessMethodOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessMethodOutputReference.property.accessMethodType">accessMethodType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessMethodOutputReference.property.customObjectIdentifier">customObjectIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessMethodOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessMethod">DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessMethod</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessMethodOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessMethodOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `accessMethodType`<sup>Required</sup> <a name="accessMethodType" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessMethodOutputReference.property.accessMethodType"></a>

```typescript
public readonly accessMethodType: string;
```

- *Type:* string

---

##### `customObjectIdentifier`<sup>Required</sup> <a name="customObjectIdentifier" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessMethodOutputReference.property.customObjectIdentifier"></a>

```typescript
public readonly customObjectIdentifier: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessMethodOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessMethod;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessMethod">DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessMethod</a>

---


### DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessList <a name="DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessList" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessList.Initializer"></a>

```typescript
import { dataAwsccAcmpcaCertificateAuthority } from '@cdktn/provider-awscc'

new dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessList.get"></a>

```typescript
public get(index: number): DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessOutputReference <a name="DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessOutputReference" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessOutputReference.Initializer"></a>

```typescript
import { dataAwsccAcmpcaCertificateAuthority } from '@cdktn/provider-awscc'

new dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessOutputReference.property.accessLocation">accessLocation</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference">DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessOutputReference.property.accessMethod">accessMethod</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessMethodOutputReference">DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessMethodOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccess">DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccess</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `accessLocation`<sup>Required</sup> <a name="accessLocation" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessOutputReference.property.accessLocation"></a>

```typescript
public readonly accessLocation: DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference">DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference</a>

---

##### `accessMethod`<sup>Required</sup> <a name="accessMethod" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessOutputReference.property.accessMethod"></a>

```typescript
public readonly accessMethod: DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessMethodOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessMethodOutputReference">DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessMethodOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccess;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccess">DataAwsccAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccess</a>

---


### DataAwsccAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationCrlDistributionPointExtensionConfigurationOutputReference <a name="DataAwsccAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationCrlDistributionPointExtensionConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationCrlDistributionPointExtensionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationCrlDistributionPointExtensionConfigurationOutputReference.Initializer"></a>

```typescript
import { dataAwsccAcmpcaCertificateAuthority } from '@cdktn/provider-awscc'

new dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationCrlDistributionPointExtensionConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationCrlDistributionPointExtensionConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationCrlDistributionPointExtensionConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationCrlDistributionPointExtensionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationCrlDistributionPointExtensionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationCrlDistributionPointExtensionConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationCrlDistributionPointExtensionConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationCrlDistributionPointExtensionConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationCrlDistributionPointExtensionConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationCrlDistributionPointExtensionConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationCrlDistributionPointExtensionConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationCrlDistributionPointExtensionConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationCrlDistributionPointExtensionConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationCrlDistributionPointExtensionConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationCrlDistributionPointExtensionConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationCrlDistributionPointExtensionConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationCrlDistributionPointExtensionConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationCrlDistributionPointExtensionConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationCrlDistributionPointExtensionConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationCrlDistributionPointExtensionConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationCrlDistributionPointExtensionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationCrlDistributionPointExtensionConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationCrlDistributionPointExtensionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationCrlDistributionPointExtensionConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationCrlDistributionPointExtensionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationCrlDistributionPointExtensionConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationCrlDistributionPointExtensionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationCrlDistributionPointExtensionConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationCrlDistributionPointExtensionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationCrlDistributionPointExtensionConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationCrlDistributionPointExtensionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationCrlDistributionPointExtensionConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationCrlDistributionPointExtensionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationCrlDistributionPointExtensionConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationCrlDistributionPointExtensionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationCrlDistributionPointExtensionConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationCrlDistributionPointExtensionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationCrlDistributionPointExtensionConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationCrlDistributionPointExtensionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationCrlDistributionPointExtensionConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationCrlDistributionPointExtensionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationCrlDistributionPointExtensionConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationCrlDistributionPointExtensionConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationCrlDistributionPointExtensionConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationCrlDistributionPointExtensionConfigurationOutputReference.property.omitExtension">omitExtension</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationCrlDistributionPointExtensionConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationCrlDistributionPointExtensionConfiguration">DataAwsccAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationCrlDistributionPointExtensionConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationCrlDistributionPointExtensionConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationCrlDistributionPointExtensionConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `omitExtension`<sup>Required</sup> <a name="omitExtension" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationCrlDistributionPointExtensionConfigurationOutputReference.property.omitExtension"></a>

```typescript
public readonly omitExtension: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationCrlDistributionPointExtensionConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationCrlDistributionPointExtensionConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationCrlDistributionPointExtensionConfiguration">DataAwsccAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationCrlDistributionPointExtensionConfiguration</a>

---


### DataAwsccAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference <a name="DataAwsccAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.Initializer"></a>

```typescript
import { dataAwsccAcmpcaCertificateAuthority } from '@cdktn/provider-awscc'

new dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.property.crlDistributionPointExtensionConfiguration">crlDistributionPointExtensionConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationCrlDistributionPointExtensionConfigurationOutputReference">DataAwsccAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationCrlDistributionPointExtensionConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.property.crlType">crlType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.property.customCname">customCname</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.property.customPath">customPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.property.enabled">enabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.property.expirationInDays">expirationInDays</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.property.s3BucketName">s3BucketName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.property.s3ObjectAcl">s3ObjectAcl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityRevocationConfigurationCrlConfiguration">DataAwsccAcmpcaCertificateAuthorityRevocationConfigurationCrlConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `crlDistributionPointExtensionConfiguration`<sup>Required</sup> <a name="crlDistributionPointExtensionConfiguration" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.property.crlDistributionPointExtensionConfiguration"></a>

```typescript
public readonly crlDistributionPointExtensionConfiguration: DataAwsccAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationCrlDistributionPointExtensionConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationCrlDistributionPointExtensionConfigurationOutputReference">DataAwsccAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationCrlDistributionPointExtensionConfigurationOutputReference</a>

---

##### `crlType`<sup>Required</sup> <a name="crlType" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.property.crlType"></a>

```typescript
public readonly crlType: string;
```

- *Type:* string

---

##### `customCname`<sup>Required</sup> <a name="customCname" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.property.customCname"></a>

```typescript
public readonly customCname: string;
```

- *Type:* string

---

##### `customPath`<sup>Required</sup> <a name="customPath" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.property.customPath"></a>

```typescript
public readonly customPath: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.property.enabled"></a>

```typescript
public readonly enabled: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `expirationInDays`<sup>Required</sup> <a name="expirationInDays" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.property.expirationInDays"></a>

```typescript
public readonly expirationInDays: number;
```

- *Type:* number

---

##### `s3BucketName`<sup>Required</sup> <a name="s3BucketName" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.property.s3BucketName"></a>

```typescript
public readonly s3BucketName: string;
```

- *Type:* string

---

##### `s3ObjectAcl`<sup>Required</sup> <a name="s3ObjectAcl" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.property.s3ObjectAcl"></a>

```typescript
public readonly s3ObjectAcl: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccAcmpcaCertificateAuthorityRevocationConfigurationCrlConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityRevocationConfigurationCrlConfiguration">DataAwsccAcmpcaCertificateAuthorityRevocationConfigurationCrlConfiguration</a>

---


### DataAwsccAcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference <a name="DataAwsccAcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.Initializer"></a>

```typescript
import { dataAwsccAcmpcaCertificateAuthority } from '@cdktn/provider-awscc'

new dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.property.enabled">enabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.property.ocspCustomCname">ocspCustomCname</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityRevocationConfigurationOcspConfiguration">DataAwsccAcmpcaCertificateAuthorityRevocationConfigurationOcspConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.property.enabled"></a>

```typescript
public readonly enabled: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `ocspCustomCname`<sup>Required</sup> <a name="ocspCustomCname" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.property.ocspCustomCname"></a>

```typescript
public readonly ocspCustomCname: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccAcmpcaCertificateAuthorityRevocationConfigurationOcspConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityRevocationConfigurationOcspConfiguration">DataAwsccAcmpcaCertificateAuthorityRevocationConfigurationOcspConfiguration</a>

---


### DataAwsccAcmpcaCertificateAuthorityRevocationConfigurationOutputReference <a name="DataAwsccAcmpcaCertificateAuthorityRevocationConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityRevocationConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityRevocationConfigurationOutputReference.Initializer"></a>

```typescript
import { dataAwsccAcmpcaCertificateAuthority } from '@cdktn/provider-awscc'

new dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityRevocationConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityRevocationConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityRevocationConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityRevocationConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityRevocationConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityRevocationConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityRevocationConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityRevocationConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityRevocationConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityRevocationConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityRevocationConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityRevocationConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityRevocationConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityRevocationConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityRevocationConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityRevocationConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityRevocationConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityRevocationConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityRevocationConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityRevocationConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityRevocationConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityRevocationConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityRevocationConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityRevocationConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityRevocationConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityRevocationConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityRevocationConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityRevocationConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityRevocationConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityRevocationConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityRevocationConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityRevocationConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityRevocationConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityRevocationConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityRevocationConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityRevocationConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityRevocationConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityRevocationConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityRevocationConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityRevocationConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityRevocationConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityRevocationConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityRevocationConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityRevocationConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityRevocationConfigurationOutputReference.property.crlConfiguration">crlConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference">DataAwsccAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityRevocationConfigurationOutputReference.property.ocspConfiguration">ocspConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference">DataAwsccAcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityRevocationConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityRevocationConfiguration">DataAwsccAcmpcaCertificateAuthorityRevocationConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityRevocationConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityRevocationConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `crlConfiguration`<sup>Required</sup> <a name="crlConfiguration" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityRevocationConfigurationOutputReference.property.crlConfiguration"></a>

```typescript
public readonly crlConfiguration: DataAwsccAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference">DataAwsccAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference</a>

---

##### `ocspConfiguration`<sup>Required</sup> <a name="ocspConfiguration" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityRevocationConfigurationOutputReference.property.ocspConfiguration"></a>

```typescript
public readonly ocspConfiguration: DataAwsccAcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference">DataAwsccAcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityRevocationConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccAcmpcaCertificateAuthorityRevocationConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityRevocationConfiguration">DataAwsccAcmpcaCertificateAuthorityRevocationConfiguration</a>

---


### DataAwsccAcmpcaCertificateAuthoritySubjectCustomAttributesList <a name="DataAwsccAcmpcaCertificateAuthoritySubjectCustomAttributesList" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthoritySubjectCustomAttributesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthoritySubjectCustomAttributesList.Initializer"></a>

```typescript
import { dataAwsccAcmpcaCertificateAuthority } from '@cdktn/provider-awscc'

new dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthoritySubjectCustomAttributesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthoritySubjectCustomAttributesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthoritySubjectCustomAttributesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthoritySubjectCustomAttributesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthoritySubjectCustomAttributesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthoritySubjectCustomAttributesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthoritySubjectCustomAttributesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthoritySubjectCustomAttributesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthoritySubjectCustomAttributesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthoritySubjectCustomAttributesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthoritySubjectCustomAttributesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthoritySubjectCustomAttributesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthoritySubjectCustomAttributesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthoritySubjectCustomAttributesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthoritySubjectCustomAttributesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthoritySubjectCustomAttributesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthoritySubjectCustomAttributesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthoritySubjectCustomAttributesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthoritySubjectCustomAttributesList.get"></a>

```typescript
public get(index: number): DataAwsccAcmpcaCertificateAuthoritySubjectCustomAttributesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthoritySubjectCustomAttributesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthoritySubjectCustomAttributesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthoritySubjectCustomAttributesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthoritySubjectCustomAttributesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthoritySubjectCustomAttributesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccAcmpcaCertificateAuthoritySubjectCustomAttributesOutputReference <a name="DataAwsccAcmpcaCertificateAuthoritySubjectCustomAttributesOutputReference" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthoritySubjectCustomAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthoritySubjectCustomAttributesOutputReference.Initializer"></a>

```typescript
import { dataAwsccAcmpcaCertificateAuthority } from '@cdktn/provider-awscc'

new dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthoritySubjectCustomAttributesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthoritySubjectCustomAttributesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthoritySubjectCustomAttributesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthoritySubjectCustomAttributesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthoritySubjectCustomAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthoritySubjectCustomAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthoritySubjectCustomAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthoritySubjectCustomAttributesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthoritySubjectCustomAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthoritySubjectCustomAttributesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthoritySubjectCustomAttributesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthoritySubjectCustomAttributesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthoritySubjectCustomAttributesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthoritySubjectCustomAttributesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthoritySubjectCustomAttributesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthoritySubjectCustomAttributesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthoritySubjectCustomAttributesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthoritySubjectCustomAttributesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthoritySubjectCustomAttributesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthoritySubjectCustomAttributesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthoritySubjectCustomAttributesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthoritySubjectCustomAttributesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthoritySubjectCustomAttributesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthoritySubjectCustomAttributesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthoritySubjectCustomAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthoritySubjectCustomAttributesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthoritySubjectCustomAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthoritySubjectCustomAttributesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthoritySubjectCustomAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthoritySubjectCustomAttributesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthoritySubjectCustomAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthoritySubjectCustomAttributesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthoritySubjectCustomAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthoritySubjectCustomAttributesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthoritySubjectCustomAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthoritySubjectCustomAttributesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthoritySubjectCustomAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthoritySubjectCustomAttributesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthoritySubjectCustomAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthoritySubjectCustomAttributesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthoritySubjectCustomAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthoritySubjectCustomAttributesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthoritySubjectCustomAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthoritySubjectCustomAttributesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthoritySubjectCustomAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthoritySubjectCustomAttributesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthoritySubjectCustomAttributesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthoritySubjectCustomAttributesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthoritySubjectCustomAttributesOutputReference.property.objectIdentifier">objectIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthoritySubjectCustomAttributesOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthoritySubjectCustomAttributesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthoritySubjectCustomAttributes">DataAwsccAcmpcaCertificateAuthoritySubjectCustomAttributes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthoritySubjectCustomAttributesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthoritySubjectCustomAttributesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `objectIdentifier`<sup>Required</sup> <a name="objectIdentifier" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthoritySubjectCustomAttributesOutputReference.property.objectIdentifier"></a>

```typescript
public readonly objectIdentifier: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthoritySubjectCustomAttributesOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthoritySubjectCustomAttributesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccAcmpcaCertificateAuthoritySubjectCustomAttributes;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthoritySubjectCustomAttributes">DataAwsccAcmpcaCertificateAuthoritySubjectCustomAttributes</a>

---


### DataAwsccAcmpcaCertificateAuthoritySubjectOutputReference <a name="DataAwsccAcmpcaCertificateAuthoritySubjectOutputReference" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthoritySubjectOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthoritySubjectOutputReference.Initializer"></a>

```typescript
import { dataAwsccAcmpcaCertificateAuthority } from '@cdktn/provider-awscc'

new dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthoritySubjectOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthoritySubjectOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthoritySubjectOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthoritySubjectOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthoritySubjectOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthoritySubjectOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthoritySubjectOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthoritySubjectOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthoritySubjectOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthoritySubjectOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthoritySubjectOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthoritySubjectOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthoritySubjectOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthoritySubjectOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthoritySubjectOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthoritySubjectOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthoritySubjectOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthoritySubjectOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthoritySubjectOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthoritySubjectOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthoritySubjectOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthoritySubjectOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthoritySubjectOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthoritySubjectOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthoritySubjectOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthoritySubjectOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthoritySubjectOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthoritySubjectOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthoritySubjectOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthoritySubjectOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthoritySubjectOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthoritySubjectOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthoritySubjectOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthoritySubjectOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthoritySubjectOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthoritySubjectOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthoritySubjectOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthoritySubjectOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthoritySubjectOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthoritySubjectOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthoritySubjectOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthoritySubjectOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthoritySubjectOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthoritySubjectOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthoritySubjectOutputReference.property.commonName">commonName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthoritySubjectOutputReference.property.country">country</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthoritySubjectOutputReference.property.customAttributes">customAttributes</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthoritySubjectCustomAttributesList">DataAwsccAcmpcaCertificateAuthoritySubjectCustomAttributesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthoritySubjectOutputReference.property.distinguishedNameQualifier">distinguishedNameQualifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthoritySubjectOutputReference.property.generationQualifier">generationQualifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthoritySubjectOutputReference.property.givenName">givenName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthoritySubjectOutputReference.property.initials">initials</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthoritySubjectOutputReference.property.locality">locality</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthoritySubjectOutputReference.property.organization">organization</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthoritySubjectOutputReference.property.organizationalUnit">organizationalUnit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthoritySubjectOutputReference.property.pseudonym">pseudonym</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthoritySubjectOutputReference.property.serialNumber">serialNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthoritySubjectOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthoritySubjectOutputReference.property.surname">surname</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthoritySubjectOutputReference.property.title">title</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthoritySubjectOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthoritySubject">DataAwsccAcmpcaCertificateAuthoritySubject</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthoritySubjectOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthoritySubjectOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `commonName`<sup>Required</sup> <a name="commonName" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthoritySubjectOutputReference.property.commonName"></a>

```typescript
public readonly commonName: string;
```

- *Type:* string

---

##### `country`<sup>Required</sup> <a name="country" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthoritySubjectOutputReference.property.country"></a>

```typescript
public readonly country: string;
```

- *Type:* string

---

##### `customAttributes`<sup>Required</sup> <a name="customAttributes" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthoritySubjectOutputReference.property.customAttributes"></a>

```typescript
public readonly customAttributes: DataAwsccAcmpcaCertificateAuthoritySubjectCustomAttributesList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthoritySubjectCustomAttributesList">DataAwsccAcmpcaCertificateAuthoritySubjectCustomAttributesList</a>

---

##### `distinguishedNameQualifier`<sup>Required</sup> <a name="distinguishedNameQualifier" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthoritySubjectOutputReference.property.distinguishedNameQualifier"></a>

```typescript
public readonly distinguishedNameQualifier: string;
```

- *Type:* string

---

##### `generationQualifier`<sup>Required</sup> <a name="generationQualifier" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthoritySubjectOutputReference.property.generationQualifier"></a>

```typescript
public readonly generationQualifier: string;
```

- *Type:* string

---

##### `givenName`<sup>Required</sup> <a name="givenName" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthoritySubjectOutputReference.property.givenName"></a>

```typescript
public readonly givenName: string;
```

- *Type:* string

---

##### `initials`<sup>Required</sup> <a name="initials" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthoritySubjectOutputReference.property.initials"></a>

```typescript
public readonly initials: string;
```

- *Type:* string

---

##### `locality`<sup>Required</sup> <a name="locality" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthoritySubjectOutputReference.property.locality"></a>

```typescript
public readonly locality: string;
```

- *Type:* string

---

##### `organization`<sup>Required</sup> <a name="organization" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthoritySubjectOutputReference.property.organization"></a>

```typescript
public readonly organization: string;
```

- *Type:* string

---

##### `organizationalUnit`<sup>Required</sup> <a name="organizationalUnit" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthoritySubjectOutputReference.property.organizationalUnit"></a>

```typescript
public readonly organizationalUnit: string;
```

- *Type:* string

---

##### `pseudonym`<sup>Required</sup> <a name="pseudonym" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthoritySubjectOutputReference.property.pseudonym"></a>

```typescript
public readonly pseudonym: string;
```

- *Type:* string

---

##### `serialNumber`<sup>Required</sup> <a name="serialNumber" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthoritySubjectOutputReference.property.serialNumber"></a>

```typescript
public readonly serialNumber: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthoritySubjectOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `surname`<sup>Required</sup> <a name="surname" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthoritySubjectOutputReference.property.surname"></a>

```typescript
public readonly surname: string;
```

- *Type:* string

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthoritySubjectOutputReference.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthoritySubjectOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccAcmpcaCertificateAuthoritySubject;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthoritySubject">DataAwsccAcmpcaCertificateAuthoritySubject</a>

---


### DataAwsccAcmpcaCertificateAuthorityTagsList <a name="DataAwsccAcmpcaCertificateAuthorityTagsList" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityTagsList.Initializer"></a>

```typescript
import { dataAwsccAcmpcaCertificateAuthority } from '@cdktn/provider-awscc'

new dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityTagsList.get"></a>

```typescript
public get(index: number): DataAwsccAcmpcaCertificateAuthorityTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccAcmpcaCertificateAuthorityTagsOutputReference <a name="DataAwsccAcmpcaCertificateAuthorityTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityTagsOutputReference.Initializer"></a>

```typescript
import { dataAwsccAcmpcaCertificateAuthority } from '@cdktn/provider-awscc'

new dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityTags">DataAwsccAcmpcaCertificateAuthorityTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccAcmpcaCertificateAuthorityTags;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAcmpcaCertificateAuthority.DataAwsccAcmpcaCertificateAuthorityTags">DataAwsccAcmpcaCertificateAuthorityTags</a>

---



