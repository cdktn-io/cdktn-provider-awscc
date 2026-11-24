# `dataAwsccApigatewayAuthorizer` Submodule <a name="`dataAwsccApigatewayAuthorizer` Submodule" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccApigatewayAuthorizer <a name="DataAwsccApigatewayAuthorizer" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizer"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/data-sources/apigateway_authorizer awscc_apigateway_authorizer}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizer.Initializer"></a>

```typescript
import { dataAwsccApigatewayAuthorizer } from '@cdktn/provider-awscc'

new dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizer(scope: Construct, id: string, config: DataAwsccApigatewayAuthorizerConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizer.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizer.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizer.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerConfig">DataAwsccApigatewayAuthorizerConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizer.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizer.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizer.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerConfig">DataAwsccApigatewayAuthorizerConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizer.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizer.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizer.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizer.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizer.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizer.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizer.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizer.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizer.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizer.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizer.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizer.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizer.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizer.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizer.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizer.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizer.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizer.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizer.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizer.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizer.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizer.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizer.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizer.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizer.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizer.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizer.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizer.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizer.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizer.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizer.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizer.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizer.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizer.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizer.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizer.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizer.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizer.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizer.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizer.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizer.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizer.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizer.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizer.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizer.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizer.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizer.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizer.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizer.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizer.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizer.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizer.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizer.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizer.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccApigatewayAuthorizer resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizer.isConstruct"></a>

```typescript
import { dataAwsccApigatewayAuthorizer } from '@cdktn/provider-awscc'

dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizer.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizer.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizer.isTerraformElement"></a>

```typescript
import { dataAwsccApigatewayAuthorizer } from '@cdktn/provider-awscc'

dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizer.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizer.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizer.isTerraformDataSource"></a>

```typescript
import { dataAwsccApigatewayAuthorizer } from '@cdktn/provider-awscc'

dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizer.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizer.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizer.generateConfigForImport"></a>

```typescript
import { dataAwsccApigatewayAuthorizer } from '@cdktn/provider-awscc'

dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizer.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccApigatewayAuthorizer resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizer.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizer.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccApigatewayAuthorizer to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizer.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccApigatewayAuthorizer that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/data-sources/apigateway_authorizer#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizer.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccApigatewayAuthorizer to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizer.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizer.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizer.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizer.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizer.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizer.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizer.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizer.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizer.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizer.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizer.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizer.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizer.property.authorizerCredentials">authorizerCredentials</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizer.property.authorizerId">authorizerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizer.property.authorizerResultTtlInSeconds">authorizerResultTtlInSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizer.property.authorizerUri">authorizerUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizer.property.authType">authType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizer.property.identitySource">identitySource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizer.property.identityValidationExpression">identityValidationExpression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizer.property.jwtConfiguration">jwtConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationOutputReference">DataAwsccApigatewayAuthorizerJwtConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizer.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizer.property.providerArNs">providerArNs</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizer.property.restApiId">restApiId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizer.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizer.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizer.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizer.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizer.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizer.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizer.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizer.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizer.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizer.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizer.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizer.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizer.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizer.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizer.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `authorizerCredentials`<sup>Required</sup> <a name="authorizerCredentials" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizer.property.authorizerCredentials"></a>

```typescript
public readonly authorizerCredentials: string;
```

- *Type:* string

---

##### `authorizerId`<sup>Required</sup> <a name="authorizerId" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizer.property.authorizerId"></a>

```typescript
public readonly authorizerId: string;
```

- *Type:* string

---

##### `authorizerResultTtlInSeconds`<sup>Required</sup> <a name="authorizerResultTtlInSeconds" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizer.property.authorizerResultTtlInSeconds"></a>

```typescript
public readonly authorizerResultTtlInSeconds: number;
```

- *Type:* number

---

##### `authorizerUri`<sup>Required</sup> <a name="authorizerUri" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizer.property.authorizerUri"></a>

```typescript
public readonly authorizerUri: string;
```

- *Type:* string

---

##### `authType`<sup>Required</sup> <a name="authType" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizer.property.authType"></a>

```typescript
public readonly authType: string;
```

- *Type:* string

---

##### `identitySource`<sup>Required</sup> <a name="identitySource" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizer.property.identitySource"></a>

```typescript
public readonly identitySource: string;
```

- *Type:* string

---

##### `identityValidationExpression`<sup>Required</sup> <a name="identityValidationExpression" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizer.property.identityValidationExpression"></a>

```typescript
public readonly identityValidationExpression: string;
```

- *Type:* string

---

##### `jwtConfiguration`<sup>Required</sup> <a name="jwtConfiguration" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizer.property.jwtConfiguration"></a>

```typescript
public readonly jwtConfiguration: DataAwsccApigatewayAuthorizerJwtConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationOutputReference">DataAwsccApigatewayAuthorizerJwtConfigurationOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizer.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `providerArNs`<sup>Required</sup> <a name="providerArNs" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizer.property.providerArNs"></a>

