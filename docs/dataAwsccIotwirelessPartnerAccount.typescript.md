# `dataAwsccIotwirelessPartnerAccount` Submodule <a name="`dataAwsccIotwirelessPartnerAccount` Submodule" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccIotwirelessPartnerAccount <a name="DataAwsccIotwirelessPartnerAccount" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccount"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/iotwireless_partner_account awscc_iotwireless_partner_account}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccount.Initializer"></a>

```typescript
import { dataAwsccIotwirelessPartnerAccount } from '@cdktn/provider-awscc'

new dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccount(scope: Construct, id: string, config: DataAwsccIotwirelessPartnerAccountConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccount.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccount.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccount.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountConfig">DataAwsccIotwirelessPartnerAccountConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccount.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccount.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccount.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountConfig">DataAwsccIotwirelessPartnerAccountConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccount.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccount.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccount.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccount.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccount.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccount.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccount.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccount.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccount.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccount.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccount.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccount.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccount.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccount.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccount.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccount.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccount.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccount.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccount.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccount.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccount.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccount.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccount.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccount.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccount.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccount.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccount.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccount.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccount.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccount.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccount.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccount.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccount.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccount.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccount.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccount.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccount.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccount.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccount.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccount.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccount.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccount.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccount.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccount.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccount.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccount.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccount.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccount.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccount.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccount.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccount.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccount.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccount.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccount.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccIotwirelessPartnerAccount resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccount.isConstruct"></a>

```typescript
import { dataAwsccIotwirelessPartnerAccount } from '@cdktn/provider-awscc'

dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccount.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccount.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccount.isTerraformElement"></a>

```typescript
import { dataAwsccIotwirelessPartnerAccount } from '@cdktn/provider-awscc'

dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccount.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccount.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccount.isTerraformDataSource"></a>

```typescript
import { dataAwsccIotwirelessPartnerAccount } from '@cdktn/provider-awscc'

dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccount.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccount.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccount.generateConfigForImport"></a>

```typescript
import { dataAwsccIotwirelessPartnerAccount } from '@cdktn/provider-awscc'

dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccount.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccIotwirelessPartnerAccount resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccount.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccount.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccIotwirelessPartnerAccount to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccount.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccIotwirelessPartnerAccount that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/iotwireless_partner_account#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccount.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccIotwirelessPartnerAccount to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccount.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccount.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccount.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccount.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccount.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccount.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccount.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccount.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccount.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccount.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccount.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccount.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccount.property.accountLinked">accountLinked</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccount.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccount.property.fingerprint">fingerprint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccount.property.partnerAccountId">partnerAccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccount.property.partnerType">partnerType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccount.property.sidewalk">sidewalk</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkOutputReference">DataAwsccIotwirelessPartnerAccountSidewalkOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccount.property.sidewalkResponse">sidewalkResponse</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkResponseOutputReference">DataAwsccIotwirelessPartnerAccountSidewalkResponseOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccount.property.sidewalkUpdate">sidewalkUpdate</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkUpdateOutputReference">DataAwsccIotwirelessPartnerAccountSidewalkUpdateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccount.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountTagsList">DataAwsccIotwirelessPartnerAccountTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccount.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccount.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccount.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccount.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccount.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccount.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccount.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccount.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccount.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccount.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccount.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccount.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccount.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccount.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `accountLinked`<sup>Required</sup> <a name="accountLinked" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccount.property.accountLinked"></a>

```typescript
public readonly accountLinked: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccount.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `fingerprint`<sup>Required</sup> <a name="fingerprint" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccount.property.fingerprint"></a>

```typescript
public readonly fingerprint: string;
```

- *Type:* string

---

##### `partnerAccountId`<sup>Required</sup> <a name="partnerAccountId" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccount.property.partnerAccountId"></a>

```typescript
public readonly partnerAccountId: string;
```

- *Type:* string

---

##### `partnerType`<sup>Required</sup> <a name="partnerType" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccount.property.partnerType"></a>

```typescript
public readonly partnerType: string;
```

