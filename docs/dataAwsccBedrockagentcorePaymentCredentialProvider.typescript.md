# `dataAwsccBedrockagentcorePaymentCredentialProvider` Submodule <a name="`dataAwsccBedrockagentcorePaymentCredentialProvider` Submodule" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccBedrockagentcorePaymentCredentialProvider <a name="DataAwsccBedrockagentcorePaymentCredentialProvider" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProvider"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/bedrockagentcore_payment_credential_provider awscc_bedrockagentcore_payment_credential_provider}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProvider.Initializer"></a>

```typescript
import { dataAwsccBedrockagentcorePaymentCredentialProvider } from '@cdktn/provider-awscc'

new dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProvider(scope: Construct, id: string, config: DataAwsccBedrockagentcorePaymentCredentialProviderConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProvider.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProvider.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProvider.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderConfig">DataAwsccBedrockagentcorePaymentCredentialProviderConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProvider.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProvider.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProvider.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderConfig">DataAwsccBedrockagentcorePaymentCredentialProviderConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProvider.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProvider.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProvider.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProvider.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProvider.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProvider.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProvider.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProvider.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProvider.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProvider.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProvider.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProvider.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProvider.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProvider.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProvider.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProvider.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProvider.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProvider.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProvider.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProvider.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProvider.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProvider.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProvider.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProvider.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProvider.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProvider.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProvider.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProvider.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProvider.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProvider.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProvider.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProvider.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProvider.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProvider.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProvider.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProvider.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProvider.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProvider.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProvider.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProvider.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProvider.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProvider.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProvider.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProvider.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProvider.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProvider.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProvider.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProvider.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProvider.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProvider.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProvider.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProvider.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProvider.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProvider.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccBedrockagentcorePaymentCredentialProvider resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProvider.isConstruct"></a>

```typescript
import { dataAwsccBedrockagentcorePaymentCredentialProvider } from '@cdktn/provider-awscc'

dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProvider.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProvider.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProvider.isTerraformElement"></a>

```typescript
import { dataAwsccBedrockagentcorePaymentCredentialProvider } from '@cdktn/provider-awscc'

dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProvider.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProvider.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProvider.isTerraformDataSource"></a>

```typescript
import { dataAwsccBedrockagentcorePaymentCredentialProvider } from '@cdktn/provider-awscc'

dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProvider.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProvider.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProvider.generateConfigForImport"></a>

```typescript
import { dataAwsccBedrockagentcorePaymentCredentialProvider } from '@cdktn/provider-awscc'

dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProvider.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccBedrockagentcorePaymentCredentialProvider resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProvider.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProvider.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccBedrockagentcorePaymentCredentialProvider to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProvider.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccBedrockagentcorePaymentCredentialProvider that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/bedrockagentcore_payment_credential_provider#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProvider.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccBedrockagentcorePaymentCredentialProvider to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProvider.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProvider.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProvider.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProvider.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProvider.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProvider.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProvider.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProvider.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProvider.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProvider.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProvider.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProvider.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProvider.property.createdTime">createdTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProvider.property.credentialProviderArn">credentialProviderArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProvider.property.credentialProviderVendor">credentialProviderVendor</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProvider.property.lastUpdatedTime">lastUpdatedTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProvider.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProvider.property.providerConfigurationInput">providerConfigurationInput</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputOutputReference">DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProvider.property.providerConfigurationOutput">providerConfigurationOutput</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputOutputReference">DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProvider.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderTagsList">DataAwsccBedrockagentcorePaymentCredentialProviderTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProvider.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProvider.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProvider.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProvider.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProvider.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProvider.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProvider.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProvider.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProvider.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProvider.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProvider.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProvider.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProvider.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProvider.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `createdTime`<sup>Required</sup> <a name="createdTime" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProvider.property.createdTime"></a>

```typescript
public readonly createdTime: string;
```

- *Type:* string

---

##### `credentialProviderArn`<sup>Required</sup> <a name="credentialProviderArn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProvider.property.credentialProviderArn"></a>

```typescript
public readonly credentialProviderArn: string;
```

- *Type:* string

---

##### `credentialProviderVendor`<sup>Required</sup> <a name="credentialProviderVendor" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProvider.property.credentialProviderVendor"></a>

```typescript
public readonly credentialProviderVendor: string;
```

- *Type:* string

---

##### `lastUpdatedTime`<sup>Required</sup> <a name="lastUpdatedTime" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProvider.property.lastUpdatedTime"></a>

```typescript
public readonly lastUpdatedTime: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProvider.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `providerConfigurationInput`<sup>Required</sup> <a name="providerConfigurationInput" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProvider.property.providerConfigurationInput"></a>

