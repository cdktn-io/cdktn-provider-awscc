# `dataAwsccBedrockagentcorePaymentConnector` Submodule <a name="`dataAwsccBedrockagentcorePaymentConnector` Submodule" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccBedrockagentcorePaymentConnector <a name="DataAwsccBedrockagentcorePaymentConnector" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnector"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/data-sources/bedrockagentcore_payment_connector awscc_bedrockagentcore_payment_connector}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnector.Initializer"></a>

```typescript
import { dataAwsccBedrockagentcorePaymentConnector } from '@cdktn/provider-awscc'

new dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnector(scope: Construct, id: string, config: DataAwsccBedrockagentcorePaymentConnectorConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnector.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnector.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnector.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorConfig">DataAwsccBedrockagentcorePaymentConnectorConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnector.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnector.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnector.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorConfig">DataAwsccBedrockagentcorePaymentConnectorConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnector.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnector.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnector.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnector.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnector.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnector.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnector.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnector.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnector.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnector.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnector.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnector.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnector.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnector.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnector.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnector.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnector.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnector.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnector.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnector.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnector.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnector.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnector.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnector.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnector.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnector.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnector.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnector.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnector.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnector.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnector.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnector.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnector.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnector.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnector.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnector.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnector.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnector.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnector.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnector.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnector.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnector.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnector.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnector.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnector.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnector.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnector.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnector.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnector.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnector.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnector.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnector.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnector.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnector.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccBedrockagentcorePaymentConnector resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnector.isConstruct"></a>

```typescript
import { dataAwsccBedrockagentcorePaymentConnector } from '@cdktn/provider-awscc'

dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnector.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnector.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnector.isTerraformElement"></a>

```typescript
import { dataAwsccBedrockagentcorePaymentConnector } from '@cdktn/provider-awscc'

dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnector.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnector.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnector.isTerraformDataSource"></a>

```typescript
import { dataAwsccBedrockagentcorePaymentConnector } from '@cdktn/provider-awscc'

dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnector.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnector.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnector.generateConfigForImport"></a>

```typescript
import { dataAwsccBedrockagentcorePaymentConnector } from '@cdktn/provider-awscc'

dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnector.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccBedrockagentcorePaymentConnector resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnector.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnector.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccBedrockagentcorePaymentConnector to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnector.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccBedrockagentcorePaymentConnector that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/data-sources/bedrockagentcore_payment_connector#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnector.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccBedrockagentcorePaymentConnector to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnector.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnector.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnector.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnector.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnector.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnector.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnector.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnector.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnector.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnector.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnector.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnector.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnector.property.authorizationUrl">authorizationUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnector.property.connectorCreatedAt">connectorCreatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnector.property.connectorLastUpdatedAt">connectorLastUpdatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnector.property.connectorName">connectorName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnector.property.connectorStatus">connectorStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnector.property.connectorType">connectorType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnector.property.credentialProviderConfigurations">credentialProviderConfigurations</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsList">DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnector.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnector.property.paymentConnectorArn">paymentConnectorArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnector.property.paymentConnectorId">paymentConnectorId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnector.property.paymentManagerId">paymentManagerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnector.property.provisionMode">provisionMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnector.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnector.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnector.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnector.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnector.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnector.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnector.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnector.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnector.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnector.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnector.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnector.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnector.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnector.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `authorizationUrl`<sup>Required</sup> <a name="authorizationUrl" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnector.property.authorizationUrl"></a>

```typescript
public readonly authorizationUrl: string;
```

- *Type:* string

---

##### `connectorCreatedAt`<sup>Required</sup> <a name="connectorCreatedAt" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnector.property.connectorCreatedAt"></a>

```typescript
public readonly connectorCreatedAt: string;
```

- *Type:* string

---

##### `connectorLastUpdatedAt`<sup>Required</sup> <a name="connectorLastUpdatedAt" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnector.property.connectorLastUpdatedAt"></a>

```typescript
public readonly connectorLastUpdatedAt: string;
```

- *Type:* string

---

##### `connectorName`<sup>Required</sup> <a name="connectorName" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnector.property.connectorName"></a>

```typescript
public readonly connectorName: string;
```

- *Type:* string

---

##### `connectorStatus`<sup>Required</sup> <a name="connectorStatus" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnector.property.connectorStatus"></a>

```typescript
public readonly connectorStatus: string;
```

- *Type:* string

---

##### `connectorType`<sup>Required</sup> <a name="connectorType" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnector.property.connectorType"></a>

```typescript
public readonly connectorType: string;
```

- *Type:* string

---

##### `credentialProviderConfigurations`<sup>Required</sup> <a name="credentialProviderConfigurations" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnector.property.credentialProviderConfigurations"></a>

```typescript
public readonly credentialProviderConfigurations: DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsList">DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsList</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnector.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `paymentConnectorArn`<sup>Required</sup> <a name="paymentConnectorArn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnector.property.paymentConnectorArn"></a>

