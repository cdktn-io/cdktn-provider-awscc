# `dataAwsccCognitoUserPoolRiskConfigurationAttachment` Submodule <a name="`dataAwsccCognitoUserPoolRiskConfigurationAttachment` Submodule" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccCognitoUserPoolRiskConfigurationAttachment <a name="DataAwsccCognitoUserPoolRiskConfigurationAttachment" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/cognito_user_pool_risk_configuration_attachment awscc_cognito_user_pool_risk_configuration_attachment}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachment.Initializer"></a>

```typescript
import { dataAwsccCognitoUserPoolRiskConfigurationAttachment } from '@cdktn/provider-awscc'

new dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachment(scope: Construct, id: string, config: DataAwsccCognitoUserPoolRiskConfigurationAttachmentConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachment.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachment.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachment.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentConfig">DataAwsccCognitoUserPoolRiskConfigurationAttachmentConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachment.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachment.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachment.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentConfig">DataAwsccCognitoUserPoolRiskConfigurationAttachmentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachment.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachment.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachment.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachment.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachment.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachment.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachment.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachment.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachment.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachment.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachment.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachment.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachment.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachment.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachment.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachment.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachment.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachment.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachment.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachment.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachment.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachment.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachment.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachment.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachment.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachment.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachment.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachment.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachment.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachment.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachment.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachment.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachment.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachment.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachment.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachment.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachment.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachment.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachment.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachment.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachment.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachment.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachment.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccCognitoUserPoolRiskConfigurationAttachment resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachment.isConstruct"></a>

```typescript
import { dataAwsccCognitoUserPoolRiskConfigurationAttachment } from '@cdktn/provider-awscc'

dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachment.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachment.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachment.isTerraformElement"></a>

```typescript
import { dataAwsccCognitoUserPoolRiskConfigurationAttachment } from '@cdktn/provider-awscc'

dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachment.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachment.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachment.isTerraformDataSource"></a>

```typescript
import { dataAwsccCognitoUserPoolRiskConfigurationAttachment } from '@cdktn/provider-awscc'

dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachment.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachment.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachment.generateConfigForImport"></a>

```typescript
import { dataAwsccCognitoUserPoolRiskConfigurationAttachment } from '@cdktn/provider-awscc'

dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachment.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccCognitoUserPoolRiskConfigurationAttachment resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachment.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachment.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccCognitoUserPoolRiskConfigurationAttachment to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccCognitoUserPoolRiskConfigurationAttachment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/cognito_user_pool_risk_configuration_attachment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachment.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccCognitoUserPoolRiskConfigurationAttachment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachment.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachment.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachment.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachment.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachment.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachment.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachment.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachment.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachment.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachment.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachment.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachment.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachment.property.accountTakeoverRiskConfiguration">accountTakeoverRiskConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationOutputReference">DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachment.property.clientId">clientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachment.property.compromisedCredentialsRiskConfiguration">compromisedCredentialsRiskConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationOutputReference">DataAwsccCognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachment.property.riskExceptionConfiguration">riskExceptionConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentRiskExceptionConfigurationOutputReference">DataAwsccCognitoUserPoolRiskConfigurationAttachmentRiskExceptionConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachment.property.userPoolId">userPoolId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachment.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachment.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachment.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachment.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachment.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachment.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachment.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachment.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachment.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachment.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachment.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachment.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachment.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachment.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `accountTakeoverRiskConfiguration`<sup>Required</sup> <a name="accountTakeoverRiskConfiguration" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachment.property.accountTakeoverRiskConfiguration"></a>

```typescript
public readonly accountTakeoverRiskConfiguration: DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationOutputReference">DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationOutputReference</a>

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachment.property.clientId"></a>

```typescript
public readonly clientId: string;
```

- *Type:* string

---

##### `compromisedCredentialsRiskConfiguration`<sup>Required</sup> <a name="compromisedCredentialsRiskConfiguration" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachment.property.compromisedCredentialsRiskConfiguration"></a>