```typescript
public readonly providerConfigurationInput: DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputOutputReference">DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputOutputReference</a>

---

##### `providerConfigurationOutput`<sup>Required</sup> <a name="providerConfigurationOutput" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProvider.property.providerConfigurationOutput"></a>

```typescript
public readonly providerConfigurationOutput: DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputOutputReference">DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProvider.property.tags"></a>

```typescript
public readonly tags: DataAwsccBedrockagentcorePaymentCredentialProviderTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderTagsList">DataAwsccBedrockagentcorePaymentCredentialProviderTagsList</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProvider.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProvider.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProvider.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProvider.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccBedrockagentcorePaymentCredentialProviderConfig <a name="DataAwsccBedrockagentcorePaymentCredentialProviderConfig" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderConfig.Initializer"></a>

```typescript
import { dataAwsccBedrockagentcorePaymentCredentialProvider } from '@cdktn/provider-awscc'

const dataAwsccBedrockagentcorePaymentCredentialProviderConfig: dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/bedrockagentcore_payment_credential_provider#id DataAwsccBedrockagentcorePaymentCredentialProvider#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInput <a name="DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInput" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInput.Initializer"></a>

```typescript
import { dataAwsccBedrockagentcorePaymentCredentialProvider } from '@cdktn/provider-awscc'

const dataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInput: dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInput = { ... }
```


### DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfiguration <a name="DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfiguration" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfiguration.Initializer"></a>

```typescript
import { dataAwsccBedrockagentcorePaymentCredentialProvider } from '@cdktn/provider-awscc'

const dataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfiguration: dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfiguration = { ... }
```


### DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfig <a name="DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfig" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfig.Initializer"></a>

```typescript
import { dataAwsccBedrockagentcorePaymentCredentialProvider } from '@cdktn/provider-awscc'

const dataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfig: dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfig = { ... }
```


### DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfig <a name="DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfig" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfig.Initializer"></a>

```typescript
import { dataAwsccBedrockagentcorePaymentCredentialProvider } from '@cdktn/provider-awscc'

const dataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfig: dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfig = { ... }
```


### DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfiguration <a name="DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfiguration" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfiguration.Initializer"></a>

```typescript
import { dataAwsccBedrockagentcorePaymentCredentialProvider } from '@cdktn/provider-awscc'

const dataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfiguration: dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfiguration = { ... }
```


### DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfig <a name="DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfig" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfig.Initializer"></a>

```typescript
import { dataAwsccBedrockagentcorePaymentCredentialProvider } from '@cdktn/provider-awscc'

const dataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfig: dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfig = { ... }
```


### DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfig <a name="DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfig" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfig.Initializer"></a>

```typescript
import { dataAwsccBedrockagentcorePaymentCredentialProvider } from '@cdktn/provider-awscc'

const dataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfig: dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfig = { ... }
```


### DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutput <a name="DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutput" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutput.Initializer"></a>

```typescript
import { dataAwsccBedrockagentcorePaymentCredentialProvider } from '@cdktn/provider-awscc'

const dataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutput: dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutput = { ... }
```


### DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfiguration <a name="DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfiguration" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfiguration.Initializer"></a>

```typescript
import { dataAwsccBedrockagentcorePaymentCredentialProvider } from '@cdktn/provider-awscc'

const dataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfiguration: dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfiguration = { ... }
```


### DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationApiKeySecretArn <a name="DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationApiKeySecretArn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationApiKeySecretArn"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationApiKeySecretArn.Initializer"></a>

```typescript
import { dataAwsccBedrockagentcorePaymentCredentialProvider } from '@cdktn/provider-awscc'

const dataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationApiKeySecretArn: dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationApiKeySecretArn = { ... }
```


### DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationWalletSecretArn <a name="DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationWalletSecretArn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationWalletSecretArn"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationWalletSecretArn.Initializer"></a>

```typescript
import { dataAwsccBedrockagentcorePaymentCredentialProvider } from '@cdktn/provider-awscc'

const dataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationWalletSecretArn: dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationWalletSecretArn = { ... }
```


### DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfiguration <a name="DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfiguration" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfiguration.Initializer"></a>

