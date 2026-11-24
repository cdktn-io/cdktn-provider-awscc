# `dataAwsccCognitoUserPoolClientSessionConfigurationAttachment` Submodule <a name="`dataAwsccCognitoUserPoolClientSessionConfigurationAttachment` Submodule" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClientSessionConfigurationAttachment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccCognitoUserPoolClientSessionConfigurationAttachment <a name="DataAwsccCognitoUserPoolClientSessionConfigurationAttachment" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClientSessionConfigurationAttachment.DataAwsccCognitoUserPoolClientSessionConfigurationAttachment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/data-sources/cognito_user_pool_client_session_configuration_attachment awscc_cognito_user_pool_client_session_configuration_attachment}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClientSessionConfigurationAttachment.DataAwsccCognitoUserPoolClientSessionConfigurationAttachment.Initializer"></a>

```typescript
import { dataAwsccCognitoUserPoolClientSessionConfigurationAttachment } from '@cdktn/provider-awscc'

new dataAwsccCognitoUserPoolClientSessionConfigurationAttachment.DataAwsccCognitoUserPoolClientSessionConfigurationAttachment(scope: Construct, id: string, config: DataAwsccCognitoUserPoolClientSessionConfigurationAttachmentConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClientSessionConfigurationAttachment.DataAwsccCognitoUserPoolClientSessionConfigurationAttachment.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClientSessionConfigurationAttachment.DataAwsccCognitoUserPoolClientSessionConfigurationAttachment.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClientSessionConfigurationAttachment.DataAwsccCognitoUserPoolClientSessionConfigurationAttachment.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClientSessionConfigurationAttachment.DataAwsccCognitoUserPoolClientSessionConfigurationAttachmentConfig">DataAwsccCognitoUserPoolClientSessionConfigurationAttachmentConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClientSessionConfigurationAttachment.DataAwsccCognitoUserPoolClientSessionConfigurationAttachment.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClientSessionConfigurationAttachment.DataAwsccCognitoUserPoolClientSessionConfigurationAttachment.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClientSessionConfigurationAttachment.DataAwsccCognitoUserPoolClientSessionConfigurationAttachment.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClientSessionConfigurationAttachment.DataAwsccCognitoUserPoolClientSessionConfigurationAttachmentConfig">DataAwsccCognitoUserPoolClientSessionConfigurationAttachmentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClientSessionConfigurationAttachment.DataAwsccCognitoUserPoolClientSessionConfigurationAttachment.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClientSessionConfigurationAttachment.DataAwsccCognitoUserPoolClientSessionConfigurationAttachment.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClientSessionConfigurationAttachment.DataAwsccCognitoUserPoolClientSessionConfigurationAttachment.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClientSessionConfigurationAttachment.DataAwsccCognitoUserPoolClientSessionConfigurationAttachment.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClientSessionConfigurationAttachment.DataAwsccCognitoUserPoolClientSessionConfigurationAttachment.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClientSessionConfigurationAttachment.DataAwsccCognitoUserPoolClientSessionConfigurationAttachment.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClientSessionConfigurationAttachment.DataAwsccCognitoUserPoolClientSessionConfigurationAttachment.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClientSessionConfigurationAttachment.DataAwsccCognitoUserPoolClientSessionConfigurationAttachment.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClientSessionConfigurationAttachment.DataAwsccCognitoUserPoolClientSessionConfigurationAttachment.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClientSessionConfigurationAttachment.DataAwsccCognitoUserPoolClientSessionConfigurationAttachment.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClientSessionConfigurationAttachment.DataAwsccCognitoUserPoolClientSessionConfigurationAttachment.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClientSessionConfigurationAttachment.DataAwsccCognitoUserPoolClientSessionConfigurationAttachment.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClientSessionConfigurationAttachment.DataAwsccCognitoUserPoolClientSessionConfigurationAttachment.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClientSessionConfigurationAttachment.DataAwsccCognitoUserPoolClientSessionConfigurationAttachment.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClientSessionConfigurationAttachment.DataAwsccCognitoUserPoolClientSessionConfigurationAttachment.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClientSessionConfigurationAttachment.DataAwsccCognitoUserPoolClientSessionConfigurationAttachment.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClientSessionConfigurationAttachment.DataAwsccCognitoUserPoolClientSessionConfigurationAttachment.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClientSessionConfigurationAttachment.DataAwsccCognitoUserPoolClientSessionConfigurationAttachment.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClientSessionConfigurationAttachment.DataAwsccCognitoUserPoolClientSessionConfigurationAttachment.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClientSessionConfigurationAttachment.DataAwsccCognitoUserPoolClientSessionConfigurationAttachment.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClientSessionConfigurationAttachment.DataAwsccCognitoUserPoolClientSessionConfigurationAttachment.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClientSessionConfigurationAttachment.DataAwsccCognitoUserPoolClientSessionConfigurationAttachment.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClientSessionConfigurationAttachment.DataAwsccCognitoUserPoolClientSessionConfigurationAttachment.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClientSessionConfigurationAttachment.DataAwsccCognitoUserPoolClientSessionConfigurationAttachment.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClientSessionConfigurationAttachment.DataAwsccCognitoUserPoolClientSessionConfigurationAttachment.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClientSessionConfigurationAttachment.DataAwsccCognitoUserPoolClientSessionConfigurationAttachment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClientSessionConfigurationAttachment.DataAwsccCognitoUserPoolClientSessionConfigurationAttachment.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClientSessionConfigurationAttachment.DataAwsccCognitoUserPoolClientSessionConfigurationAttachment.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClientSessionConfigurationAttachment.DataAwsccCognitoUserPoolClientSessionConfigurationAttachment.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClientSessionConfigurationAttachment.DataAwsccCognitoUserPoolClientSessionConfigurationAttachment.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClientSessionConfigurationAttachment.DataAwsccCognitoUserPoolClientSessionConfigurationAttachment.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClientSessionConfigurationAttachment.DataAwsccCognitoUserPoolClientSessionConfigurationAttachment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClientSessionConfigurationAttachment.DataAwsccCognitoUserPoolClientSessionConfigurationAttachment.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClientSessionConfigurationAttachment.DataAwsccCognitoUserPoolClientSessionConfigurationAttachment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClientSessionConfigurationAttachment.DataAwsccCognitoUserPoolClientSessionConfigurationAttachment.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClientSessionConfigurationAttachment.DataAwsccCognitoUserPoolClientSessionConfigurationAttachment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClientSessionConfigurationAttachment.DataAwsccCognitoUserPoolClientSessionConfigurationAttachment.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClientSessionConfigurationAttachment.DataAwsccCognitoUserPoolClientSessionConfigurationAttachment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClientSessionConfigurationAttachment.DataAwsccCognitoUserPoolClientSessionConfigurationAttachment.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClientSessionConfigurationAttachment.DataAwsccCognitoUserPoolClientSessionConfigurationAttachment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClientSessionConfigurationAttachment.DataAwsccCognitoUserPoolClientSessionConfigurationAttachment.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClientSessionConfigurationAttachment.DataAwsccCognitoUserPoolClientSessionConfigurationAttachment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClientSessionConfigurationAttachment.DataAwsccCognitoUserPoolClientSessionConfigurationAttachment.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClientSessionConfigurationAttachment.DataAwsccCognitoUserPoolClientSessionConfigurationAttachment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClientSessionConfigurationAttachment.DataAwsccCognitoUserPoolClientSessionConfigurationAttachment.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClientSessionConfigurationAttachment.DataAwsccCognitoUserPoolClientSessionConfigurationAttachment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClientSessionConfigurationAttachment.DataAwsccCognitoUserPoolClientSessionConfigurationAttachment.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClientSessionConfigurationAttachment.DataAwsccCognitoUserPoolClientSessionConfigurationAttachment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClientSessionConfigurationAttachment.DataAwsccCognitoUserPoolClientSessionConfigurationAttachment.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClientSessionConfigurationAttachment.DataAwsccCognitoUserPoolClientSessionConfigurationAttachment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClientSessionConfigurationAttachment.DataAwsccCognitoUserPoolClientSessionConfigurationAttachment.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClientSessionConfigurationAttachment.DataAwsccCognitoUserPoolClientSessionConfigurationAttachment.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClientSessionConfigurationAttachment.DataAwsccCognitoUserPoolClientSessionConfigurationAttachment.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClientSessionConfigurationAttachment.DataAwsccCognitoUserPoolClientSessionConfigurationAttachment.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccCognitoUserPoolClientSessionConfigurationAttachment resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClientSessionConfigurationAttachment.DataAwsccCognitoUserPoolClientSessionConfigurationAttachment.isConstruct"></a>

```typescript
import { dataAwsccCognitoUserPoolClientSessionConfigurationAttachment } from '@cdktn/provider-awscc'

