# `dataAwsccTransferCertificate` Submodule <a name="`dataAwsccTransferCertificate` Submodule" id="@cdktn/provider-awscc.dataAwsccTransferCertificate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccTransferCertificate <a name="DataAwsccTransferCertificate" id="@cdktn/provider-awscc.dataAwsccTransferCertificate.DataAwsccTransferCertificate"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/transfer_certificate awscc_transfer_certificate}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccTransferCertificate.DataAwsccTransferCertificate.Initializer"></a>

```typescript
import { dataAwsccTransferCertificate } from '@cdktn/provider-awscc'

new dataAwsccTransferCertificate.DataAwsccTransferCertificate(scope: Construct, id: string, config: DataAwsccTransferCertificateConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferCertificate.DataAwsccTransferCertificate.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferCertificate.DataAwsccTransferCertificate.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferCertificate.DataAwsccTransferCertificate.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccTransferCertificate.DataAwsccTransferCertificateConfig">DataAwsccTransferCertificateConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccTransferCertificate.DataAwsccTransferCertificate.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccTransferCertificate.DataAwsccTransferCertificate.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccTransferCertificate.DataAwsccTransferCertificate.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccTransferCertificate.DataAwsccTransferCertificateConfig">DataAwsccTransferCertificateConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferCertificate.DataAwsccTransferCertificate.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferCertificate.DataAwsccTransferCertificate.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferCertificate.DataAwsccTransferCertificate.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferCertificate.DataAwsccTransferCertificate.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferCertificate.DataAwsccTransferCertificate.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferCertificate.DataAwsccTransferCertificate.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferCertificate.DataAwsccTransferCertificate.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferCertificate.DataAwsccTransferCertificate.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferCertificate.DataAwsccTransferCertificate.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferCertificate.DataAwsccTransferCertificate.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferCertificate.DataAwsccTransferCertificate.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferCertificate.DataAwsccTransferCertificate.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferCertificate.DataAwsccTransferCertificate.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferCertificate.DataAwsccTransferCertificate.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferCertificate.DataAwsccTransferCertificate.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferCertificate.DataAwsccTransferCertificate.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferCertificate.DataAwsccTransferCertificate.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferCertificate.DataAwsccTransferCertificate.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccTransferCertificate.DataAwsccTransferCertificate.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccTransferCertificate.DataAwsccTransferCertificate.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccTransferCertificate.DataAwsccTransferCertificate.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccTransferCertificate.DataAwsccTransferCertificate.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccTransferCertificate.DataAwsccTransferCertificate.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccTransferCertificate.DataAwsccTransferCertificate.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccTransferCertificate.DataAwsccTransferCertificate.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccTransferCertificate.DataAwsccTransferCertificate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccTransferCertificate.DataAwsccTransferCertificate.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccTransferCertificate.DataAwsccTransferCertificate.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccTransferCertificate.DataAwsccTransferCertificate.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccTransferCertificate.DataAwsccTransferCertificate.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccTransferCertificate.DataAwsccTransferCertificate.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTransferCertificate.DataAwsccTransferCertificate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccTransferCertificate.DataAwsccTransferCertificate.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTransferCertificate.DataAwsccTransferCertificate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccTransferCertificate.DataAwsccTransferCertificate.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTransferCertificate.DataAwsccTransferCertificate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccTransferCertificate.DataAwsccTransferCertificate.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTransferCertificate.DataAwsccTransferCertificate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccTransferCertificate.DataAwsccTransferCertificate.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTransferCertificate.DataAwsccTransferCertificate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccTransferCertificate.DataAwsccTransferCertificate.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTransferCertificate.DataAwsccTransferCertificate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccTransferCertificate.DataAwsccTransferCertificate.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTransferCertificate.DataAwsccTransferCertificate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccTransferCertificate.DataAwsccTransferCertificate.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTransferCertificate.DataAwsccTransferCertificate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccTransferCertificate.DataAwsccTransferCertificate.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTransferCertificate.DataAwsccTransferCertificate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccTransferCertificate.DataAwsccTransferCertificate.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTransferCertificate.DataAwsccTransferCertificate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferCertificate.DataAwsccTransferCertificate.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferCertificate.DataAwsccTransferCertificate.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferCertificate.DataAwsccTransferCertificate.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferCertificate.DataAwsccTransferCertificate.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccTransferCertificate resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccTransferCertificate.DataAwsccTransferCertificate.isConstruct"></a>

```typescript
import { dataAwsccTransferCertificate } from '@cdktn/provider-awscc'