```typescript
public readonly providerArNs: string[];
```

- *Type:* string[]

---

##### `restApiId`<sup>Required</sup> <a name="restApiId" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizer.property.restApiId"></a>

```typescript
public readonly restApiId: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizer.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizer.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizer.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizer.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizer.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccApigatewayAuthorizerConfig <a name="DataAwsccApigatewayAuthorizerConfig" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerConfig.Initializer"></a>

```typescript
import { dataAwsccApigatewayAuthorizer } from '@cdktn/provider-awscc'

const dataAwsccApigatewayAuthorizerConfig: dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/data-sources/apigateway_authorizer#id DataAwsccApigatewayAuthorizer#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccApigatewayAuthorizerJwtConfiguration <a name="DataAwsccApigatewayAuthorizerJwtConfiguration" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfiguration.Initializer"></a>

```typescript
import { dataAwsccApigatewayAuthorizer } from '@cdktn/provider-awscc'

const dataAwsccApigatewayAuthorizerJwtConfiguration: dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfiguration = { ... }
```


### DataAwsccApigatewayAuthorizerJwtConfigurationIssuers <a name="DataAwsccApigatewayAuthorizerJwtConfigurationIssuers" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationIssuers"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationIssuers.Initializer"></a>

```typescript
import { dataAwsccApigatewayAuthorizer } from '@cdktn/provider-awscc'

const dataAwsccApigatewayAuthorizerJwtConfigurationIssuers: dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationIssuers = { ... }
```


### DataAwsccApigatewayAuthorizerJwtConfigurationIssuersAdditionalClaims <a name="DataAwsccApigatewayAuthorizerJwtConfigurationIssuersAdditionalClaims" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationIssuersAdditionalClaims"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationIssuersAdditionalClaims.Initializer"></a>

```typescript
import { dataAwsccApigatewayAuthorizer } from '@cdktn/provider-awscc'

const dataAwsccApigatewayAuthorizerJwtConfigurationIssuersAdditionalClaims: dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationIssuersAdditionalClaims = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccApigatewayAuthorizerJwtConfigurationIssuersAdditionalClaimsList <a name="DataAwsccApigatewayAuthorizerJwtConfigurationIssuersAdditionalClaimsList" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationIssuersAdditionalClaimsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationIssuersAdditionalClaimsList.Initializer"></a>

```typescript
import { dataAwsccApigatewayAuthorizer } from '@cdktn/provider-awscc'

new dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationIssuersAdditionalClaimsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationIssuersAdditionalClaimsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationIssuersAdditionalClaimsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationIssuersAdditionalClaimsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationIssuersAdditionalClaimsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationIssuersAdditionalClaimsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationIssuersAdditionalClaimsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationIssuersAdditionalClaimsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationIssuersAdditionalClaimsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationIssuersAdditionalClaimsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationIssuersAdditionalClaimsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationIssuersAdditionalClaimsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationIssuersAdditionalClaimsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationIssuersAdditionalClaimsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationIssuersAdditionalClaimsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationIssuersAdditionalClaimsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationIssuersAdditionalClaimsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationIssuersAdditionalClaimsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationIssuersAdditionalClaimsList.get"></a>

```typescript
public get(index: number): DataAwsccApigatewayAuthorizerJwtConfigurationIssuersAdditionalClaimsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationIssuersAdditionalClaimsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationIssuersAdditionalClaimsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationIssuersAdditionalClaimsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationIssuersAdditionalClaimsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationIssuersAdditionalClaimsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccApigatewayAuthorizerJwtConfigurationIssuersAdditionalClaimsOutputReference <a name="DataAwsccApigatewayAuthorizerJwtConfigurationIssuersAdditionalClaimsOutputReference" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationIssuersAdditionalClaimsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationIssuersAdditionalClaimsOutputReference.Initializer"></a>

```typescript
import { dataAwsccApigatewayAuthorizer } from '@cdktn/provider-awscc'

new dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationIssuersAdditionalClaimsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationIssuersAdditionalClaimsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationIssuersAdditionalClaimsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationIssuersAdditionalClaimsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationIssuersAdditionalClaimsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationIssuersAdditionalClaimsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationIssuersAdditionalClaimsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationIssuersAdditionalClaimsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationIssuersAdditionalClaimsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationIssuersAdditionalClaimsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationIssuersAdditionalClaimsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationIssuersAdditionalClaimsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationIssuersAdditionalClaimsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationIssuersAdditionalClaimsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationIssuersAdditionalClaimsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationIssuersAdditionalClaimsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationIssuersAdditionalClaimsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationIssuersAdditionalClaimsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationIssuersAdditionalClaimsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationIssuersAdditionalClaimsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationIssuersAdditionalClaimsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationIssuersAdditionalClaimsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationIssuersAdditionalClaimsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationIssuersAdditionalClaimsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationIssuersAdditionalClaimsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationIssuersAdditionalClaimsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationIssuersAdditionalClaimsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationIssuersAdditionalClaimsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationIssuersAdditionalClaimsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationIssuersAdditionalClaimsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationIssuersAdditionalClaimsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationIssuersAdditionalClaimsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationIssuersAdditionalClaimsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationIssuersAdditionalClaimsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationIssuersAdditionalClaimsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationIssuersAdditionalClaimsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationIssuersAdditionalClaimsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationIssuersAdditionalClaimsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationIssuersAdditionalClaimsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationIssuersAdditionalClaimsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationIssuersAdditionalClaimsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationIssuersAdditionalClaimsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationIssuersAdditionalClaimsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationIssuersAdditionalClaimsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationIssuersAdditionalClaimsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationIssuersAdditionalClaimsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationIssuersAdditionalClaimsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationIssuersAdditionalClaimsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationIssuersAdditionalClaimsOutputReference.property.claimName">claimName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationIssuersAdditionalClaimsOutputReference.property.expectedValues">expectedValues</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationIssuersAdditionalClaimsOutputReference.property.format">format</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationIssuersAdditionalClaimsOutputReference.property.required">required</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationIssuersAdditionalClaimsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationIssuersAdditionalClaims">DataAwsccApigatewayAuthorizerJwtConfigurationIssuersAdditionalClaims</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationIssuersAdditionalClaimsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationIssuersAdditionalClaimsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `claimName`<sup>Required</sup> <a name="claimName" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationIssuersAdditionalClaimsOutputReference.property.claimName"></a>

```typescript
public readonly claimName: string;
```

- *Type:* string

---

##### `expectedValues`<sup>Required</sup> <a name="expectedValues" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationIssuersAdditionalClaimsOutputReference.property.expectedValues"></a>

```typescript
public readonly expectedValues: string[];
```

- *Type:* string[]

---

##### `format`<sup>Required</sup> <a name="format" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationIssuersAdditionalClaimsOutputReference.property.format"></a>

```typescript
public readonly format: string;
```

- *Type:* string

---

##### `required`<sup>Required</sup> <a name="required" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationIssuersAdditionalClaimsOutputReference.property.required"></a>

```typescript
public readonly required: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationIssuersAdditionalClaimsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccApigatewayAuthorizerJwtConfigurationIssuersAdditionalClaims;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationIssuersAdditionalClaims">DataAwsccApigatewayAuthorizerJwtConfigurationIssuersAdditionalClaims</a>

---


### DataAwsccApigatewayAuthorizerJwtConfigurationIssuersList <a name="DataAwsccApigatewayAuthorizerJwtConfigurationIssuersList" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationIssuersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationIssuersList.Initializer"></a>

```typescript
import { dataAwsccApigatewayAuthorizer } from '@cdktn/provider-awscc'

new dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationIssuersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationIssuersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationIssuersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationIssuersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationIssuersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationIssuersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationIssuersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationIssuersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationIssuersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationIssuersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationIssuersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationIssuersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationIssuersList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationIssuersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationIssuersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationIssuersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationIssuersList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationIssuersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationIssuersList.get"></a>