dataAwsccCognitoUserPoolClientSessionConfigurationAttachment.DataAwsccCognitoUserPoolClientSessionConfigurationAttachment.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClientSessionConfigurationAttachment.DataAwsccCognitoUserPoolClientSessionConfigurationAttachment.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClientSessionConfigurationAttachment.DataAwsccCognitoUserPoolClientSessionConfigurationAttachment.isTerraformElement"></a>

```typescript
import { dataAwsccCognitoUserPoolClientSessionConfigurationAttachment } from '@cdktn/provider-awscc'

dataAwsccCognitoUserPoolClientSessionConfigurationAttachment.DataAwsccCognitoUserPoolClientSessionConfigurationAttachment.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClientSessionConfigurationAttachment.DataAwsccCognitoUserPoolClientSessionConfigurationAttachment.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClientSessionConfigurationAttachment.DataAwsccCognitoUserPoolClientSessionConfigurationAttachment.isTerraformDataSource"></a>

```typescript
import { dataAwsccCognitoUserPoolClientSessionConfigurationAttachment } from '@cdktn/provider-awscc'

dataAwsccCognitoUserPoolClientSessionConfigurationAttachment.DataAwsccCognitoUserPoolClientSessionConfigurationAttachment.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClientSessionConfigurationAttachment.DataAwsccCognitoUserPoolClientSessionConfigurationAttachment.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClientSessionConfigurationAttachment.DataAwsccCognitoUserPoolClientSessionConfigurationAttachment.generateConfigForImport"></a>

