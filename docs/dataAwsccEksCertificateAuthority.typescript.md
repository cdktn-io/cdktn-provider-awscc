# `dataAwsccEksCertificateAuthority` Submodule <a name="`dataAwsccEksCertificateAuthority` Submodule" id="@cdktn/provider-awscc.dataAwsccEksCertificateAuthority"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccEksCertificateAuthority <a name="DataAwsccEksCertificateAuthority" id="@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthority"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/eks_certificate_authority awscc_eks_certificate_authority}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthority.Initializer"></a>

```typescript
import { dataAwsccEksCertificateAuthority } from '@cdktn/provider-awscc'

new dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthority(scope: Construct, id: string, config: DataAwsccEksCertificateAuthorityConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthority.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthority.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthority.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthorityConfig">DataAwsccEksCertificateAuthorityConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthority.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthority.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthority.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthorityConfig">DataAwsccEksCertificateAuthorityConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthority.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthority.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthority.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthority.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthority.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthority.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthority.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthority.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthority.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthority.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthority.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthority.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthority.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthority.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthority.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthority.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthority.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthority.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthority.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthority.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthority.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthority.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthority.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthority.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthority.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthority.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthority.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthority.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthority.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthority.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthority.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthority.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthority.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthority.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthority.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthority.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthority.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthority.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthority.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthority.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthority.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthority.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthority.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthority.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthority.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthority.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthority.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthority.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthority.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthority.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthority.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthority.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthority.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthority.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccEksCertificateAuthority resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthority.isConstruct"></a>

```typescript
import { dataAwsccEksCertificateAuthority } from '@cdktn/provider-awscc'

dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthority.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthority.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthority.isTerraformElement"></a>

```typescript
import { dataAwsccEksCertificateAuthority } from '@cdktn/provider-awscc'

dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthority.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthority.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthority.isTerraformDataSource"></a>

```typescript
import { dataAwsccEksCertificateAuthority } from '@cdktn/provider-awscc'

dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthority.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthority.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthority.generateConfigForImport"></a>

```typescript
import { dataAwsccEksCertificateAuthority } from '@cdktn/provider-awscc'

dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthority.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccEksCertificateAuthority resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthority.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthority.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccEksCertificateAuthority to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthority.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccEksCertificateAuthority that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/eks_certificate_authority#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthority.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccEksCertificateAuthority to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthority.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthority.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthority.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthority.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthority.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthority.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthority.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthority.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthority.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthority.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthority.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthority.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthority.property.activatedAt">activatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthority.property.activatedBy">activatedBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthority.property.certificateAuthorityId">certificateAuthorityId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthority.property.clusterName">clusterName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthority.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthority.property.createdBy">createdBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthority.property.data">data</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthority.property.distributionStatus">distributionStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthority.property.rollbackAvailable">rollbackAvailable</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthority.property.scheduledEvents">scheduledEvents</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthorityScheduledEventsOutputReference">DataAwsccEksCertificateAuthorityScheduledEventsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthority.property.signingStatus">signingStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthority.property.validity">validity</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthorityValidityOutputReference">DataAwsccEksCertificateAuthorityValidityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthority.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthority.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthority.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthority.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthority.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthority.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthority.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthority.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthority.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthority.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthority.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthority.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthority.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthority.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `activatedAt`<sup>Required</sup> <a name="activatedAt" id="@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthority.property.activatedAt"></a>

```typescript
public readonly activatedAt: string;
```

- *Type:* string

---

##### `activatedBy`<sup>Required</sup> <a name="activatedBy" id="@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthority.property.activatedBy"></a>

```typescript
public readonly activatedBy: string;
```

- *Type:* string

---

##### `certificateAuthorityId`<sup>Required</sup> <a name="certificateAuthorityId" id="@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthority.property.certificateAuthorityId"></a>

```typescript
public readonly certificateAuthorityId: string;
```

- *Type:* string

---

##### `clusterName`<sup>Required</sup> <a name="clusterName" id="@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthority.property.clusterName"></a>

```typescript
public readonly clusterName: string;
```

- *Type:* string

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthority.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `createdBy`<sup>Required</sup> <a name="createdBy" id="@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthority.property.createdBy"></a>

```typescript
public readonly createdBy: string;
```

- *Type:* string

---

##### `data`<sup>Required</sup> <a name="data" id="@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthority.property.data"></a>

```typescript
public readonly data: string;
```

- *Type:* string

---

##### `distributionStatus`<sup>Required</sup> <a name="distributionStatus" id="@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthority.property.distributionStatus"></a>

```typescript
public readonly distributionStatus: string;
```

- *Type:* string

---

##### `rollbackAvailable`<sup>Required</sup> <a name="rollbackAvailable" id="@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthority.property.rollbackAvailable"></a>

```typescript
public readonly rollbackAvailable: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `scheduledEvents`<sup>Required</sup> <a name="scheduledEvents" id="@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthority.property.scheduledEvents"></a>

