# `dataAwsccCognitoUserPoolClient` Submodule <a name="`dataAwsccCognitoUserPoolClient` Submodule" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccCognitoUserPoolClient <a name="DataAwsccCognitoUserPoolClient" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClient"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/cognito_user_pool_client awscc_cognito_user_pool_client}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClient.Initializer"></a>

```typescript
import { dataAwsccCognitoUserPoolClient } from '@cdktn/provider-awscc'

new dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClient(scope: Construct, id: string, config: DataAwsccCognitoUserPoolClientConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClient.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClient.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClient.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClientConfig">DataAwsccCognitoUserPoolClientConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClient.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClient.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClient.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClientConfig">DataAwsccCognitoUserPoolClientConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClient.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClient.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClient.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClient.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClient.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClient.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClient.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClient.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClient.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClient.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClient.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClient.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClient.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClient.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClient.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClient.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClient.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClient.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClient.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClient.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClient.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClient.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClient.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClient.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClient.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClient.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClient.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClient.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClient.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClient.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClient.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClient.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClient.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClient.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClient.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClient.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClient.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClient.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClient.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClient.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClient.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClient.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClient.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClient.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClient.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClient.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClient.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClient.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClient.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClient.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClient.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClient.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClient.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClient.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccCognitoUserPoolClient resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClient.isConstruct"></a>

```typescript
import { dataAwsccCognitoUserPoolClient } from '@cdktn/provider-awscc'

dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClient.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClient.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClient.isTerraformElement"></a>

```typescript
import { dataAwsccCognitoUserPoolClient } from '@cdktn/provider-awscc'

dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClient.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClient.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClient.isTerraformDataSource"></a>

```typescript
import { dataAwsccCognitoUserPoolClient } from '@cdktn/provider-awscc'

dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClient.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClient.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClient.generateConfigForImport"></a>

```typescript
import { dataAwsccCognitoUserPoolClient } from '@cdktn/provider-awscc'

dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClient.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccCognitoUserPoolClient resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClient.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClient.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccCognitoUserPoolClient to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClient.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccCognitoUserPoolClient that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/cognito_user_pool_client#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClient.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccCognitoUserPoolClient to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClient.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClient.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClient.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClient.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClient.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClient.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClient.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClient.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClient.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClient.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClient.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClient.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClient.property.accessTokenValidity">accessTokenValidity</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClient.property.allowedOAuthFlows">allowedOAuthFlows</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClient.property.allowedOAuthFlowsUserPoolClient">allowedOAuthFlowsUserPoolClient</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClient.property.allowedOAuthScopes">allowedOAuthScopes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClient.property.analyticsConfiguration">analyticsConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClientAnalyticsConfigurationOutputReference">DataAwsccCognitoUserPoolClientAnalyticsConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClient.property.authSessionValidity">authSessionValidity</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClient.property.callbackUrLs">callbackUrLs</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClient.property.clientId">clientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClient.property.clientName">clientName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClient.property.clientSecret">clientSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClient.property.defaultRedirectUri">defaultRedirectUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClient.property.enablePropagateAdditionalUserContextData">enablePropagateAdditionalUserContextData</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClient.property.enableTokenRevocation">enableTokenRevocation</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClient.property.explicitAuthFlows">explicitAuthFlows</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClient.property.generateSecret">generateSecret</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClient.property.idTokenValidity">idTokenValidity</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClient.property.logoutUrLs">logoutUrLs</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClient.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClient.property.preventUserExistenceErrors">preventUserExistenceErrors</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClient.property.readAttributes">readAttributes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClient.property.refreshTokenRotation">refreshTokenRotation</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClientRefreshTokenRotationOutputReference">DataAwsccCognitoUserPoolClientRefreshTokenRotationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClient.property.refreshTokenValidity">refreshTokenValidity</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClient.property.supportedIdentityProviders">supportedIdentityProviders</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClient.property.tokenValidityUnits">tokenValidityUnits</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClientTokenValidityUnitsOutputReference">DataAwsccCognitoUserPoolClientTokenValidityUnitsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClient.property.userPoolId">userPoolId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClient.property.writeAttributes">writeAttributes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClient.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClient.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClient.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClient.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClient.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClient.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClient.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClient.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClient.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClient.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClient.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClient.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClient.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClient.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `accessTokenValidity`<sup>Required</sup> <a name="accessTokenValidity" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClient.property.accessTokenValidity"></a>

```typescript
public readonly accessTokenValidity: number;
```

- *Type:* number

---

##### `allowedOAuthFlows`<sup>Required</sup> <a name="allowedOAuthFlows" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClient.property.allowedOAuthFlows"></a>

```typescript
public readonly allowedOAuthFlows: string[];
```

- *Type:* string[]

---

##### `allowedOAuthFlowsUserPoolClient`<sup>Required</sup> <a name="allowedOAuthFlowsUserPoolClient" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClient.property.allowedOAuthFlowsUserPoolClient"></a>

```typescript
public readonly allowedOAuthFlowsUserPoolClient: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `allowedOAuthScopes`<sup>Required</sup> <a name="allowedOAuthScopes" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClient.property.allowedOAuthScopes"></a>