dataAwsccTransferCertificate.DataAwsccTransferCertificate.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccTransferCertificate.DataAwsccTransferCertificate.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccTransferCertificate.DataAwsccTransferCertificate.isTerraformElement"></a>

```typescript
import { dataAwsccTransferCertificate } from '@cdktn/provider-awscc'

dataAwsccTransferCertificate.DataAwsccTransferCertificate.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccTransferCertificate.DataAwsccTransferCertificate.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccTransferCertificate.DataAwsccTransferCertificate.isTerraformDataSource"></a>

```typescript
import { dataAwsccTransferCertificate } from '@cdktn/provider-awscc'

dataAwsccTransferCertificate.DataAwsccTransferCertificate.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccTransferCertificate.DataAwsccTransferCertificate.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccTransferCertificate.DataAwsccTransferCertificate.generateConfigForImport"></a>

```typescript
import { dataAwsccTransferCertificate } from '@cdktn/provider-awscc'

dataAwsccTransferCertificate.DataAwsccTransferCertificate.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccTransferCertificate resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccTransferCertificate.DataAwsccTransferCertificate.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccTransferCertificate.DataAwsccTransferCertificate.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccTransferCertificate to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccTransferCertificate.DataAwsccTransferCertificate.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccTransferCertificate that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/transfer_certificate#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccTransferCertificate.DataAwsccTransferCertificate.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccTransferCertificate to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferCertificate.DataAwsccTransferCertificate.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferCertificate.DataAwsccTransferCertificate.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferCertificate.DataAwsccTransferCertificate.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferCertificate.DataAwsccTransferCertificate.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferCertificate.DataAwsccTransferCertificate.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferCertificate.DataAwsccTransferCertificate.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferCertificate.DataAwsccTransferCertificate.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferCertificate.DataAwsccTransferCertificate.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferCertificate.DataAwsccTransferCertificate.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferCertificate.DataAwsccTransferCertificate.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferCertificate.DataAwsccTransferCertificate.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferCertificate.DataAwsccTransferCertificate.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferCertificate.DataAwsccTransferCertificate.property.activeDate">activeDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferCertificate.DataAwsccTransferCertificate.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferCertificate.DataAwsccTransferCertificate.property.certificate">certificate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferCertificate.DataAwsccTransferCertificate.property.certificateChain">certificateChain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferCertificate.DataAwsccTransferCertificate.property.certificateId">certificateId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferCertificate.DataAwsccTransferCertificate.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferCertificate.DataAwsccTransferCertificate.property.inactiveDate">inactiveDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferCertificate.DataAwsccTransferCertificate.property.notAfterDate">notAfterDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferCertificate.DataAwsccTransferCertificate.property.notBeforeDate">notBeforeDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferCertificate.DataAwsccTransferCertificate.property.privateKey">privateKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferCertificate.DataAwsccTransferCertificate.property.serial">serial</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferCertificate.DataAwsccTransferCertificate.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferCertificate.DataAwsccTransferCertificate.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccTransferCertificate.DataAwsccTransferCertificateTagsList">DataAwsccTransferCertificateTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferCertificate.DataAwsccTransferCertificate.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferCertificate.DataAwsccTransferCertificate.property.usage">usage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferCertificate.DataAwsccTransferCertificate.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferCertificate.DataAwsccTransferCertificate.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccTransferCertificate.DataAwsccTransferCertificate.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccTransferCertificate.DataAwsccTransferCertificate.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccTransferCertificate.DataAwsccTransferCertificate.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccTransferCertificate.DataAwsccTransferCertificate.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccTransferCertificate.DataAwsccTransferCertificate.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccTransferCertificate.DataAwsccTransferCertificate.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccTransferCertificate.DataAwsccTransferCertificate.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccTransferCertificate.DataAwsccTransferCertificate.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccTransferCertificate.DataAwsccTransferCertificate.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccTransferCertificate.DataAwsccTransferCertificate.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccTransferCertificate.DataAwsccTransferCertificate.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccTransferCertificate.DataAwsccTransferCertificate.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `activeDate`<sup>Required</sup> <a name="activeDate" id="@cdktn/provider-awscc.dataAwsccTransferCertificate.DataAwsccTransferCertificate.property.activeDate"></a>

```typescript
public readonly activeDate: string;
```

- *Type:* string

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.dataAwsccTransferCertificate.DataAwsccTransferCertificate.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `certificate`<sup>Required</sup> <a name="certificate" id="@cdktn/provider-awscc.dataAwsccTransferCertificate.DataAwsccTransferCertificate.property.certificate"></a>

```typescript
public readonly certificate: string;
```

- *Type:* string

---

##### `certificateChain`<sup>Required</sup> <a name="certificateChain" id="@cdktn/provider-awscc.dataAwsccTransferCertificate.DataAwsccTransferCertificate.property.certificateChain"></a>

```typescript
public readonly certificateChain: string;
```

- *Type:* string

---

##### `certificateId`<sup>Required</sup> <a name="certificateId" id="@cdktn/provider-awscc.dataAwsccTransferCertificate.DataAwsccTransferCertificate.property.certificateId"></a>

```typescript
public readonly certificateId: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.dataAwsccTransferCertificate.DataAwsccTransferCertificate.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `inactiveDate`<sup>Required</sup> <a name="inactiveDate" id="@cdktn/provider-awscc.dataAwsccTransferCertificate.DataAwsccTransferCertificate.property.inactiveDate"></a>