```typescript
public get(index: number): DataAwsccApigatewayAuthorizerJwtConfigurationIssuersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationIssuersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationIssuersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationIssuersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationIssuersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationIssuersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccApigatewayAuthorizerJwtConfigurationIssuersOutputReference <a name="DataAwsccApigatewayAuthorizerJwtConfigurationIssuersOutputReference" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationIssuersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationIssuersOutputReference.Initializer"></a>

```typescript
import { dataAwsccApigatewayAuthorizer } from '@cdktn/provider-awscc'

new dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationIssuersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationIssuersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationIssuersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationIssuersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationIssuersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationIssuersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationIssuersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationIssuersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationIssuersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationIssuersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationIssuersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationIssuersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationIssuersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationIssuersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationIssuersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationIssuersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationIssuersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationIssuersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationIssuersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationIssuersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationIssuersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationIssuersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationIssuersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationIssuersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationIssuersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationIssuersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationIssuersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationIssuersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationIssuersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationIssuersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationIssuersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationIssuersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationIssuersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationIssuersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationIssuersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationIssuersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationIssuersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationIssuersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationIssuersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationIssuersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationIssuersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationIssuersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationIssuersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationIssuersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationIssuersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationIssuersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationIssuersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationIssuersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationIssuersOutputReference.property.additionalClaims">additionalClaims</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationIssuersAdditionalClaimsList">DataAwsccApigatewayAuthorizerJwtConfigurationIssuersAdditionalClaimsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationIssuersOutputReference.property.audiences">audiences</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationIssuersOutputReference.property.issuer">issuer</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationIssuersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationIssuers">DataAwsccApigatewayAuthorizerJwtConfigurationIssuers</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationIssuersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationIssuersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `additionalClaims`<sup>Required</sup> <a name="additionalClaims" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationIssuersOutputReference.property.additionalClaims"></a>

```typescript
public readonly additionalClaims: DataAwsccApigatewayAuthorizerJwtConfigurationIssuersAdditionalClaimsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationIssuersAdditionalClaimsList">DataAwsccApigatewayAuthorizerJwtConfigurationIssuersAdditionalClaimsList</a>

---

##### `audiences`<sup>Required</sup> <a name="audiences" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationIssuersOutputReference.property.audiences"></a>

```typescript
public readonly audiences: string[];
```

- *Type:* string[]

---

##### `issuer`<sup>Required</sup> <a name="issuer" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationIssuersOutputReference.property.issuer"></a>

```typescript
public readonly issuer: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationIssuersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccApigatewayAuthorizerJwtConfigurationIssuers;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationIssuers">DataAwsccApigatewayAuthorizerJwtConfigurationIssuers</a>

---


### DataAwsccApigatewayAuthorizerJwtConfigurationOutputReference <a name="DataAwsccApigatewayAuthorizerJwtConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationOutputReference.Initializer"></a>

```typescript
import { dataAwsccApigatewayAuthorizer } from '@cdktn/provider-awscc'

new dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationOutputReference.property.defaultAlgorithms">defaultAlgorithms</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationOutputReference.property.issuers">issuers</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationIssuersList">DataAwsccApigatewayAuthorizerJwtConfigurationIssuersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfiguration">DataAwsccApigatewayAuthorizerJwtConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `defaultAlgorithms`<sup>Required</sup> <a name="defaultAlgorithms" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationOutputReference.property.defaultAlgorithms"></a>

```typescript
public readonly defaultAlgorithms: string[];
```

- *Type:* string[]

---

##### `issuers`<sup>Required</sup> <a name="issuers" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationOutputReference.property.issuers"></a>

```typescript
public readonly issuers: DataAwsccApigatewayAuthorizerJwtConfigurationIssuersList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationIssuersList">DataAwsccApigatewayAuthorizerJwtConfigurationIssuersList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccApigatewayAuthorizerJwtConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApigatewayAuthorizer.DataAwsccApigatewayAuthorizerJwtConfiguration">DataAwsccApigatewayAuthorizerJwtConfiguration</a>

---