```typescript
import { dataAwsccCognitoUserPoolClientSessionConfigurationAttachment } from '@cdktn/provider-awscc'

dataAwsccCognitoUserPoolClientSessionConfigurationAttachment.DataAwsccCognitoUserPoolClientSessionConfigurationAttachment.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccCognitoUserPoolClientSessionConfigurationAttachment resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClientSessionConfigurationAttachment.DataAwsccCognitoUserPoolClientSessionConfigurationAttachment.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClientSessionConfigurationAttachment.DataAwsccCognitoUserPoolClientSessionConfigurationAttachment.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccCognitoUserPoolClientSessionConfigurationAttachment to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClientSessionConfigurationAttachment.DataAwsccCognitoUserPoolClientSessionConfigurationAttachment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccCognitoUserPoolClientSessionConfigurationAttachment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/data-sources/cognito_user_pool_client_session_configuration_attachment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClientSessionConfigurationAttachment.DataAwsccCognitoUserPoolClientSessionConfigurationAttachment.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccCognitoUserPoolClientSessionConfigurationAttachment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClientSessionConfigurationAttachment.DataAwsccCognitoUserPoolClientSessionConfigurationAttachment.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClientSessionConfigurationAttachment.DataAwsccCognitoUserPoolClientSessionConfigurationAttachment.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClientSessionConfigurationAttachment.DataAwsccCognitoUserPoolClientSessionConfigurationAttachment.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClientSessionConfigurationAttachment.DataAwsccCognitoUserPoolClientSessionConfigurationAttachment.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClientSessionConfigurationAttachment.DataAwsccCognitoUserPoolClientSessionConfigurationAttachment.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClientSessionConfigurationAttachment.DataAwsccCognitoUserPoolClientSessionConfigurationAttachment.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClientSessionConfigurationAttachment.DataAwsccCognitoUserPoolClientSessionConfigurationAttachment.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClientSessionConfigurationAttachment.DataAwsccCognitoUserPoolClientSessionConfigurationAttachment.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClientSessionConfigurationAttachment.DataAwsccCognitoUserPoolClientSessionConfigurationAttachment.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClientSessionConfigurationAttachment.DataAwsccCognitoUserPoolClientSessionConfigurationAttachment.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClientSessionConfigurationAttachment.DataAwsccCognitoUserPoolClientSessionConfigurationAttachment.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClientSessionConfigurationAttachment.DataAwsccCognitoUserPoolClientSessionConfigurationAttachment.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClientSessionConfigurationAttachment.DataAwsccCognitoUserPoolClientSessionConfigurationAttachment.property.clientId">clientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClientSessionConfigurationAttachment.DataAwsccCognitoUserPoolClientSessionConfigurationAttachment.property.ssoSession">ssoSession</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClientSessionConfigurationAttachment.DataAwsccCognitoUserPoolClientSessionConfigurationAttachmentSsoSessionOutputReference">DataAwsccCognitoUserPoolClientSessionConfigurationAttachmentSsoSessionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClientSessionConfigurationAttachment.DataAwsccCognitoUserPoolClientSessionConfigurationAttachment.property.userPoolId">userPoolId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClientSessionConfigurationAttachment.DataAwsccCognitoUserPoolClientSessionConfigurationAttachment.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClientSessionConfigurationAttachment.DataAwsccCognitoUserPoolClientSessionConfigurationAttachment.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClientSessionConfigurationAttachment.DataAwsccCognitoUserPoolClientSessionConfigurationAttachment.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClientSessionConfigurationAttachment.DataAwsccCognitoUserPoolClientSessionConfigurationAttachment.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClientSessionConfigurationAttachment.DataAwsccCognitoUserPoolClientSessionConfigurationAttachment.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClientSessionConfigurationAttachment.DataAwsccCognitoUserPoolClientSessionConfigurationAttachment.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClientSessionConfigurationAttachment.DataAwsccCognitoUserPoolClientSessionConfigurationAttachment.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClientSessionConfigurationAttachment.DataAwsccCognitoUserPoolClientSessionConfigurationAttachment.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClientSessionConfigurationAttachment.DataAwsccCognitoUserPoolClientSessionConfigurationAttachment.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClientSessionConfigurationAttachment.DataAwsccCognitoUserPoolClientSessionConfigurationAttachment.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClientSessionConfigurationAttachment.DataAwsccCognitoUserPoolClientSessionConfigurationAttachment.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClientSessionConfigurationAttachment.DataAwsccCognitoUserPoolClientSessionConfigurationAttachment.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClientSessionConfigurationAttachment.DataAwsccCognitoUserPoolClientSessionConfigurationAttachment.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClientSessionConfigurationAttachment.DataAwsccCognitoUserPoolClientSessionConfigurationAttachment.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClientSessionConfigurationAttachment.DataAwsccCognitoUserPoolClientSessionConfigurationAttachment.property.clientId"></a>

```typescript
public readonly clientId: string;
```

- *Type:* string

---

##### `ssoSession`<sup>Required</sup> <a name="ssoSession" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClientSessionConfigurationAttachment.DataAwsccCognitoUserPoolClientSessionConfigurationAttachment.property.ssoSession"></a>

```typescript
public readonly ssoSession: DataAwsccCognitoUserPoolClientSessionConfigurationAttachmentSsoSessionOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClientSessionConfigurationAttachment.DataAwsccCognitoUserPoolClientSessionConfigurationAttachmentSsoSessionOutputReference">DataAwsccCognitoUserPoolClientSessionConfigurationAttachmentSsoSessionOutputReference</a>