```typescript
public readonly allowedOAuthScopes: string[];
```

- *Type:* string[]

---

##### `analyticsConfiguration`<sup>Required</sup> <a name="analyticsConfiguration" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClient.property.analyticsConfiguration"></a>

```typescript
public readonly analyticsConfiguration: DataAwsccCognitoUserPoolClientAnalyticsConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClientAnalyticsConfigurationOutputReference">DataAwsccCognitoUserPoolClientAnalyticsConfigurationOutputReference</a>

---

##### `authSessionValidity`<sup>Required</sup> <a name="authSessionValidity" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClient.property.authSessionValidity"></a>

```typescript
public readonly authSessionValidity: number;
```

- *Type:* number

---

##### `callbackUrLs`<sup>Required</sup> <a name="callbackUrLs" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClient.property.callbackUrLs"></a>

```typescript
public readonly callbackUrLs: string[];
```

- *Type:* string[]

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClient.property.clientId"></a>

```typescript
public readonly clientId: string;
```

- *Type:* string

---

##### `clientName`<sup>Required</sup> <a name="clientName" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClient.property.clientName"></a>

```typescript
public readonly clientName: string;
```

- *Type:* string

---

##### `clientSecret`<sup>Required</sup> <a name="clientSecret" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClient.property.clientSecret"></a>

```typescript
public readonly clientSecret: string;
```

- *Type:* string

---

##### `defaultRedirectUri`<sup>Required</sup> <a name="defaultRedirectUri" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClient.property.defaultRedirectUri"></a>

```typescript
public readonly defaultRedirectUri: string;
```

- *Type:* string

---

##### `enablePropagateAdditionalUserContextData`<sup>Required</sup> <a name="enablePropagateAdditionalUserContextData" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClient.property.enablePropagateAdditionalUserContextData"></a>

```typescript
public readonly enablePropagateAdditionalUserContextData: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `enableTokenRevocation`<sup>Required</sup> <a name="enableTokenRevocation" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClient.property.enableTokenRevocation"></a>

```typescript
public readonly enableTokenRevocation: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `explicitAuthFlows`<sup>Required</sup> <a name="explicitAuthFlows" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClient.property.explicitAuthFlows"></a>

```typescript
public readonly explicitAuthFlows: string[];
```

- *Type:* string[]

---

##### `generateSecret`<sup>Required</sup> <a name="generateSecret" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClient.property.generateSecret"></a>

```typescript
public readonly generateSecret: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `idTokenValidity`<sup>Required</sup> <a name="idTokenValidity" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClient.property.idTokenValidity"></a>

```typescript
public readonly idTokenValidity: number;
```

- *Type:* number

---

##### `logoutUrLs`<sup>Required</sup> <a name="logoutUrLs" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClient.property.logoutUrLs"></a>

```typescript
public readonly logoutUrLs: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClient.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `preventUserExistenceErrors`<sup>Required</sup> <a name="preventUserExistenceErrors" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClient.property.preventUserExistenceErrors"></a>

```typescript
public readonly preventUserExistenceErrors: string;
```

- *Type:* string

---

##### `readAttributes`<sup>Required</sup> <a name="readAttributes" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClient.property.readAttributes"></a>

```typescript
public readonly readAttributes: string[];
```

- *Type:* string[]

---

##### `refreshTokenRotation`<sup>Required</sup> <a name="refreshTokenRotation" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClient.property.refreshTokenRotation"></a>

```typescript
public readonly refreshTokenRotation: DataAwsccCognitoUserPoolClientRefreshTokenRotationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClientRefreshTokenRotationOutputReference">DataAwsccCognitoUserPoolClientRefreshTokenRotationOutputReference</a>