```typescript
import { dataAwsccBedrockagentcorePaymentCredentialProvider } from '@cdktn/provider-awscc'

const dataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfiguration: dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfiguration = { ... }
```


### DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAppSecretArn <a name="DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAppSecretArn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAppSecretArn"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAppSecretArn.Initializer"></a>

```typescript
import { dataAwsccBedrockagentcorePaymentCredentialProvider } from '@cdktn/provider-awscc'

const dataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAppSecretArn: dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAppSecretArn = { ... }
```


### DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAuthorizationPrivateKeyArn <a name="DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAuthorizationPrivateKeyArn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAuthorizationPrivateKeyArn"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAuthorizationPrivateKeyArn.Initializer"></a>

```typescript
import { dataAwsccBedrockagentcorePaymentCredentialProvider } from '@cdktn/provider-awscc'

const dataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAuthorizationPrivateKeyArn: dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAuthorizationPrivateKeyArn = { ... }
```


### DataAwsccBedrockagentcorePaymentCredentialProviderTags <a name="DataAwsccBedrockagentcorePaymentCredentialProviderTags" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderTags.Initializer"></a>

```typescript
import { dataAwsccBedrockagentcorePaymentCredentialProvider } from '@cdktn/provider-awscc'

const dataAwsccBedrockagentcorePaymentCredentialProviderTags: dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderTags = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfigOutputReference <a name="DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfigOutputReference.Initializer"></a>

```typescript
import { dataAwsccBedrockagentcorePaymentCredentialProvider } from '@cdktn/provider-awscc'

new dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfigOutputReference.property.jsonKey">jsonKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfigOutputReference.property.secretId">secretId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfig">DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `jsonKey`<sup>Required</sup> <a name="jsonKey" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfigOutputReference.property.jsonKey"></a>

```typescript
public readonly jsonKey: string;
```

- *Type:* string

---

##### `secretId`<sup>Required</sup> <a name="secretId" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfigOutputReference.property.secretId"></a>

```typescript
public readonly secretId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfig">DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfig</a>

---


### DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference <a name="DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference.Initializer"></a>

```typescript
import { dataAwsccBedrockagentcorePaymentCredentialProvider } from '@cdktn/provider-awscc'

new dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference.property.apiKeyId">apiKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference.property.apiKeySecret">apiKeySecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference.property.apiKeySecretConfig">apiKeySecretConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfigOutputReference">DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference.property.apiKeySecretSource">apiKeySecretSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference.property.walletSecret">walletSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference.property.walletSecretConfig">walletSecretConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfigOutputReference">DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference.property.walletSecretSource">walletSecretSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfiguration">DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `apiKeyId`<sup>Required</sup> <a name="apiKeyId" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference.property.apiKeyId"></a>

```typescript
public readonly apiKeyId: string;
```

- *Type:* string

---

##### `apiKeySecret`<sup>Required</sup> <a name="apiKeySecret" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference.property.apiKeySecret"></a>

```typescript
public readonly apiKeySecret: string;
```

- *Type:* string

---

##### `apiKeySecretConfig`<sup>Required</sup> <a name="apiKeySecretConfig" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference.property.apiKeySecretConfig"></a>

```typescript
public readonly apiKeySecretConfig: DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfigOutputReference">DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfigOutputReference</a>

---

##### `apiKeySecretSource`<sup>Required</sup> <a name="apiKeySecretSource" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference.property.apiKeySecretSource"></a>

```typescript
public readonly apiKeySecretSource: string;
```

- *Type:* string

---

##### `walletSecret`<sup>Required</sup> <a name="walletSecret" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference.property.walletSecret"></a>

```typescript
public readonly walletSecret: string;
```

- *Type:* string

---

##### `walletSecretConfig`<sup>Required</sup> <a name="walletSecretConfig" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference.property.walletSecretConfig"></a>

```typescript
public readonly walletSecretConfig: DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfigOutputReference">DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfigOutputReference</a>

---

##### `walletSecretSource`<sup>Required</sup> <a name="walletSecretSource" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference.property.walletSecretSource"></a>

```typescript
public readonly walletSecretSource: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfiguration">DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfiguration</a>

---


### DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfigOutputReference <a name="DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfigOutputReference.Initializer"></a>

```typescript
import { dataAwsccBedrockagentcorePaymentCredentialProvider } from '@cdktn/provider-awscc'

new dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfigOutputReference.property.jsonKey">jsonKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfigOutputReference.property.secretId">secretId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfig">DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `jsonKey`<sup>Required</sup> <a name="jsonKey" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfigOutputReference.property.jsonKey"></a>