---

##### `userPoolId`<sup>Required</sup> <a name="userPoolId" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClientSessionConfigurationAttachment.DataAwsccCognitoUserPoolClientSessionConfigurationAttachment.property.userPoolId"></a>

```typescript
public readonly userPoolId: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClientSessionConfigurationAttachment.DataAwsccCognitoUserPoolClientSessionConfigurationAttachment.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClientSessionConfigurationAttachment.DataAwsccCognitoUserPoolClientSessionConfigurationAttachment.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClientSessionConfigurationAttachment.DataAwsccCognitoUserPoolClientSessionConfigurationAttachment.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClientSessionConfigurationAttachment.DataAwsccCognitoUserPoolClientSessionConfigurationAttachment.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccCognitoUserPoolClientSessionConfigurationAttachmentConfig <a name="DataAwsccCognitoUserPoolClientSessionConfigurationAttachmentConfig" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClientSessionConfigurationAttachment.DataAwsccCognitoUserPoolClientSessionConfigurationAttachmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClientSessionConfigurationAttachment.DataAwsccCognitoUserPoolClientSessionConfigurationAttachmentConfig.Initializer"></a>

```typescript
import { dataAwsccCognitoUserPoolClientSessionConfigurationAttachment } from '@cdktn/provider-awscc'