```typescript
public readonly inactiveDate: string;
```

- *Type:* string

---

##### `notAfterDate`<sup>Required</sup> <a name="notAfterDate" id="@cdktn/provider-awscc.dataAwsccTransferCertificate.DataAwsccTransferCertificate.property.notAfterDate"></a>

```typescript
public readonly notAfterDate: string;
```

- *Type:* string

---

##### `notBeforeDate`<sup>Required</sup> <a name="notBeforeDate" id="@cdktn/provider-awscc.dataAwsccTransferCertificate.DataAwsccTransferCertificate.property.notBeforeDate"></a>

```typescript
public readonly notBeforeDate: string;
```

- *Type:* string

---

##### `privateKey`<sup>Required</sup> <a name="privateKey" id="@cdktn/provider-awscc.dataAwsccTransferCertificate.DataAwsccTransferCertificate.property.privateKey"></a>

```typescript
public readonly privateKey: string;
```

- *Type:* string

---

##### `serial`<sup>Required</sup> <a name="serial" id="@cdktn/provider-awscc.dataAwsccTransferCertificate.DataAwsccTransferCertificate.property.serial"></a>

```typescript
public readonly serial: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.dataAwsccTransferCertificate.DataAwsccTransferCertificate.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccTransferCertificate.DataAwsccTransferCertificate.property.tags"></a>

```typescript
public readonly tags: DataAwsccTransferCertificateTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccTransferCertificate.DataAwsccTransferCertificateTagsList">DataAwsccTransferCertificateTagsList</a>

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.dataAwsccTransferCertificate.DataAwsccTransferCertificate.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `usage`<sup>Required</sup> <a name="usage" id="@cdktn/provider-awscc.dataAwsccTransferCertificate.DataAwsccTransferCertificate.property.usage"></a>