```typescript
public readonly jsonKey: string;
```

- *Type:* string

---

##### `secretId`<sup>Required</sup> <a name="secretId" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfigOutputReference.property.secretId"></a>

```typescript
public readonly secretId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfig">DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfig</a>

---


### DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputOutputReference <a name="DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputOutputReference.Initializer"></a>

```typescript
import { dataAwsccBedrockagentcorePaymentCredentialProvider } from '@cdktn/provider-awscc'

new dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputOutputReference.property.coinbaseCdpConfiguration">coinbaseCdpConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference">DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputOutputReference.property.stripePrivyConfiguration">stripePrivyConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference">DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInput">DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInput</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `coinbaseCdpConfiguration`<sup>Required</sup> <a name="coinbaseCdpConfiguration" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputOutputReference.property.coinbaseCdpConfiguration"></a>

```typescript
public readonly coinbaseCdpConfiguration: DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference">DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference</a>

---

##### `stripePrivyConfiguration`<sup>Required</sup> <a name="stripePrivyConfiguration" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputOutputReference.property.stripePrivyConfiguration"></a>

```typescript
public readonly stripePrivyConfiguration: DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference">DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInput;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInput">DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInput</a>

---


### DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfigOutputReference <a name="DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfigOutputReference.Initializer"></a>

```typescript
import { dataAwsccBedrockagentcorePaymentCredentialProvider } from '@cdktn/provider-awscc'

new dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfigOutputReference.property.jsonKey">jsonKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfigOutputReference.property.secretId">secretId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfig">DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `jsonKey`<sup>Required</sup> <a name="jsonKey" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfigOutputReference.property.jsonKey"></a>

```typescript
public readonly jsonKey: string;
```

- *Type:* string

---

##### `secretId`<sup>Required</sup> <a name="secretId" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfigOutputReference.property.secretId"></a>

```typescript
public readonly secretId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfig">DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfig</a>

---


### DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfigOutputReference <a name="DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfigOutputReference.Initializer"></a>

```typescript
import { dataAwsccBedrockagentcorePaymentCredentialProvider } from '@cdktn/provider-awscc'

new dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfigOutputReference.property.jsonKey">jsonKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfigOutputReference.property.secretId">secretId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfig">DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `jsonKey`<sup>Required</sup> <a name="jsonKey" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfigOutputReference.property.jsonKey"></a>

```typescript
public readonly jsonKey: string;
```

- *Type:* string

---

##### `secretId`<sup>Required</sup> <a name="secretId" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfigOutputReference.property.secretId"></a>

```typescript
public readonly secretId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfig">DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfig</a>

---


### DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference <a name="DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.Initializer"></a>

```typescript
import { dataAwsccBedrockagentcorePaymentCredentialProvider } from '@cdktn/provider-awscc'

new dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.property.appId">appId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.property.appSecret">appSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.property.appSecretConfig">appSecretConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfigOutputReference">DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.property.appSecretSource">appSecretSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.property.authorizationId">authorizationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.property.authorizationPrivateKey">authorizationPrivateKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.property.authorizationPrivateKeyConfig">authorizationPrivateKeyConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfigOutputReference">DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.property.authorizationPrivateKeySource">authorizationPrivateKeySource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfiguration">DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `appId`<sup>Required</sup> <a name="appId" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.property.appId"></a>

```typescript
public readonly appId: string;
```

- *Type:* string

---

##### `appSecret`<sup>Required</sup> <a name="appSecret" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.property.appSecret"></a>

```typescript
public readonly appSecret: string;
```

- *Type:* string

---

##### `appSecretConfig`<sup>Required</sup> <a name="appSecretConfig" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.property.appSecretConfig"></a>

```typescript
public readonly appSecretConfig: DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfigOutputReference">DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfigOutputReference</a>

---

##### `appSecretSource`<sup>Required</sup> <a name="appSecretSource" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.property.appSecretSource"></a>

```typescript
public readonly appSecretSource: string;
```

- *Type:* string

---

##### `authorizationId`<sup>Required</sup> <a name="authorizationId" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.property.authorizationId"></a>

```typescript
public readonly authorizationId: string;
```

- *Type:* string

---

##### `authorizationPrivateKey`<sup>Required</sup> <a name="authorizationPrivateKey" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.property.authorizationPrivateKey"></a>

```typescript
public readonly authorizationPrivateKey: string;
```