```typescript
public readonly scheduledEvents: DataAwsccEksCertificateAuthorityScheduledEventsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthorityScheduledEventsOutputReference">DataAwsccEksCertificateAuthorityScheduledEventsOutputReference</a>

---

##### `signingStatus`<sup>Required</sup> <a name="signingStatus" id="@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthority.property.signingStatus"></a>

```typescript
public readonly signingStatus: string;
```

- *Type:* string

---

##### `validity`<sup>Required</sup> <a name="validity" id="@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthority.property.validity"></a>

```typescript
public readonly validity: DataAwsccEksCertificateAuthorityValidityOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthorityValidityOutputReference">DataAwsccEksCertificateAuthorityValidityOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthority.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthority.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthority.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthority.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccEksCertificateAuthorityConfig <a name="DataAwsccEksCertificateAuthorityConfig" id="@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthorityConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthorityConfig.Initializer"></a>

```typescript
import { dataAwsccEksCertificateAuthority } from '@cdktn/provider-awscc'

const dataAwsccEksCertificateAuthorityConfig: dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthorityConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthorityConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthorityConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthorityConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthorityConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthorityConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthorityConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthorityConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthorityConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthorityConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthorityConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthorityConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthorityConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthorityConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthorityConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthorityConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthorityConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/eks_certificate_authority#id DataAwsccEksCertificateAuthority#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccEksCertificateAuthorityScheduledEvents <a name="DataAwsccEksCertificateAuthorityScheduledEvents" id="@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthorityScheduledEvents"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthorityScheduledEvents.Initializer"></a>

```typescript
import { dataAwsccEksCertificateAuthority } from '@cdktn/provider-awscc'

const dataAwsccEksCertificateAuthorityScheduledEvents: dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthorityScheduledEvents = { ... }
```


### DataAwsccEksCertificateAuthorityValidity <a name="DataAwsccEksCertificateAuthorityValidity" id="@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthorityValidity"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthorityValidity.Initializer"></a>

```typescript
import { dataAwsccEksCertificateAuthority } from '@cdktn/provider-awscc'

const dataAwsccEksCertificateAuthorityValidity: dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthorityValidity = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccEksCertificateAuthorityScheduledEventsOutputReference <a name="DataAwsccEksCertificateAuthorityScheduledEventsOutputReference" id="@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthorityScheduledEventsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthorityScheduledEventsOutputReference.Initializer"></a>