- *Type:* string

---

##### `sidewalk`<sup>Required</sup> <a name="sidewalk" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccount.property.sidewalk"></a>

```typescript
public readonly sidewalk: DataAwsccIotwirelessPartnerAccountSidewalkOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkOutputReference">DataAwsccIotwirelessPartnerAccountSidewalkOutputReference</a>

---

##### `sidewalkResponse`<sup>Required</sup> <a name="sidewalkResponse" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccount.property.sidewalkResponse"></a>

```typescript
public readonly sidewalkResponse: DataAwsccIotwirelessPartnerAccountSidewalkResponseOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkResponseOutputReference">DataAwsccIotwirelessPartnerAccountSidewalkResponseOutputReference</a>

---

##### `sidewalkUpdate`<sup>Required</sup> <a name="sidewalkUpdate" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccount.property.sidewalkUpdate"></a>

```typescript
public readonly sidewalkUpdate: DataAwsccIotwirelessPartnerAccountSidewalkUpdateOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkUpdateOutputReference">DataAwsccIotwirelessPartnerAccountSidewalkUpdateOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccount.property.tags"></a>

```typescript
public readonly tags: DataAwsccIotwirelessPartnerAccountTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountTagsList">DataAwsccIotwirelessPartnerAccountTagsList</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccount.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccount.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccount.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccount.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccIotwirelessPartnerAccountConfig <a name="DataAwsccIotwirelessPartnerAccountConfig" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountConfig.Initializer"></a>

```typescript
import { dataAwsccIotwirelessPartnerAccount } from '@cdktn/provider-awscc'

const dataAwsccIotwirelessPartnerAccountConfig: dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/iotwireless_partner_account#id DataAwsccIotwirelessPartnerAccount#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccIotwirelessPartnerAccountSidewalk <a name="DataAwsccIotwirelessPartnerAccountSidewalk" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalk"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalk.Initializer"></a>

```typescript
import { dataAwsccIotwirelessPartnerAccount } from '@cdktn/provider-awscc'

const dataAwsccIotwirelessPartnerAccountSidewalk: dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalk = { ... }
```


### DataAwsccIotwirelessPartnerAccountSidewalkResponse <a name="DataAwsccIotwirelessPartnerAccountSidewalkResponse" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkResponse"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkResponse.Initializer"></a>

```typescript
import { dataAwsccIotwirelessPartnerAccount } from '@cdktn/provider-awscc'

const dataAwsccIotwirelessPartnerAccountSidewalkResponse: dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkResponse = { ... }
```


### DataAwsccIotwirelessPartnerAccountSidewalkUpdate <a name="DataAwsccIotwirelessPartnerAccountSidewalkUpdate" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkUpdate"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkUpdate.Initializer"></a>

```typescript
import { dataAwsccIotwirelessPartnerAccount } from '@cdktn/provider-awscc'

const dataAwsccIotwirelessPartnerAccountSidewalkUpdate: dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkUpdate = { ... }
```


### DataAwsccIotwirelessPartnerAccountTags <a name="DataAwsccIotwirelessPartnerAccountTags" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountTags.Initializer"></a>

```typescript
import { dataAwsccIotwirelessPartnerAccount } from '@cdktn/provider-awscc'

const dataAwsccIotwirelessPartnerAccountTags: dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountTags = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccIotwirelessPartnerAccountSidewalkOutputReference <a name="DataAwsccIotwirelessPartnerAccountSidewalkOutputReference" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkOutputReference.Initializer"></a>

```typescript
import { dataAwsccIotwirelessPartnerAccount } from '@cdktn/provider-awscc'

new dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkOutputReference.property.appServerPrivateKey">appServerPrivateKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalk">DataAwsccIotwirelessPartnerAccountSidewalk</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `appServerPrivateKey`<sup>Required</sup> <a name="appServerPrivateKey" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkOutputReference.property.appServerPrivateKey"></a>

```typescript
public readonly appServerPrivateKey: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccIotwirelessPartnerAccountSidewalk;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalk">DataAwsccIotwirelessPartnerAccountSidewalk</a>

---


### DataAwsccIotwirelessPartnerAccountSidewalkResponseOutputReference <a name="DataAwsccIotwirelessPartnerAccountSidewalkResponseOutputReference" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkResponseOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkResponseOutputReference.Initializer"></a>