- *Type:* string

---

##### `authorizationPrivateKeyConfig`<sup>Required</sup> <a name="authorizationPrivateKeyConfig" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.property.authorizationPrivateKeyConfig"></a>

```typescript
public readonly authorizationPrivateKeyConfig: DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfigOutputReference">DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfigOutputReference</a>

---

##### `authorizationPrivateKeySource`<sup>Required</sup> <a name="authorizationPrivateKeySource" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.property.authorizationPrivateKeySource"></a>

```typescript
public readonly authorizationPrivateKeySource: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfiguration">DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfiguration</a>

---


### DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationApiKeySecretArnOutputReference <a name="DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationApiKeySecretArnOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationApiKeySecretArnOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationApiKeySecretArnOutputReference.Initializer"></a>

```typescript
import { dataAwsccBedrockagentcorePaymentCredentialProvider } from '@cdktn/provider-awscc'

new dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationApiKeySecretArnOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationApiKeySecretArnOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationApiKeySecretArnOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationApiKeySecretArnOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationApiKeySecretArnOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationApiKeySecretArnOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationApiKeySecretArnOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationApiKeySecretArnOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationApiKeySecretArnOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationApiKeySecretArnOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationApiKeySecretArnOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationApiKeySecretArnOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationApiKeySecretArnOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationApiKeySecretArnOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationApiKeySecretArnOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationApiKeySecretArnOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationApiKeySecretArnOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationApiKeySecretArnOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationApiKeySecretArnOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationApiKeySecretArnOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationApiKeySecretArnOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationApiKeySecretArnOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationApiKeySecretArnOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationApiKeySecretArnOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationApiKeySecretArnOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationApiKeySecretArnOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationApiKeySecretArnOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationApiKeySecretArnOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationApiKeySecretArnOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationApiKeySecretArnOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationApiKeySecretArnOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationApiKeySecretArnOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationApiKeySecretArnOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationApiKeySecretArnOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationApiKeySecretArnOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationApiKeySecretArnOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationApiKeySecretArnOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationApiKeySecretArnOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationApiKeySecretArnOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationApiKeySecretArnOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationApiKeySecretArnOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationApiKeySecretArnOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationApiKeySecretArnOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationApiKeySecretArnOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationApiKeySecretArnOutputReference.property.secretArn">secretArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationApiKeySecretArnOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationApiKeySecretArn">DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationApiKeySecretArn</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationApiKeySecretArnOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationApiKeySecretArnOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `secretArn`<sup>Required</sup> <a name="secretArn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationApiKeySecretArnOutputReference.property.secretArn"></a>

```typescript
public readonly secretArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationApiKeySecretArnOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationApiKeySecretArn;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationApiKeySecretArn">DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationApiKeySecretArn</a>

---


### DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationOutputReference <a name="DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationOutputReference.Initializer"></a>

```typescript
import { dataAwsccBedrockagentcorePaymentCredentialProvider } from '@cdktn/provider-awscc'

new dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationOutputReference.property.apiKeyId">apiKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationOutputReference.property.apiKeySecretArn">apiKeySecretArn</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationApiKeySecretArnOutputReference">DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationApiKeySecretArnOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationOutputReference.property.apiKeySecretJsonKey">apiKeySecretJsonKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationOutputReference.property.apiKeySecretSource">apiKeySecretSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationOutputReference.property.walletSecretArn">walletSecretArn</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationWalletSecretArnOutputReference">DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationWalletSecretArnOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationOutputReference.property.walletSecretJsonKey">walletSecretJsonKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationOutputReference.property.walletSecretSource">walletSecretSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfiguration">DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `apiKeyId`<sup>Required</sup> <a name="apiKeyId" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationOutputReference.property.apiKeyId"></a>

```typescript
public readonly apiKeyId: string;
```

- *Type:* string

---

##### `apiKeySecretArn`<sup>Required</sup> <a name="apiKeySecretArn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationOutputReference.property.apiKeySecretArn"></a>

```typescript
public readonly apiKeySecretArn: DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationApiKeySecretArnOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationApiKeySecretArnOutputReference">DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationApiKeySecretArnOutputReference</a>

---