```typescript
public readonly usage: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccTransferCertificate.DataAwsccTransferCertificate.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccTransferCertificate.DataAwsccTransferCertificate.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferCertificate.DataAwsccTransferCertificate.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccTransferCertificate.DataAwsccTransferCertificate.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccTransferCertificateConfig <a name="DataAwsccTransferCertificateConfig" id="@cdktn/provider-awscc.dataAwsccTransferCertificate.DataAwsccTransferCertificateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccTransferCertificate.DataAwsccTransferCertificateConfig.Initializer"></a>

```typescript
import { dataAwsccTransferCertificate } from '@cdktn/provider-awscc'

const dataAwsccTransferCertificateConfig: dataAwsccTransferCertificate.DataAwsccTransferCertificateConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferCertificate.DataAwsccTransferCertificateConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferCertificate.DataAwsccTransferCertificateConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferCertificate.DataAwsccTransferCertificateConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferCertificate.DataAwsccTransferCertificateConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferCertificate.DataAwsccTransferCertificateConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferCertificate.DataAwsccTransferCertificateConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferCertificate.DataAwsccTransferCertificateConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferCertificate.DataAwsccTransferCertificateConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccTransferCertificate.DataAwsccTransferCertificateConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccTransferCertificate.DataAwsccTransferCertificateConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccTransferCertificate.DataAwsccTransferCertificateConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccTransferCertificate.DataAwsccTransferCertificateConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccTransferCertificate.DataAwsccTransferCertificateConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccTransferCertificate.DataAwsccTransferCertificateConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccTransferCertificate.DataAwsccTransferCertificateConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccTransferCertificate.DataAwsccTransferCertificateConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/transfer_certificate#id DataAwsccTransferCertificate#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccTransferCertificateTags <a name="DataAwsccTransferCertificateTags" id="@cdktn/provider-awscc.dataAwsccTransferCertificate.DataAwsccTransferCertificateTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccTransferCertificate.DataAwsccTransferCertificateTags.Initializer"></a>

```typescript
import { dataAwsccTransferCertificate } from '@cdktn/provider-awscc'

const dataAwsccTransferCertificateTags: dataAwsccTransferCertificate.DataAwsccTransferCertificateTags = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccTransferCertificateTagsList <a name="DataAwsccTransferCertificateTagsList" id="@cdktn/provider-awscc.dataAwsccTransferCertificate.DataAwsccTransferCertificateTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccTransferCertificate.DataAwsccTransferCertificateTagsList.Initializer"></a>

```typescript
import { dataAwsccTransferCertificate } from '@cdktn/provider-awscc'

new dataAwsccTransferCertificate.DataAwsccTransferCertificateTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferCertificate.DataAwsccTransferCertificateTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferCertificate.DataAwsccTransferCertificateTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferCertificate.DataAwsccTransferCertificateTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccTransferCertificate.DataAwsccTransferCertificateTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTransferCertificate.DataAwsccTransferCertificateTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccTransferCertificate.DataAwsccTransferCertificateTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferCertificate.DataAwsccTransferCertificateTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferCertificate.DataAwsccTransferCertificateTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferCertificate.DataAwsccTransferCertificateTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferCertificate.DataAwsccTransferCertificateTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferCertificate.DataAwsccTransferCertificateTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccTransferCertificate.DataAwsccTransferCertificateTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccTransferCertificate.DataAwsccTransferCertificateTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccTransferCertificate.DataAwsccTransferCertificateTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccTransferCertificate.DataAwsccTransferCertificateTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccTransferCertificate.DataAwsccTransferCertificateTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccTransferCertificate.DataAwsccTransferCertificateTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccTransferCertificate.DataAwsccTransferCertificateTagsList.get"></a>