const dataAwsccCognitoUserPoolClientSessionConfigurationAttachmentConfig: dataAwsccCognitoUserPoolClientSessionConfigurationAttachment.DataAwsccCognitoUserPoolClientSessionConfigurationAttachmentConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClientSessionConfigurationAttachment.DataAwsccCognitoUserPoolClientSessionConfigurationAttachmentConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClientSessionConfigurationAttachment.DataAwsccCognitoUserPoolClientSessionConfigurationAttachmentConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClientSessionConfigurationAttachment.DataAwsccCognitoUserPoolClientSessionConfigurationAttachmentConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClientSessionConfigurationAttachment.DataAwsccCognitoUserPoolClientSessionConfigurationAttachmentConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClientSessionConfigurationAttachment.DataAwsccCognitoUserPoolClientSessionConfigurationAttachmentConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClientSessionConfigurationAttachment.DataAwsccCognitoUserPoolClientSessionConfigurationAttachmentConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClientSessionConfigurationAttachment.DataAwsccCognitoUserPoolClientSessionConfigurationAttachmentConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClientSessionConfigurationAttachment.DataAwsccCognitoUserPoolClientSessionConfigurationAttachmentConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClientSessionConfigurationAttachment.DataAwsccCognitoUserPoolClientSessionConfigurationAttachmentConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClientSessionConfigurationAttachment.DataAwsccCognitoUserPoolClientSessionConfigurationAttachmentConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClientSessionConfigurationAttachment.DataAwsccCognitoUserPoolClientSessionConfigurationAttachmentConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClientSessionConfigurationAttachment.DataAwsccCognitoUserPoolClientSessionConfigurationAttachmentConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClientSessionConfigurationAttachment.DataAwsccCognitoUserPoolClientSessionConfigurationAttachmentConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClientSessionConfigurationAttachment.DataAwsccCognitoUserPoolClientSessionConfigurationAttachmentConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClientSessionConfigurationAttachment.DataAwsccCognitoUserPoolClientSessionConfigurationAttachmentConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClientSessionConfigurationAttachment.DataAwsccCognitoUserPoolClientSessionConfigurationAttachmentConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/data-sources/cognito_user_pool_client_session_configuration_attachment#id DataAwsccCognitoUserPoolClientSessionConfigurationAttachment#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccCognitoUserPoolClientSessionConfigurationAttachmentSsoSession <a name="DataAwsccCognitoUserPoolClientSessionConfigurationAttachmentSsoSession" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClientSessionConfigurationAttachment.DataAwsccCognitoUserPoolClientSessionConfigurationAttachmentSsoSession"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClientSessionConfigurationAttachment.DataAwsccCognitoUserPoolClientSessionConfigurationAttachmentSsoSession.Initializer"></a>