```typescript
public readonly compromisedCredentialsRiskConfiguration: DataAwsccCognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationOutputReference">DataAwsccCognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationOutputReference</a>

---

##### `riskExceptionConfiguration`<sup>Required</sup> <a name="riskExceptionConfiguration" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachment.property.riskExceptionConfiguration"></a>

```typescript
public readonly riskExceptionConfiguration: DataAwsccCognitoUserPoolRiskConfigurationAttachmentRiskExceptionConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentRiskExceptionConfigurationOutputReference">DataAwsccCognitoUserPoolRiskConfigurationAttachmentRiskExceptionConfigurationOutputReference</a>

---

##### `userPoolId`<sup>Required</sup> <a name="userPoolId" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachment.property.userPoolId"></a>

```typescript
public readonly userPoolId: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachment.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachment.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachment.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachment.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfiguration <a name="DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfiguration" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfiguration.Initializer"></a>

```typescript
import { dataAwsccCognitoUserPoolRiskConfigurationAttachment } from '@cdktn/provider-awscc'

const dataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfiguration: dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfiguration = { ... }
```


### DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActions <a name="DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActions" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActions.Initializer"></a>

```typescript
import { dataAwsccCognitoUserPoolRiskConfigurationAttachment } from '@cdktn/provider-awscc'

const dataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActions: dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActions = { ... }
```


### DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsHighAction <a name="DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsHighAction" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsHighAction"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsHighAction.Initializer"></a>

```typescript
import { dataAwsccCognitoUserPoolRiskConfigurationAttachment } from '@cdktn/provider-awscc'

const dataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsHighAction: dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsHighAction = { ... }
```


### DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsLowAction <a name="DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsLowAction" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsLowAction"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsLowAction.Initializer"></a>

```typescript
import { dataAwsccCognitoUserPoolRiskConfigurationAttachment } from '@cdktn/provider-awscc'

const dataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsLowAction: dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsLowAction = { ... }
```


### DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsMediumAction <a name="DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsMediumAction" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsMediumAction"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsMediumAction.Initializer"></a>

```typescript
import { dataAwsccCognitoUserPoolRiskConfigurationAttachment } from '@cdktn/provider-awscc'

const dataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsMediumAction: dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsMediumAction = { ... }
```


### DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfiguration <a name="DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfiguration" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfiguration.Initializer"></a>

```typescript
import { dataAwsccCognitoUserPoolRiskConfigurationAttachment } from '@cdktn/provider-awscc'

const dataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfiguration: dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfiguration = { ... }
```


### DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmail <a name="DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmail" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmail"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmail.Initializer"></a>

```typescript
import { dataAwsccCognitoUserPoolRiskConfigurationAttachment } from '@cdktn/provider-awscc'

const dataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmail: dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmail = { ... }
```


### DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmail <a name="DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmail" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmail"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmail.Initializer"></a>

```typescript
import { dataAwsccCognitoUserPoolRiskConfigurationAttachment } from '@cdktn/provider-awscc'

const dataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmail: dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmail = { ... }
```


### DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmail <a name="DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmail" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmail"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmail.Initializer"></a>

```typescript
import { dataAwsccCognitoUserPoolRiskConfigurationAttachment } from '@cdktn/provider-awscc'

const dataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmail: dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmail = { ... }
```


### DataAwsccCognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfiguration <a name="DataAwsccCognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfiguration" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfiguration.Initializer"></a>

```typescript
import { dataAwsccCognitoUserPoolRiskConfigurationAttachment } from '@cdktn/provider-awscc'

const dataAwsccCognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfiguration: dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfiguration = { ... }
```


### DataAwsccCognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationActions <a name="DataAwsccCognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationActions" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationActions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationActions.Initializer"></a>

```typescript
import { dataAwsccCognitoUserPoolRiskConfigurationAttachment } from '@cdktn/provider-awscc'

const dataAwsccCognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationActions: dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationActions = { ... }
```


### DataAwsccCognitoUserPoolRiskConfigurationAttachmentConfig <a name="DataAwsccCognitoUserPoolRiskConfigurationAttachmentConfig" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentConfig.Initializer"></a>

```typescript
import { dataAwsccCognitoUserPoolRiskConfigurationAttachment } from '@cdktn/provider-awscc'