##### `apiKeySecretJsonKey`<sup>Required</sup> <a name="apiKeySecretJsonKey" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationOutputReference.property.apiKeySecretJsonKey"></a>

```typescript
public readonly apiKeySecretJsonKey: string;
```

- *Type:* string

---

##### `apiKeySecretSource`<sup>Required</sup> <a name="apiKeySecretSource" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationOutputReference.property.apiKeySecretSource"></a>

```typescript
public readonly apiKeySecretSource: string;
```

- *Type:* string

---

##### `walletSecretArn`<sup>Required</sup> <a name="walletSecretArn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationOutputReference.property.walletSecretArn"></a>

```typescript
public readonly walletSecretArn: DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationWalletSecretArnOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationWalletSecretArnOutputReference">DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationWalletSecretArnOutputReference</a>

---

##### `walletSecretJsonKey`<sup>Required</sup> <a name="walletSecretJsonKey" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationOutputReference.property.walletSecretJsonKey"></a>

```typescript
public readonly walletSecretJsonKey: string;
```

- *Type:* string

---

##### `walletSecretSource`<sup>Required</sup> <a name="walletSecretSource" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationOutputReference.property.walletSecretSource"></a>

```typescript
public readonly walletSecretSource: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfiguration">DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfiguration</a>

---


### DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationWalletSecretArnOutputReference <a name="DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationWalletSecretArnOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationWalletSecretArnOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationWalletSecretArnOutputReference.Initializer"></a>

```typescript
import { dataAwsccBedrockagentcorePaymentCredentialProvider } from '@cdktn/provider-awscc'

new dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationWalletSecretArnOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationWalletSecretArnOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationWalletSecretArnOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationWalletSecretArnOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationWalletSecretArnOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationWalletSecretArnOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationWalletSecretArnOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationWalletSecretArnOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationWalletSecretArnOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationWalletSecretArnOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationWalletSecretArnOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationWalletSecretArnOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationWalletSecretArnOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationWalletSecretArnOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationWalletSecretArnOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationWalletSecretArnOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationWalletSecretArnOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationWalletSecretArnOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationWalletSecretArnOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationWalletSecretArnOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationWalletSecretArnOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationWalletSecretArnOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationWalletSecretArnOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationWalletSecretArnOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationWalletSecretArnOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationWalletSecretArnOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationWalletSecretArnOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationWalletSecretArnOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationWalletSecretArnOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationWalletSecretArnOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationWalletSecretArnOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationWalletSecretArnOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationWalletSecretArnOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationWalletSecretArnOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationWalletSecretArnOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationWalletSecretArnOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationWalletSecretArnOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationWalletSecretArnOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationWalletSecretArnOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationWalletSecretArnOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationWalletSecretArnOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationWalletSecretArnOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationWalletSecretArnOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationWalletSecretArnOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationWalletSecretArnOutputReference.property.secretArn">secretArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationWalletSecretArnOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationWalletSecretArn">DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationWalletSecretArn</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationWalletSecretArnOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationWalletSecretArnOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `secretArn`<sup>Required</sup> <a name="secretArn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationWalletSecretArnOutputReference.property.secretArn"></a>

```typescript
public readonly secretArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationWalletSecretArnOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationWalletSecretArn;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationWalletSecretArn">DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationWalletSecretArn</a>

---


### DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputOutputReference <a name="DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputOutputReference.Initializer"></a>

```typescript
import { dataAwsccBedrockagentcorePaymentCredentialProvider } from '@cdktn/provider-awscc'

new dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputOutputReference.property.coinbaseCdpConfiguration">coinbaseCdpConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationOutputReference">DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputOutputReference.property.stripePrivyConfiguration">stripePrivyConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationOutputReference">DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutput">DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutput</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `coinbaseCdpConfiguration`<sup>Required</sup> <a name="coinbaseCdpConfiguration" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputOutputReference.property.coinbaseCdpConfiguration"></a>

```typescript
public readonly coinbaseCdpConfiguration: DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationOutputReference">DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationOutputReference</a>

---

##### `stripePrivyConfiguration`<sup>Required</sup> <a name="stripePrivyConfiguration" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputOutputReference.property.stripePrivyConfiguration"></a>