---

##### `refreshTokenValidity`<sup>Required</sup> <a name="refreshTokenValidity" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClient.property.refreshTokenValidity"></a>

```typescript
public readonly refreshTokenValidity: number;
```

- *Type:* number

---

##### `supportedIdentityProviders`<sup>Required</sup> <a name="supportedIdentityProviders" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClient.property.supportedIdentityProviders"></a>

```typescript
public readonly supportedIdentityProviders: string[];
```

- *Type:* string[]

---

##### `tokenValidityUnits`<sup>Required</sup> <a name="tokenValidityUnits" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClient.property.tokenValidityUnits"></a>

```typescript
public readonly tokenValidityUnits: DataAwsccCognitoUserPoolClientTokenValidityUnitsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClientTokenValidityUnitsOutputReference">DataAwsccCognitoUserPoolClientTokenValidityUnitsOutputReference</a>

---

##### `userPoolId`<sup>Required</sup> <a name="userPoolId" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClient.property.userPoolId"></a>

```typescript
public readonly userPoolId: string;
```

- *Type:* string

---

##### `writeAttributes`<sup>Required</sup> <a name="writeAttributes" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClient.property.writeAttributes"></a>

```typescript
public readonly writeAttributes: string[];
```

- *Type:* string[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClient.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClient.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClient.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClient.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccCognitoUserPoolClientAnalyticsConfiguration <a name="DataAwsccCognitoUserPoolClientAnalyticsConfiguration" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClientAnalyticsConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClientAnalyticsConfiguration.Initializer"></a>

```typescript
import { dataAwsccCognitoUserPoolClient } from '@cdktn/provider-awscc'

const dataAwsccCognitoUserPoolClientAnalyticsConfiguration: dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClientAnalyticsConfiguration = { ... }
```


### DataAwsccCognitoUserPoolClientConfig <a name="DataAwsccCognitoUserPoolClientConfig" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClientConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClientConfig.Initializer"></a>

```typescript
import { dataAwsccCognitoUserPoolClient } from '@cdktn/provider-awscc'

const dataAwsccCognitoUserPoolClientConfig: dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClientConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClientConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClientConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClientConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClientConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClientConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClientConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClientConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClientConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClientConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClientConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClientConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClientConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClientConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClientConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClientConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClientConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/cognito_user_pool_client#id DataAwsccCognitoUserPoolClient#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccCognitoUserPoolClientRefreshTokenRotation <a name="DataAwsccCognitoUserPoolClientRefreshTokenRotation" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClientRefreshTokenRotation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClientRefreshTokenRotation.Initializer"></a>

```typescript
import { dataAwsccCognitoUserPoolClient } from '@cdktn/provider-awscc'

const dataAwsccCognitoUserPoolClientRefreshTokenRotation: dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClientRefreshTokenRotation = { ... }
```


### DataAwsccCognitoUserPoolClientTokenValidityUnits <a name="DataAwsccCognitoUserPoolClientTokenValidityUnits" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClientTokenValidityUnits"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClientTokenValidityUnits.Initializer"></a>

```typescript
import { dataAwsccCognitoUserPoolClient } from '@cdktn/provider-awscc'

const dataAwsccCognitoUserPoolClientTokenValidityUnits: dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClientTokenValidityUnits = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccCognitoUserPoolClientAnalyticsConfigurationOutputReference <a name="DataAwsccCognitoUserPoolClientAnalyticsConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClientAnalyticsConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClientAnalyticsConfigurationOutputReference.Initializer"></a>

```typescript
import { dataAwsccCognitoUserPoolClient } from '@cdktn/provider-awscc'

new dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClientAnalyticsConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClientAnalyticsConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClientAnalyticsConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClientAnalyticsConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClientAnalyticsConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClientAnalyticsConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClientAnalyticsConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClientAnalyticsConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClientAnalyticsConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClientAnalyticsConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClientAnalyticsConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClientAnalyticsConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClientAnalyticsConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClientAnalyticsConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClientAnalyticsConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClientAnalyticsConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClientAnalyticsConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClientAnalyticsConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClientAnalyticsConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClientAnalyticsConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClientAnalyticsConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClientAnalyticsConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClientAnalyticsConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClientAnalyticsConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClientAnalyticsConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClientAnalyticsConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClientAnalyticsConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClientAnalyticsConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClientAnalyticsConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClientAnalyticsConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClientAnalyticsConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClientAnalyticsConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClientAnalyticsConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClientAnalyticsConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClientAnalyticsConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClientAnalyticsConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClientAnalyticsConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClientAnalyticsConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClientAnalyticsConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClientAnalyticsConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClientAnalyticsConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClientAnalyticsConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClientAnalyticsConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClientAnalyticsConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClientAnalyticsConfigurationOutputReference.property.applicationArn">applicationArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClientAnalyticsConfigurationOutputReference.property.applicationId">applicationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClientAnalyticsConfigurationOutputReference.property.externalId">externalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClientAnalyticsConfigurationOutputReference.property.roleArn">roleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClientAnalyticsConfigurationOutputReference.property.userDataShared">userDataShared</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClientAnalyticsConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClientAnalyticsConfiguration">DataAwsccCognitoUserPoolClientAnalyticsConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClientAnalyticsConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClientAnalyticsConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `applicationArn`<sup>Required</sup> <a name="applicationArn" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClientAnalyticsConfigurationOutputReference.property.applicationArn"></a>

```typescript
public readonly applicationArn: string;
```

- *Type:* string

---

##### `applicationId`<sup>Required</sup> <a name="applicationId" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClientAnalyticsConfigurationOutputReference.property.applicationId"></a>

```typescript
public readonly applicationId: string;
```

- *Type:* string

---

##### `externalId`<sup>Required</sup> <a name="externalId" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClientAnalyticsConfigurationOutputReference.property.externalId"></a>

```typescript
public readonly externalId: string;
```

- *Type:* string

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClientAnalyticsConfigurationOutputReference.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

---

##### `userDataShared`<sup>Required</sup> <a name="userDataShared" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClientAnalyticsConfigurationOutputReference.property.userDataShared"></a>

```typescript
public readonly userDataShared: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClientAnalyticsConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccCognitoUserPoolClientAnalyticsConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClientAnalyticsConfiguration">DataAwsccCognitoUserPoolClientAnalyticsConfiguration</a>

---


### DataAwsccCognitoUserPoolClientRefreshTokenRotationOutputReference <a name="DataAwsccCognitoUserPoolClientRefreshTokenRotationOutputReference" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClientRefreshTokenRotationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClientRefreshTokenRotationOutputReference.Initializer"></a>

```typescript
import { dataAwsccCognitoUserPoolClient } from '@cdktn/provider-awscc'

new dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClientRefreshTokenRotationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClientRefreshTokenRotationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClientRefreshTokenRotationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClientRefreshTokenRotationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClientRefreshTokenRotationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClientRefreshTokenRotationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClientRefreshTokenRotationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClientRefreshTokenRotationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClientRefreshTokenRotationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClientRefreshTokenRotationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClientRefreshTokenRotationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClientRefreshTokenRotationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClientRefreshTokenRotationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClientRefreshTokenRotationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClientRefreshTokenRotationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClientRefreshTokenRotationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClientRefreshTokenRotationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClientRefreshTokenRotationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClientRefreshTokenRotationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClientRefreshTokenRotationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClientRefreshTokenRotationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClientRefreshTokenRotationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClientRefreshTokenRotationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClientRefreshTokenRotationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClientRefreshTokenRotationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClientRefreshTokenRotationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClientRefreshTokenRotationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClientRefreshTokenRotationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClientRefreshTokenRotationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClientRefreshTokenRotationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClientRefreshTokenRotationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClientRefreshTokenRotationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClientRefreshTokenRotationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClientRefreshTokenRotationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClientRefreshTokenRotationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClientRefreshTokenRotationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClientRefreshTokenRotationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClientRefreshTokenRotationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClientRefreshTokenRotationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClientRefreshTokenRotationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClientRefreshTokenRotationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClientRefreshTokenRotationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClientRefreshTokenRotationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClientRefreshTokenRotationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClientRefreshTokenRotationOutputReference.property.feature">feature</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClientRefreshTokenRotationOutputReference.property.retryGracePeriodSeconds">retryGracePeriodSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClientRefreshTokenRotationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClientRefreshTokenRotation">DataAwsccCognitoUserPoolClientRefreshTokenRotation</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClientRefreshTokenRotationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClientRefreshTokenRotationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `feature`<sup>Required</sup> <a name="feature" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClientRefreshTokenRotationOutputReference.property.feature"></a>