const dataAwsccCognitoUserPoolRiskConfigurationAttachmentConfig: dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/cognito_user_pool_risk_configuration_attachment#id DataAwsccCognitoUserPoolRiskConfigurationAttachment#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccCognitoUserPoolRiskConfigurationAttachmentRiskExceptionConfiguration <a name="DataAwsccCognitoUserPoolRiskConfigurationAttachmentRiskExceptionConfiguration" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentRiskExceptionConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentRiskExceptionConfiguration.Initializer"></a>

```typescript
import { dataAwsccCognitoUserPoolRiskConfigurationAttachment } from '@cdktn/provider-awscc'

const dataAwsccCognitoUserPoolRiskConfigurationAttachmentRiskExceptionConfiguration: dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentRiskExceptionConfiguration = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsHighActionOutputReference <a name="DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsHighActionOutputReference" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsHighActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsHighActionOutputReference.Initializer"></a>

```typescript
import { dataAwsccCognitoUserPoolRiskConfigurationAttachment } from '@cdktn/provider-awscc'

new dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsHighActionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsHighActionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsHighActionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsHighActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsHighActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsHighActionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsHighActionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsHighActionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsHighActionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsHighActionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsHighActionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsHighActionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsHighActionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsHighActionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsHighActionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsHighActionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsHighActionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsHighActionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsHighActionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsHighActionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsHighActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsHighActionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsHighActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsHighActionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsHighActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsHighActionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsHighActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsHighActionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsHighActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsHighActionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsHighActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsHighActionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsHighActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsHighActionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsHighActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsHighActionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsHighActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsHighActionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsHighActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsHighActionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsHighActionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsHighActionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsHighActionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsHighActionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsHighActionOutputReference.property.eventAction">eventAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsHighActionOutputReference.property.notify">notify</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsHighActionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsHighAction">DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsHighAction</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsHighActionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsHighActionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `eventAction`<sup>Required</sup> <a name="eventAction" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsHighActionOutputReference.property.eventAction"></a>

```typescript
public readonly eventAction: string;
```

- *Type:* string

---

##### `notify`<sup>Required</sup> <a name="notify" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsHighActionOutputReference.property.notify"></a>

```typescript
public readonly notify: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsHighActionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsHighAction;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsHighAction">DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsHighAction</a>

---


### DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsLowActionOutputReference <a name="DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsLowActionOutputReference" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsLowActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsLowActionOutputReference.Initializer"></a>

```typescript
import { dataAwsccCognitoUserPoolRiskConfigurationAttachment } from '@cdktn/provider-awscc'

new dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsLowActionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsLowActionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsLowActionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsLowActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsLowActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsLowActionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsLowActionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsLowActionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsLowActionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsLowActionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsLowActionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsLowActionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsLowActionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsLowActionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsLowActionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsLowActionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsLowActionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsLowActionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsLowActionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsLowActionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsLowActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsLowActionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsLowActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsLowActionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsLowActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsLowActionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsLowActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsLowActionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsLowActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsLowActionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsLowActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsLowActionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsLowActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsLowActionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsLowActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsLowActionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsLowActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsLowActionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsLowActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsLowActionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsLowActionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsLowActionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsLowActionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsLowActionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsLowActionOutputReference.property.eventAction">eventAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsLowActionOutputReference.property.notify">notify</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsLowActionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsLowAction">DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsLowAction</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsLowActionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsLowActionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `eventAction`<sup>Required</sup> <a name="eventAction" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsLowActionOutputReference.property.eventAction"></a>

```typescript
public readonly eventAction: string;
```

- *Type:* string

---

##### `notify`<sup>Required</sup> <a name="notify" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsLowActionOutputReference.property.notify"></a>

```typescript
public readonly notify: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsLowActionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsLowAction;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsLowAction">DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsLowAction</a>

---


### DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsMediumActionOutputReference <a name="DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsMediumActionOutputReference" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsMediumActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsMediumActionOutputReference.Initializer"></a>

```typescript
import { dataAwsccCognitoUserPoolRiskConfigurationAttachment } from '@cdktn/provider-awscc'

new dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsMediumActionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsMediumActionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsMediumActionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsMediumActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsMediumActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsMediumActionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsMediumActionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsMediumActionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsMediumActionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsMediumActionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsMediumActionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsMediumActionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsMediumActionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsMediumActionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsMediumActionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsMediumActionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsMediumActionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsMediumActionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsMediumActionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsMediumActionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsMediumActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsMediumActionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsMediumActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsMediumActionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsMediumActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsMediumActionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsMediumActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsMediumActionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsMediumActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsMediumActionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsMediumActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsMediumActionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsMediumActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsMediumActionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsMediumActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsMediumActionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsMediumActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsMediumActionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsMediumActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsMediumActionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsMediumActionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsMediumActionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsMediumActionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsMediumActionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsMediumActionOutputReference.property.eventAction">eventAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsMediumActionOutputReference.property.notify">notify</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsMediumActionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsMediumAction">DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsMediumAction</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsMediumActionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsMediumActionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `eventAction`<sup>Required</sup> <a name="eventAction" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsMediumActionOutputReference.property.eventAction"></a>

```typescript
public readonly eventAction: string;
```

- *Type:* string

---

##### `notify`<sup>Required</sup> <a name="notify" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsMediumActionOutputReference.property.notify"></a>

```typescript
public readonly notify: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsMediumActionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsMediumAction;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsMediumAction">DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsMediumAction</a>

---


### DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsOutputReference <a name="DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsOutputReference" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsOutputReference.Initializer"></a>

```typescript
import { dataAwsccCognitoUserPoolRiskConfigurationAttachment } from '@cdktn/provider-awscc'

new dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsOutputReference.property.highAction">highAction</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsHighActionOutputReference">DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsHighActionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsOutputReference.property.lowAction">lowAction</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsLowActionOutputReference">DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsLowActionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsOutputReference.property.mediumAction">mediumAction</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsMediumActionOutputReference">DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsMediumActionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActions">DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `highAction`<sup>Required</sup> <a name="highAction" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsOutputReference.property.highAction"></a>

```typescript
public readonly highAction: DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsHighActionOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsHighActionOutputReference">DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsHighActionOutputReference</a>

---

##### `lowAction`<sup>Required</sup> <a name="lowAction" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsOutputReference.property.lowAction"></a>

```typescript
public readonly lowAction: DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsLowActionOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsLowActionOutputReference">DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsLowActionOutputReference</a>

---

##### `mediumAction`<sup>Required</sup> <a name="mediumAction" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsOutputReference.property.mediumAction"></a>

```typescript
public readonly mediumAction: DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsMediumActionOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsMediumActionOutputReference">DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsMediumActionOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActions;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActions">DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActions</a>

---


### DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference <a name="DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference.Initializer"></a>

```typescript
import { dataAwsccCognitoUserPoolRiskConfigurationAttachment } from '@cdktn/provider-awscc'

new dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference.property.htmlBody">htmlBody</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference.property.subject">subject</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference.property.textBody">textBody</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmail">DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmail</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `htmlBody`<sup>Required</sup> <a name="htmlBody" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference.property.htmlBody"></a>

```typescript
public readonly htmlBody: string;
```

- *Type:* string

---

##### `subject`<sup>Required</sup> <a name="subject" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference.property.subject"></a>

```typescript
public readonly subject: string;
```

- *Type:* string

---

##### `textBody`<sup>Required</sup> <a name="textBody" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference.property.textBody"></a>

```typescript
public readonly textBody: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmail;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmail">DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmail</a>

---


### DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference <a name="DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference.Initializer"></a>

```typescript
import { dataAwsccCognitoUserPoolRiskConfigurationAttachment } from '@cdktn/provider-awscc'

new dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference.property.htmlBody">htmlBody</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference.property.subject">subject</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference.property.textBody">textBody</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmail">DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmail</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `htmlBody`<sup>Required</sup> <a name="htmlBody" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference.property.htmlBody"></a>

```typescript
public readonly htmlBody: string;
```

- *Type:* string

---

##### `subject`<sup>Required</sup> <a name="subject" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference.property.subject"></a>

```typescript
public readonly subject: string;
```

- *Type:* string

---

##### `textBody`<sup>Required</sup> <a name="textBody" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference.property.textBody"></a>