```typescript
import { dataAwsccIotwirelessPartnerAccount } from '@cdktn/provider-awscc'

new dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkResponseOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkResponseOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkResponseOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkResponseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkResponseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkResponseOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkResponseOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkResponseOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkResponseOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkResponseOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkResponseOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkResponseOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkResponseOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkResponseOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkResponseOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkResponseOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkResponseOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkResponseOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkResponseOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkResponseOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkResponseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkResponseOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkResponseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkResponseOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkResponseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkResponseOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkResponseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkResponseOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkResponseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkResponseOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkResponseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkResponseOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkResponseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkResponseOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkResponseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkResponseOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkResponseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkResponseOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkResponseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkResponseOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkResponseOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkResponseOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkResponseOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkResponseOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkResponseOutputReference.property.amazonId">amazonId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkResponseOutputReference.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkResponseOutputReference.property.fingerprint">fingerprint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkResponseOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkResponse">DataAwsccIotwirelessPartnerAccountSidewalkResponse</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkResponseOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkResponseOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `amazonId`<sup>Required</sup> <a name="amazonId" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkResponseOutputReference.property.amazonId"></a>

```typescript
public readonly amazonId: string;
```

- *Type:* string

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkResponseOutputReference.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `fingerprint`<sup>Required</sup> <a name="fingerprint" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkResponseOutputReference.property.fingerprint"></a>

```typescript
public readonly fingerprint: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkResponseOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccIotwirelessPartnerAccountSidewalkResponse;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkResponse">DataAwsccIotwirelessPartnerAccountSidewalkResponse</a>

---


### DataAwsccIotwirelessPartnerAccountSidewalkUpdateOutputReference <a name="DataAwsccIotwirelessPartnerAccountSidewalkUpdateOutputReference" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkUpdateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkUpdateOutputReference.Initializer"></a>

```typescript
import { dataAwsccIotwirelessPartnerAccount } from '@cdktn/provider-awscc'

new dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkUpdateOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkUpdateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkUpdateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkUpdateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkUpdateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkUpdateOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkUpdateOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkUpdateOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkUpdateOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkUpdateOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkUpdateOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkUpdateOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkUpdateOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkUpdateOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkUpdateOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkUpdateOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkUpdateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkUpdateOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkUpdateOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkUpdateOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkUpdateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkUpdateOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkUpdateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkUpdateOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkUpdateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkUpdateOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkUpdateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkUpdateOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkUpdateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkUpdateOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkUpdateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkUpdateOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkUpdateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkUpdateOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkUpdateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkUpdateOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkUpdateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkUpdateOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkUpdateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkUpdateOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkUpdateOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkUpdateOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkUpdateOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkUpdateOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkUpdateOutputReference.property.appServerPrivateKey">appServerPrivateKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkUpdateOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkUpdate">DataAwsccIotwirelessPartnerAccountSidewalkUpdate</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkUpdateOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkUpdateOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `appServerPrivateKey`<sup>Required</sup> <a name="appServerPrivateKey" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkUpdateOutputReference.property.appServerPrivateKey"></a>

```typescript
public readonly appServerPrivateKey: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkUpdateOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccIotwirelessPartnerAccountSidewalkUpdate;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountSidewalkUpdate">DataAwsccIotwirelessPartnerAccountSidewalkUpdate</a>

---


### DataAwsccIotwirelessPartnerAccountTagsList <a name="DataAwsccIotwirelessPartnerAccountTagsList" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountTagsList.Initializer"></a>

```typescript
import { dataAwsccIotwirelessPartnerAccount } from '@cdktn/provider-awscc'

new dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountTagsList.get"></a>

```typescript
public get(index: number): DataAwsccIotwirelessPartnerAccountTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccIotwirelessPartnerAccountTagsOutputReference <a name="DataAwsccIotwirelessPartnerAccountTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountTagsOutputReference.Initializer"></a>

```typescript
import { dataAwsccIotwirelessPartnerAccount } from '@cdktn/provider-awscc'

new dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountTags">DataAwsccIotwirelessPartnerAccountTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccIotwirelessPartnerAccountTags;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotwirelessPartnerAccount.DataAwsccIotwirelessPartnerAccountTags">DataAwsccIotwirelessPartnerAccountTags</a>

---