```typescript
public get(index: number): DataAwsccTransferCertificateTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccTransferCertificate.DataAwsccTransferCertificateTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferCertificate.DataAwsccTransferCertificateTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferCertificate.DataAwsccTransferCertificateTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccTransferCertificate.DataAwsccTransferCertificateTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccTransferCertificate.DataAwsccTransferCertificateTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccTransferCertificateTagsOutputReference <a name="DataAwsccTransferCertificateTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccTransferCertificate.DataAwsccTransferCertificateTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccTransferCertificate.DataAwsccTransferCertificateTagsOutputReference.Initializer"></a>

```typescript
import { dataAwsccTransferCertificate } from '@cdktn/provider-awscc'

new dataAwsccTransferCertificate.DataAwsccTransferCertificateTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferCertificate.DataAwsccTransferCertificateTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferCertificate.DataAwsccTransferCertificateTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferCertificate.DataAwsccTransferCertificateTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferCertificate.DataAwsccTransferCertificateTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccTransferCertificate.DataAwsccTransferCertificateTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTransferCertificate.DataAwsccTransferCertificateTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccTransferCertificate.DataAwsccTransferCertificateTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccTransferCertificate.DataAwsccTransferCertificateTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferCertificate.DataAwsccTransferCertificateTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferCertificate.DataAwsccTransferCertificateTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferCertificate.DataAwsccTransferCertificateTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferCertificate.DataAwsccTransferCertificateTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferCertificate.DataAwsccTransferCertificateTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferCertificate.DataAwsccTransferCertificateTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferCertificate.DataAwsccTransferCertificateTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferCertificate.DataAwsccTransferCertificateTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferCertificate.DataAwsccTransferCertificateTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferCertificate.DataAwsccTransferCertificateTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferCertificate.DataAwsccTransferCertificateTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferCertificate.DataAwsccTransferCertificateTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferCertificate.DataAwsccTransferCertificateTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccTransferCertificate.DataAwsccTransferCertificateTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccTransferCertificate.DataAwsccTransferCertificateTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTransferCertificate.DataAwsccTransferCertificateTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccTransferCertificate.DataAwsccTransferCertificateTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTransferCertificate.DataAwsccTransferCertificateTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccTransferCertificate.DataAwsccTransferCertificateTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTransferCertificate.DataAwsccTransferCertificateTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccTransferCertificate.DataAwsccTransferCertificateTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTransferCertificate.DataAwsccTransferCertificateTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccTransferCertificate.DataAwsccTransferCertificateTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTransferCertificate.DataAwsccTransferCertificateTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccTransferCertificate.DataAwsccTransferCertificateTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTransferCertificate.DataAwsccTransferCertificateTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccTransferCertificate.DataAwsccTransferCertificateTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTransferCertificate.DataAwsccTransferCertificateTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccTransferCertificate.DataAwsccTransferCertificateTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTransferCertificate.DataAwsccTransferCertificateTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccTransferCertificate.DataAwsccTransferCertificateTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTransferCertificate.DataAwsccTransferCertificateTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccTransferCertificate.DataAwsccTransferCertificateTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccTransferCertificate.DataAwsccTransferCertificateTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccTransferCertificate.DataAwsccTransferCertificateTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccTransferCertificate.DataAwsccTransferCertificateTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccTransferCertificate.DataAwsccTransferCertificateTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferCertificate.DataAwsccTransferCertificateTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferCertificate.DataAwsccTransferCertificateTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferCertificate.DataAwsccTransferCertificateTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferCertificate.DataAwsccTransferCertificateTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTransferCertificate.DataAwsccTransferCertificateTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccTransferCertificate.DataAwsccTransferCertificateTags">DataAwsccTransferCertificateTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccTransferCertificate.DataAwsccTransferCertificateTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccTransferCertificate.DataAwsccTransferCertificateTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccTransferCertificate.DataAwsccTransferCertificateTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccTransferCertificate.DataAwsccTransferCertificateTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccTransferCertificate.DataAwsccTransferCertificateTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccTransferCertificateTags;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccTransferCertificate.DataAwsccTransferCertificateTags">DataAwsccTransferCertificateTags</a>

---