```typescript
public readonly textBody: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmail;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmail">DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmail</a>

---


### DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference <a name="DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference.Initializer"></a>

```typescript
import { dataAwsccCognitoUserPoolRiskConfigurationAttachment } from '@cdktn/provider-awscc'

new dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference.property.htmlBody">htmlBody</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference.property.subject">subject</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference.property.textBody">textBody</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmail">DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmail</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `htmlBody`<sup>Required</sup> <a name="htmlBody" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference.property.htmlBody"></a>

```typescript
public readonly htmlBody: string;
```

- *Type:* string

---

##### `subject`<sup>Required</sup> <a name="subject" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference.property.subject"></a>

```typescript
public readonly subject: string;
```

- *Type:* string

---

##### `textBody`<sup>Required</sup> <a name="textBody" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference.property.textBody"></a>

```typescript
public readonly textBody: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmail;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmail">DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmail</a>

---


### DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference <a name="DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.Initializer"></a>

```typescript
import { dataAwsccCognitoUserPoolRiskConfigurationAttachment } from '@cdktn/provider-awscc'

new dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.property.blockEmail">blockEmail</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference">DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.property.from">from</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.property.mfaEmail">mfaEmail</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference">DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.property.noActionEmail">noActionEmail</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference">DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.property.replyTo">replyTo</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.property.sourceArn">sourceArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfiguration">DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `blockEmail`<sup>Required</sup> <a name="blockEmail" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.property.blockEmail"></a>

```typescript
public readonly blockEmail: DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference">DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmailOutputReference</a>

---

##### `from`<sup>Required</sup> <a name="from" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.property.from"></a>

```typescript
public readonly from: string;
```

- *Type:* string

---

##### `mfaEmail`<sup>Required</sup> <a name="mfaEmail" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.property.mfaEmail"></a>

```typescript
public readonly mfaEmail: DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference">DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmailOutputReference</a>

---

##### `noActionEmail`<sup>Required</sup> <a name="noActionEmail" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.property.noActionEmail"></a>

```typescript
public readonly noActionEmail: DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference">DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmailOutputReference</a>

---

##### `replyTo`<sup>Required</sup> <a name="replyTo" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.property.replyTo"></a>

```typescript
public readonly replyTo: string;
```

- *Type:* string

---

##### `sourceArn`<sup>Required</sup> <a name="sourceArn" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.property.sourceArn"></a>

```typescript
public readonly sourceArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfiguration">DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfiguration</a>

---


### DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationOutputReference <a name="DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationOutputReference.Initializer"></a>

```typescript
import { dataAwsccCognitoUserPoolRiskConfigurationAttachment } from '@cdktn/provider-awscc'

new dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationOutputReference.property.actions">actions</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsOutputReference">DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationOutputReference.property.notifyConfiguration">notifyConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference">DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfiguration">DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `actions`<sup>Required</sup> <a name="actions" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationOutputReference.property.actions"></a>

```typescript
public readonly actions: DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsOutputReference">DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationActionsOutputReference</a>

---

##### `notifyConfiguration`<sup>Required</sup> <a name="notifyConfiguration" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationOutputReference.property.notifyConfiguration"></a>

```typescript
public readonly notifyConfiguration: DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference">DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationNotifyConfigurationOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfiguration">DataAwsccCognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfiguration</a>

---


### DataAwsccCognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationActionsOutputReference <a name="DataAwsccCognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationActionsOutputReference" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationActionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationActionsOutputReference.Initializer"></a>

```typescript
import { dataAwsccCognitoUserPoolRiskConfigurationAttachment } from '@cdktn/provider-awscc'

new dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationActionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationActionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationActionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationActionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationActionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationActionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationActionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationActionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationActionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationActionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationActionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationActionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationActionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationActionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationActionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationActionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationActionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationActionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationActionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationActionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationActionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationActionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationActionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationActionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationActionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationActionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationActionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationActionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationActionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationActionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationActionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationActionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationActionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationActionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationActionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationActionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationActionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationActionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationActionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationActionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationActionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationActionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationActionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationActionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationActionsOutputReference.property.eventAction">eventAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationActionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationActions">DataAwsccCognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationActions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationActionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationActionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `eventAction`<sup>Required</sup> <a name="eventAction" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationActionsOutputReference.property.eventAction"></a>