```typescript
public readonly feature: string;
```

- *Type:* string

---

##### `retryGracePeriodSeconds`<sup>Required</sup> <a name="retryGracePeriodSeconds" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClientRefreshTokenRotationOutputReference.property.retryGracePeriodSeconds"></a>

```typescript
public readonly retryGracePeriodSeconds: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClientRefreshTokenRotationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccCognitoUserPoolClientRefreshTokenRotation;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClientRefreshTokenRotation">DataAwsccCognitoUserPoolClientRefreshTokenRotation</a>

---


### DataAwsccCognitoUserPoolClientTokenValidityUnitsOutputReference <a name="DataAwsccCognitoUserPoolClientTokenValidityUnitsOutputReference" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClientTokenValidityUnitsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClientTokenValidityUnitsOutputReference.Initializer"></a>

```typescript
import { dataAwsccCognitoUserPoolClient } from '@cdktn/provider-awscc'

new dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClientTokenValidityUnitsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClientTokenValidityUnitsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClientTokenValidityUnitsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClientTokenValidityUnitsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClientTokenValidityUnitsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClientTokenValidityUnitsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClientTokenValidityUnitsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClientTokenValidityUnitsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClientTokenValidityUnitsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClientTokenValidityUnitsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClientTokenValidityUnitsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClientTokenValidityUnitsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClientTokenValidityUnitsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClientTokenValidityUnitsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClientTokenValidityUnitsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClientTokenValidityUnitsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClientTokenValidityUnitsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClientTokenValidityUnitsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClientTokenValidityUnitsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClientTokenValidityUnitsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClientTokenValidityUnitsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClientTokenValidityUnitsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClientTokenValidityUnitsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClientTokenValidityUnitsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClientTokenValidityUnitsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClientTokenValidityUnitsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClientTokenValidityUnitsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClientTokenValidityUnitsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClientTokenValidityUnitsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClientTokenValidityUnitsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClientTokenValidityUnitsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClientTokenValidityUnitsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClientTokenValidityUnitsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClientTokenValidityUnitsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClientTokenValidityUnitsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClientTokenValidityUnitsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClientTokenValidityUnitsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClientTokenValidityUnitsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClientTokenValidityUnitsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClientTokenValidityUnitsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClientTokenValidityUnitsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClientTokenValidityUnitsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClientTokenValidityUnitsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClientTokenValidityUnitsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClientTokenValidityUnitsOutputReference.property.accessToken">accessToken</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClientTokenValidityUnitsOutputReference.property.idToken">idToken</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClientTokenValidityUnitsOutputReference.property.refreshToken">refreshToken</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClientTokenValidityUnitsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClientTokenValidityUnits">DataAwsccCognitoUserPoolClientTokenValidityUnits</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClientTokenValidityUnitsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClientTokenValidityUnitsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `accessToken`<sup>Required</sup> <a name="accessToken" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClientTokenValidityUnitsOutputReference.property.accessToken"></a>

```typescript
public readonly accessToken: string;
```

- *Type:* string

---

##### `idToken`<sup>Required</sup> <a name="idToken" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClientTokenValidityUnitsOutputReference.property.idToken"></a>

```typescript
public readonly idToken: string;
```

- *Type:* string

---

##### `refreshToken`<sup>Required</sup> <a name="refreshToken" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClientTokenValidityUnitsOutputReference.property.refreshToken"></a>

```typescript
public readonly refreshToken: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClientTokenValidityUnitsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccCognitoUserPoolClientTokenValidityUnits;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolClient.DataAwsccCognitoUserPoolClientTokenValidityUnits">DataAwsccCognitoUserPoolClientTokenValidityUnits</a>

---