```typescript
public readonly paymentConnectorArn: string;
```

- *Type:* string

---

##### `paymentConnectorId`<sup>Required</sup> <a name="paymentConnectorId" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnector.property.paymentConnectorId"></a>

```typescript
public readonly paymentConnectorId: string;
```

- *Type:* string

---

##### `paymentManagerId`<sup>Required</sup> <a name="paymentManagerId" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnector.property.paymentManagerId"></a>

```typescript
public readonly paymentManagerId: string;
```

- *Type:* string

---

##### `provisionMode`<sup>Required</sup> <a name="provisionMode" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnector.property.provisionMode"></a>

```typescript
public readonly provisionMode: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnector.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnector.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnector.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnector.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccBedrockagentcorePaymentConnectorConfig <a name="DataAwsccBedrockagentcorePaymentConnectorConfig" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorConfig.Initializer"></a>

```typescript
import { dataAwsccBedrockagentcorePaymentConnector } from '@cdktn/provider-awscc'

const dataAwsccBedrockagentcorePaymentConnectorConfig: dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/data-sources/bedrockagentcore_payment_connector#id DataAwsccBedrockagentcorePaymentConnector#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurations <a name="DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurations" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurations.Initializer"></a>

```typescript
import { dataAwsccBedrockagentcorePaymentConnector } from '@cdktn/provider-awscc'

const dataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurations: dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurations = { ... }
```


### DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsCoinbaseCdp <a name="DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsCoinbaseCdp" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsCoinbaseCdp"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsCoinbaseCdp.Initializer"></a>

```typescript
import { dataAwsccBedrockagentcorePaymentConnector } from '@cdktn/provider-awscc'

const dataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsCoinbaseCdp: dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsCoinbaseCdp = { ... }
```


### DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsStripePrivy <a name="DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsStripePrivy" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsStripePrivy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsStripePrivy.Initializer"></a>

```typescript
import { dataAwsccBedrockagentcorePaymentConnector } from '@cdktn/provider-awscc'

const dataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsStripePrivy: dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsStripePrivy = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsCoinbaseCdpOutputReference <a name="DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsCoinbaseCdpOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsCoinbaseCdpOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsCoinbaseCdpOutputReference.Initializer"></a>

```typescript
import { dataAwsccBedrockagentcorePaymentConnector } from '@cdktn/provider-awscc'

new dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsCoinbaseCdpOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsCoinbaseCdpOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsCoinbaseCdpOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsCoinbaseCdpOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsCoinbaseCdpOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsCoinbaseCdpOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsCoinbaseCdpOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsCoinbaseCdpOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsCoinbaseCdpOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsCoinbaseCdpOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsCoinbaseCdpOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsCoinbaseCdpOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsCoinbaseCdpOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsCoinbaseCdpOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsCoinbaseCdpOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsCoinbaseCdpOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsCoinbaseCdpOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsCoinbaseCdpOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsCoinbaseCdpOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsCoinbaseCdpOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsCoinbaseCdpOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsCoinbaseCdpOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsCoinbaseCdpOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsCoinbaseCdpOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsCoinbaseCdpOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsCoinbaseCdpOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsCoinbaseCdpOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsCoinbaseCdpOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsCoinbaseCdpOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsCoinbaseCdpOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsCoinbaseCdpOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsCoinbaseCdpOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsCoinbaseCdpOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsCoinbaseCdpOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsCoinbaseCdpOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsCoinbaseCdpOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsCoinbaseCdpOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsCoinbaseCdpOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsCoinbaseCdpOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsCoinbaseCdpOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsCoinbaseCdpOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsCoinbaseCdpOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsCoinbaseCdpOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsCoinbaseCdpOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsCoinbaseCdpOutputReference.property.credentialProviderArn">credentialProviderArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsCoinbaseCdpOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsCoinbaseCdp">DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsCoinbaseCdp</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsCoinbaseCdpOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsCoinbaseCdpOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `credentialProviderArn`<sup>Required</sup> <a name="credentialProviderArn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsCoinbaseCdpOutputReference.property.credentialProviderArn"></a>

```typescript
public readonly credentialProviderArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsCoinbaseCdpOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsCoinbaseCdp;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsCoinbaseCdp">DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsCoinbaseCdp</a>

---


### DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsList <a name="DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsList" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsList.Initializer"></a>

```typescript
import { dataAwsccBedrockagentcorePaymentConnector } from '@cdktn/provider-awscc'

new dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsList.get"></a>

```typescript
public get(index: number): DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsOutputReference <a name="DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsOutputReference.Initializer"></a>

```typescript
import { dataAwsccBedrockagentcorePaymentConnector } from '@cdktn/provider-awscc'

new dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsOutputReference.property.coinbaseCdp">coinbaseCdp</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsCoinbaseCdpOutputReference">DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsCoinbaseCdpOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsOutputReference.property.stripePrivy">stripePrivy</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsStripePrivyOutputReference">DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsStripePrivyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurations">DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `coinbaseCdp`<sup>Required</sup> <a name="coinbaseCdp" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsOutputReference.property.coinbaseCdp"></a>

```typescript
public readonly coinbaseCdp: DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsCoinbaseCdpOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsCoinbaseCdpOutputReference">DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsCoinbaseCdpOutputReference</a>

---

##### `stripePrivy`<sup>Required</sup> <a name="stripePrivy" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsOutputReference.property.stripePrivy"></a>

```typescript
public readonly stripePrivy: DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsStripePrivyOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsStripePrivyOutputReference">DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsStripePrivyOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurations;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurations">DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurations</a>

---


### DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsStripePrivyOutputReference <a name="DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsStripePrivyOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsStripePrivyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsStripePrivyOutputReference.Initializer"></a>

```typescript
import { dataAwsccBedrockagentcorePaymentConnector } from '@cdktn/provider-awscc'

new dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsStripePrivyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsStripePrivyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsStripePrivyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsStripePrivyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsStripePrivyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsStripePrivyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsStripePrivyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsStripePrivyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsStripePrivyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsStripePrivyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsStripePrivyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsStripePrivyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsStripePrivyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsStripePrivyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsStripePrivyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsStripePrivyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsStripePrivyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsStripePrivyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsStripePrivyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsStripePrivyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsStripePrivyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsStripePrivyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsStripePrivyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsStripePrivyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsStripePrivyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsStripePrivyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsStripePrivyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsStripePrivyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsStripePrivyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsStripePrivyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsStripePrivyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsStripePrivyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsStripePrivyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsStripePrivyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsStripePrivyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsStripePrivyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsStripePrivyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsStripePrivyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsStripePrivyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsStripePrivyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsStripePrivyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsStripePrivyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsStripePrivyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsStripePrivyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsStripePrivyOutputReference.property.credentialProviderArn">credentialProviderArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsStripePrivyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsStripePrivy">DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsStripePrivy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsStripePrivyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsStripePrivyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `credentialProviderArn`<sup>Required</sup> <a name="credentialProviderArn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsStripePrivyOutputReference.property.credentialProviderArn"></a>

```typescript
public readonly credentialProviderArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsStripePrivyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsStripePrivy;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsStripePrivy">DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsStripePrivy</a>

---