```typescript
public readonly stripePrivyConfiguration: DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationOutputReference">DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutput;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutput">DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutput</a>

---


### DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAppSecretArnOutputReference <a name="DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAppSecretArnOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAppSecretArnOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAppSecretArnOutputReference.Initializer"></a>

```typescript
import { dataAwsccBedrockagentcorePaymentCredentialProvider } from '@cdktn/provider-awscc'

new dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAppSecretArnOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAppSecretArnOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAppSecretArnOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAppSecretArnOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAppSecretArnOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAppSecretArnOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAppSecretArnOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAppSecretArnOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAppSecretArnOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAppSecretArnOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAppSecretArnOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAppSecretArnOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAppSecretArnOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAppSecretArnOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAppSecretArnOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAppSecretArnOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAppSecretArnOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAppSecretArnOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAppSecretArnOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAppSecretArnOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAppSecretArnOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAppSecretArnOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAppSecretArnOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAppSecretArnOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAppSecretArnOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAppSecretArnOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAppSecretArnOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAppSecretArnOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAppSecretArnOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAppSecretArnOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAppSecretArnOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAppSecretArnOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAppSecretArnOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAppSecretArnOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAppSecretArnOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAppSecretArnOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAppSecretArnOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAppSecretArnOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAppSecretArnOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAppSecretArnOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAppSecretArnOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAppSecretArnOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAppSecretArnOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAppSecretArnOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAppSecretArnOutputReference.property.secretArn">secretArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAppSecretArnOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAppSecretArn">DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAppSecretArn</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAppSecretArnOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAppSecretArnOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `secretArn`<sup>Required</sup> <a name="secretArn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAppSecretArnOutputReference.property.secretArn"></a>

```typescript
public readonly secretArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAppSecretArnOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAppSecretArn;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAppSecretArn">DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAppSecretArn</a>

---


### DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAuthorizationPrivateKeyArnOutputReference <a name="DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAuthorizationPrivateKeyArnOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAuthorizationPrivateKeyArnOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAuthorizationPrivateKeyArnOutputReference.Initializer"></a>

```typescript
import { dataAwsccBedrockagentcorePaymentCredentialProvider } from '@cdktn/provider-awscc'

new dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAuthorizationPrivateKeyArnOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAuthorizationPrivateKeyArnOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAuthorizationPrivateKeyArnOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAuthorizationPrivateKeyArnOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAuthorizationPrivateKeyArnOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAuthorizationPrivateKeyArnOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAuthorizationPrivateKeyArnOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAuthorizationPrivateKeyArnOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAuthorizationPrivateKeyArnOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAuthorizationPrivateKeyArnOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAuthorizationPrivateKeyArnOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAuthorizationPrivateKeyArnOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAuthorizationPrivateKeyArnOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAuthorizationPrivateKeyArnOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAuthorizationPrivateKeyArnOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAuthorizationPrivateKeyArnOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAuthorizationPrivateKeyArnOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAuthorizationPrivateKeyArnOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAuthorizationPrivateKeyArnOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAuthorizationPrivateKeyArnOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAuthorizationPrivateKeyArnOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAuthorizationPrivateKeyArnOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAuthorizationPrivateKeyArnOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAuthorizationPrivateKeyArnOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAuthorizationPrivateKeyArnOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAuthorizationPrivateKeyArnOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAuthorizationPrivateKeyArnOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAuthorizationPrivateKeyArnOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAuthorizationPrivateKeyArnOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAuthorizationPrivateKeyArnOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAuthorizationPrivateKeyArnOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAuthorizationPrivateKeyArnOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAuthorizationPrivateKeyArnOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAuthorizationPrivateKeyArnOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAuthorizationPrivateKeyArnOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAuthorizationPrivateKeyArnOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAuthorizationPrivateKeyArnOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAuthorizationPrivateKeyArnOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAuthorizationPrivateKeyArnOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAuthorizationPrivateKeyArnOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAuthorizationPrivateKeyArnOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAuthorizationPrivateKeyArnOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAuthorizationPrivateKeyArnOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAuthorizationPrivateKeyArnOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAuthorizationPrivateKeyArnOutputReference.property.secretArn">secretArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAuthorizationPrivateKeyArnOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAuthorizationPrivateKeyArn">DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAuthorizationPrivateKeyArn</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAuthorizationPrivateKeyArnOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAuthorizationPrivateKeyArnOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `secretArn`<sup>Required</sup> <a name="secretArn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAuthorizationPrivateKeyArnOutputReference.property.secretArn"></a>