```typescript
public readonly eventAction: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationActionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccCognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationActions;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationActions">DataAwsccCognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationActions</a>

---


### DataAwsccCognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationOutputReference <a name="DataAwsccCognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationOutputReference.Initializer"></a>

```typescript
import { dataAwsccCognitoUserPoolRiskConfigurationAttachment } from '@cdktn/provider-awscc'

new dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationOutputReference.property.actions">actions</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationActionsOutputReference">DataAwsccCognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationActionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationOutputReference.property.eventFilter">eventFilter</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfiguration">DataAwsccCognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `actions`<sup>Required</sup> <a name="actions" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationOutputReference.property.actions"></a>

```typescript
public readonly actions: DataAwsccCognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationActionsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationActionsOutputReference">DataAwsccCognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationActionsOutputReference</a>

---

##### `eventFilter`<sup>Required</sup> <a name="eventFilter" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationOutputReference.property.eventFilter"></a>

```typescript
public readonly eventFilter: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccCognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfiguration">DataAwsccCognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfiguration</a>

---


### DataAwsccCognitoUserPoolRiskConfigurationAttachmentRiskExceptionConfigurationOutputReference <a name="DataAwsccCognitoUserPoolRiskConfigurationAttachmentRiskExceptionConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentRiskExceptionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentRiskExceptionConfigurationOutputReference.Initializer"></a>

```typescript
import { dataAwsccCognitoUserPoolRiskConfigurationAttachment } from '@cdktn/provider-awscc'

new dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentRiskExceptionConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentRiskExceptionConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentRiskExceptionConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentRiskExceptionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentRiskExceptionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentRiskExceptionConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentRiskExceptionConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentRiskExceptionConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentRiskExceptionConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentRiskExceptionConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentRiskExceptionConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentRiskExceptionConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentRiskExceptionConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentRiskExceptionConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentRiskExceptionConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentRiskExceptionConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentRiskExceptionConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentRiskExceptionConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentRiskExceptionConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentRiskExceptionConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentRiskExceptionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentRiskExceptionConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentRiskExceptionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentRiskExceptionConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentRiskExceptionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentRiskExceptionConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentRiskExceptionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentRiskExceptionConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentRiskExceptionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentRiskExceptionConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentRiskExceptionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentRiskExceptionConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentRiskExceptionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentRiskExceptionConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentRiskExceptionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentRiskExceptionConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentRiskExceptionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentRiskExceptionConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentRiskExceptionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentRiskExceptionConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentRiskExceptionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentRiskExceptionConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentRiskExceptionConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentRiskExceptionConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentRiskExceptionConfigurationOutputReference.property.blockedIpRangeList">blockedIpRangeList</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentRiskExceptionConfigurationOutputReference.property.skippedIpRangeList">skippedIpRangeList</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentRiskExceptionConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentRiskExceptionConfiguration">DataAwsccCognitoUserPoolRiskConfigurationAttachmentRiskExceptionConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentRiskExceptionConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentRiskExceptionConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `blockedIpRangeList`<sup>Required</sup> <a name="blockedIpRangeList" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentRiskExceptionConfigurationOutputReference.property.blockedIpRangeList"></a>

```typescript
public readonly blockedIpRangeList: string[];
```

- *Type:* string[]

---

##### `skippedIpRangeList`<sup>Required</sup> <a name="skippedIpRangeList" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentRiskExceptionConfigurationOutputReference.property.skippedIpRangeList"></a>

```typescript
public readonly skippedIpRangeList: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentRiskExceptionConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccCognitoUserPoolRiskConfigurationAttachmentRiskExceptionConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRiskConfigurationAttachment.DataAwsccCognitoUserPoolRiskConfigurationAttachmentRiskExceptionConfiguration">DataAwsccCognitoUserPoolRiskConfigurationAttachmentRiskExceptionConfiguration</a>

---