```typescript
import { dataAwsccCognitoUserPoolClientSessionConfigurationAttachment } from '@cdktn/provider-awscc'

const dataAwsccCognitoUserPoolClientSessionConfigurationAttachmentSsoSession: dataAwsccCognitoUserPoolClientSessionConfigurationAttachment.DataAwsccCognitoUserPoolClientSessionConfigurationAttachmentSsoSession = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccCognitoUserPoolClientSessionConfigurationAttachmentSsoSessionOutputReference <a name="DataAwsccCognitoUserPoolClientSessionConfigurationAttachmentSsoSessionOutputReference" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClientSessionConfigurationAttachment.DataAwsccCognitoUserPoolClientSessionConfigurationAttachmentSsoSessionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClientSessionConfigurationAttachment.DataAwsccCognitoUserPoolClientSessionConfigurationAttachmentSsoSessionOutputReference.Initializer"></a>

```typescript
import { dataAwsccCognitoUserPoolClientSessionConfigurationAttachment } from '@cdktn/provider-awscc'

new dataAwsccCognitoUserPoolClientSessionConfigurationAttachment.DataAwsccCognitoUserPoolClientSessionConfigurationAttachmentSsoSessionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClientSessionConfigurationAttachment.DataAwsccCognitoUserPoolClientSessionConfigurationAttachmentSsoSessionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClientSessionConfigurationAttachment.DataAwsccCognitoUserPoolClientSessionConfigurationAttachmentSsoSessionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClientSessionConfigurationAttachment.DataAwsccCognitoUserPoolClientSessionConfigurationAttachmentSsoSessionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClientSessionConfigurationAttachment.DataAwsccCognitoUserPoolClientSessionConfigurationAttachmentSsoSessionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClientSessionConfigurationAttachment.DataAwsccCognitoUserPoolClientSessionConfigurationAttachmentSsoSessionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClientSessionConfigurationAttachment.DataAwsccCognitoUserPoolClientSessionConfigurationAttachmentSsoSessionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClientSessionConfigurationAttachment.DataAwsccCognitoUserPoolClientSessionConfigurationAttachmentSsoSessionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClientSessionConfigurationAttachment.DataAwsccCognitoUserPoolClientSessionConfigurationAttachmentSsoSessionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClientSessionConfigurationAttachment.DataAwsccCognitoUserPoolClientSessionConfigurationAttachmentSsoSessionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClientSessionConfigurationAttachment.DataAwsccCognitoUserPoolClientSessionConfigurationAttachmentSsoSessionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClientSessionConfigurationAttachment.DataAwsccCognitoUserPoolClientSessionConfigurationAttachmentSsoSessionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClientSessionConfigurationAttachment.DataAwsccCognitoUserPoolClientSessionConfigurationAttachmentSsoSessionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClientSessionConfigurationAttachment.DataAwsccCognitoUserPoolClientSessionConfigurationAttachmentSsoSessionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClientSessionConfigurationAttachment.DataAwsccCognitoUserPoolClientSessionConfigurationAttachmentSsoSessionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClientSessionConfigurationAttachment.DataAwsccCognitoUserPoolClientSessionConfigurationAttachmentSsoSessionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClientSessionConfigurationAttachment.DataAwsccCognitoUserPoolClientSessionConfigurationAttachmentSsoSessionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClientSessionConfigurationAttachment.DataAwsccCognitoUserPoolClientSessionConfigurationAttachmentSsoSessionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClientSessionConfigurationAttachment.DataAwsccCognitoUserPoolClientSessionConfigurationAttachmentSsoSessionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClientSessionConfigurationAttachment.DataAwsccCognitoUserPoolClientSessionConfigurationAttachmentSsoSessionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClientSessionConfigurationAttachment.DataAwsccCognitoUserPoolClientSessionConfigurationAttachmentSsoSessionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClientSessionConfigurationAttachment.DataAwsccCognitoUserPoolClientSessionConfigurationAttachmentSsoSessionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClientSessionConfigurationAttachment.DataAwsccCognitoUserPoolClientSessionConfigurationAttachmentSsoSessionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClientSessionConfigurationAttachment.DataAwsccCognitoUserPoolClientSessionConfigurationAttachmentSsoSessionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClientSessionConfigurationAttachment.DataAwsccCognitoUserPoolClientSessionConfigurationAttachmentSsoSessionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClientSessionConfigurationAttachment.DataAwsccCognitoUserPoolClientSessionConfigurationAttachmentSsoSessionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClientSessionConfigurationAttachment.DataAwsccCognitoUserPoolClientSessionConfigurationAttachmentSsoSessionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClientSessionConfigurationAttachment.DataAwsccCognitoUserPoolClientSessionConfigurationAttachmentSsoSessionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClientSessionConfigurationAttachment.DataAwsccCognitoUserPoolClientSessionConfigurationAttachmentSsoSessionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClientSessionConfigurationAttachment.DataAwsccCognitoUserPoolClientSessionConfigurationAttachmentSsoSessionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClientSessionConfigurationAttachment.DataAwsccCognitoUserPoolClientSessionConfigurationAttachmentSsoSessionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClientSessionConfigurationAttachment.DataAwsccCognitoUserPoolClientSessionConfigurationAttachmentSsoSessionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClientSessionConfigurationAttachment.DataAwsccCognitoUserPoolClientSessionConfigurationAttachmentSsoSessionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClientSessionConfigurationAttachment.DataAwsccCognitoUserPoolClientSessionConfigurationAttachmentSsoSessionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClientSessionConfigurationAttachment.DataAwsccCognitoUserPoolClientSessionConfigurationAttachmentSsoSessionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClientSessionConfigurationAttachment.DataAwsccCognitoUserPoolClientSessionConfigurationAttachmentSsoSessionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClientSessionConfigurationAttachment.DataAwsccCognitoUserPoolClientSessionConfigurationAttachmentSsoSessionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClientSessionConfigurationAttachment.DataAwsccCognitoUserPoolClientSessionConfigurationAttachmentSsoSessionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClientSessionConfigurationAttachment.DataAwsccCognitoUserPoolClientSessionConfigurationAttachmentSsoSessionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClientSessionConfigurationAttachment.DataAwsccCognitoUserPoolClientSessionConfigurationAttachmentSsoSessionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClientSessionConfigurationAttachment.DataAwsccCognitoUserPoolClientSessionConfigurationAttachmentSsoSessionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClientSessionConfigurationAttachment.DataAwsccCognitoUserPoolClientSessionConfigurationAttachmentSsoSessionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClientSessionConfigurationAttachment.DataAwsccCognitoUserPoolClientSessionConfigurationAttachmentSsoSessionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClientSessionConfigurationAttachment.DataAwsccCognitoUserPoolClientSessionConfigurationAttachmentSsoSessionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClientSessionConfigurationAttachment.DataAwsccCognitoUserPoolClientSessionConfigurationAttachmentSsoSessionOutputReference.property.maxValidityMinutes">maxValidityMinutes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClientSessionConfigurationAttachment.DataAwsccCognitoUserPoolClientSessionConfigurationAttachmentSsoSessionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClientSessionConfigurationAttachment.DataAwsccCognitoUserPoolClientSessionConfigurationAttachmentSsoSession">DataAwsccCognitoUserPoolClientSessionConfigurationAttachmentSsoSession</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClientSessionConfigurationAttachment.DataAwsccCognitoUserPoolClientSessionConfigurationAttachmentSsoSessionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClientSessionConfigurationAttachment.DataAwsccCognitoUserPoolClientSessionConfigurationAttachmentSsoSessionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `maxValidityMinutes`<sup>Required</sup> <a name="maxValidityMinutes" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClientSessionConfigurationAttachment.DataAwsccCognitoUserPoolClientSessionConfigurationAttachmentSsoSessionOutputReference.property.maxValidityMinutes"></a>

```typescript
public readonly maxValidityMinutes: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClientSessionConfigurationAttachment.DataAwsccCognitoUserPoolClientSessionConfigurationAttachmentSsoSessionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccCognitoUserPoolClientSessionConfigurationAttachmentSsoSession;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClientSessionConfigurationAttachment.DataAwsccCognitoUserPoolClientSessionConfigurationAttachmentSsoSession">DataAwsccCognitoUserPoolClientSessionConfigurationAttachmentSsoSession</a>

---