```typescript
import { dataAwsccEksCertificateAuthority } from '@cdktn/provider-awscc'

new dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthorityScheduledEventsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthorityScheduledEventsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthorityScheduledEventsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthorityScheduledEventsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthorityScheduledEventsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthorityScheduledEventsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthorityScheduledEventsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthorityScheduledEventsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthorityScheduledEventsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthorityScheduledEventsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthorityScheduledEventsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthorityScheduledEventsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthorityScheduledEventsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthorityScheduledEventsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthorityScheduledEventsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthorityScheduledEventsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthorityScheduledEventsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthorityScheduledEventsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthorityScheduledEventsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthorityScheduledEventsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthorityScheduledEventsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthorityScheduledEventsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthorityScheduledEventsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthorityScheduledEventsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthorityScheduledEventsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthorityScheduledEventsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthorityScheduledEventsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthorityScheduledEventsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthorityScheduledEventsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthorityScheduledEventsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthorityScheduledEventsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthorityScheduledEventsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthorityScheduledEventsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthorityScheduledEventsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthorityScheduledEventsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthorityScheduledEventsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthorityScheduledEventsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthorityScheduledEventsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthorityScheduledEventsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthorityScheduledEventsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthorityScheduledEventsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthorityScheduledEventsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthorityScheduledEventsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthorityScheduledEventsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthorityScheduledEventsOutputReference.property.finalAutoActivation">finalAutoActivation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthorityScheduledEventsOutputReference.property.firstAutoActivation">firstAutoActivation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthorityScheduledEventsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthorityScheduledEvents">DataAwsccEksCertificateAuthorityScheduledEvents</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthorityScheduledEventsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthorityScheduledEventsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `finalAutoActivation`<sup>Required</sup> <a name="finalAutoActivation" id="@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthorityScheduledEventsOutputReference.property.finalAutoActivation"></a>

```typescript
public readonly finalAutoActivation: string;
```

- *Type:* string

---

##### `firstAutoActivation`<sup>Required</sup> <a name="firstAutoActivation" id="@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthorityScheduledEventsOutputReference.property.firstAutoActivation"></a>

```typescript
public readonly firstAutoActivation: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthorityScheduledEventsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccEksCertificateAuthorityScheduledEvents;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthorityScheduledEvents">DataAwsccEksCertificateAuthorityScheduledEvents</a>

---


### DataAwsccEksCertificateAuthorityValidityOutputReference <a name="DataAwsccEksCertificateAuthorityValidityOutputReference" id="@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthorityValidityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthorityValidityOutputReference.Initializer"></a>

```typescript
import { dataAwsccEksCertificateAuthority } from '@cdktn/provider-awscc'

new dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthorityValidityOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthorityValidityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthorityValidityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthorityValidityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthorityValidityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthorityValidityOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthorityValidityOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthorityValidityOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthorityValidityOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthorityValidityOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthorityValidityOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthorityValidityOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthorityValidityOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthorityValidityOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthorityValidityOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthorityValidityOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthorityValidityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthorityValidityOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthorityValidityOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthorityValidityOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthorityValidityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthorityValidityOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthorityValidityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthorityValidityOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthorityValidityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthorityValidityOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthorityValidityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthorityValidityOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthorityValidityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthorityValidityOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthorityValidityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthorityValidityOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthorityValidityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthorityValidityOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthorityValidityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthorityValidityOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthorityValidityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthorityValidityOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthorityValidityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthorityValidityOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthorityValidityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthorityValidityOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthorityValidityOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthorityValidityOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthorityValidityOutputReference.property.notAfter">notAfter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthorityValidityOutputReference.property.notBefore">notBefore</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthorityValidityOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthorityValidity">DataAwsccEksCertificateAuthorityValidity</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthorityValidityOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthorityValidityOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `notAfter`<sup>Required</sup> <a name="notAfter" id="@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthorityValidityOutputReference.property.notAfter"></a>

```typescript
public readonly notAfter: string;
```

- *Type:* string

---

##### `notBefore`<sup>Required</sup> <a name="notBefore" id="@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthorityValidityOutputReference.property.notBefore"></a>

```typescript
public readonly notBefore: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthorityValidityOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccEksCertificateAuthorityValidity;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEksCertificateAuthority.DataAwsccEksCertificateAuthorityValidity">DataAwsccEksCertificateAuthorityValidity</a>

---