```typescript
public readonly secretArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAuthorizationPrivateKeyArnOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAuthorizationPrivateKeyArn;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAuthorizationPrivateKeyArn">DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAuthorizationPrivateKeyArn</a>

---


### DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationOutputReference <a name="DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationOutputReference.Initializer"></a>

```typescript
import { dataAwsccBedrockagentcorePaymentCredentialProvider } from '@cdktn/provider-awscc'

new dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationOutputReference.property.appId">appId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationOutputReference.property.appSecretArn">appSecretArn</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAppSecretArnOutputReference">DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAppSecretArnOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationOutputReference.property.appSecretJsonKey">appSecretJsonKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationOutputReference.property.appSecretSource">appSecretSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationOutputReference.property.authorizationId">authorizationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationOutputReference.property.authorizationPrivateKeyArn">authorizationPrivateKeyArn</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAuthorizationPrivateKeyArnOutputReference">DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAuthorizationPrivateKeyArnOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationOutputReference.property.authorizationPrivateKeyJsonKey">authorizationPrivateKeyJsonKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationOutputReference.property.authorizationPrivateKeySource">authorizationPrivateKeySource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfiguration">DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `appId`<sup>Required</sup> <a name="appId" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationOutputReference.property.appId"></a>

```typescript
public readonly appId: string;
```

- *Type:* string

---

##### `appSecretArn`<sup>Required</sup> <a name="appSecretArn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationOutputReference.property.appSecretArn"></a>

```typescript
public readonly appSecretArn: DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAppSecretArnOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAppSecretArnOutputReference">DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAppSecretArnOutputReference</a>

---

##### `appSecretJsonKey`<sup>Required</sup> <a name="appSecretJsonKey" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationOutputReference.property.appSecretJsonKey"></a>

```typescript
public readonly appSecretJsonKey: string;
```

- *Type:* string

---

##### `appSecretSource`<sup>Required</sup> <a name="appSecretSource" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationOutputReference.property.appSecretSource"></a>

```typescript
public readonly appSecretSource: string;
```

- *Type:* string

---

##### `authorizationId`<sup>Required</sup> <a name="authorizationId" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationOutputReference.property.authorizationId"></a>

```typescript
public readonly authorizationId: string;
```

- *Type:* string

---

##### `authorizationPrivateKeyArn`<sup>Required</sup> <a name="authorizationPrivateKeyArn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationOutputReference.property.authorizationPrivateKeyArn"></a>

```typescript
public readonly authorizationPrivateKeyArn: DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAuthorizationPrivateKeyArnOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAuthorizationPrivateKeyArnOutputReference">DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAuthorizationPrivateKeyArnOutputReference</a>

---

##### `authorizationPrivateKeyJsonKey`<sup>Required</sup> <a name="authorizationPrivateKeyJsonKey" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationOutputReference.property.authorizationPrivateKeyJsonKey"></a>

```typescript
public readonly authorizationPrivateKeyJsonKey: string;
```

- *Type:* string

---

##### `authorizationPrivateKeySource`<sup>Required</sup> <a name="authorizationPrivateKeySource" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationOutputReference.property.authorizationPrivateKeySource"></a>

```typescript
public readonly authorizationPrivateKeySource: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfiguration">DataAwsccBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfiguration</a>

---


### DataAwsccBedrockagentcorePaymentCredentialProviderTagsList <a name="DataAwsccBedrockagentcorePaymentCredentialProviderTagsList" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderTagsList.Initializer"></a>

```typescript
import { dataAwsccBedrockagentcorePaymentCredentialProvider } from '@cdktn/provider-awscc'

new dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderTagsList.get"></a>

```typescript
public get(index: number): DataAwsccBedrockagentcorePaymentCredentialProviderTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccBedrockagentcorePaymentCredentialProviderTagsOutputReference <a name="DataAwsccBedrockagentcorePaymentCredentialProviderTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderTagsOutputReference.Initializer"></a>

```typescript
import { dataAwsccBedrockagentcorePaymentCredentialProvider } from '@cdktn/provider-awscc'

new dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderTags">DataAwsccBedrockagentcorePaymentCredentialProviderTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccBedrockagentcorePaymentCredentialProviderTags;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentCredentialProvider.DataAwsccBedrockagentcorePaymentCredentialProviderTags">DataAwsccBedrockagentcorePaymentCredentialProviderTags</a>

---



