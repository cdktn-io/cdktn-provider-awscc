# `dataAwsccAmplifyApp` Submodule <a name="`dataAwsccAmplifyApp` Submodule" id="@cdktn/provider-awscc.dataAwsccAmplifyApp"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccAmplifyApp <a name="DataAwsccAmplifyApp" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyApp"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/amplify_app awscc_amplify_app}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyApp.Initializer"></a>

```typescript
import { dataAwsccAmplifyApp } from '@cdktn/provider-awscc'

new dataAwsccAmplifyApp.DataAwsccAmplifyApp(scope: Construct, id: string, config: DataAwsccAmplifyAppConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyApp.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyApp.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyApp.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppConfig">DataAwsccAmplifyAppConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyApp.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyApp.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyApp.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppConfig">DataAwsccAmplifyAppConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyApp.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyApp.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyApp.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyApp.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyApp.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyApp.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyApp.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyApp.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyApp.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyApp.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyApp.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyApp.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyApp.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyApp.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyApp.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyApp.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyApp.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyApp.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyApp.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyApp.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyApp.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyApp.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyApp.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyApp.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyApp.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyApp.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyApp.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyApp.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyApp.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyApp.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyApp.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyApp.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyApp.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyApp.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyApp.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyApp.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyApp.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyApp.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyApp.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyApp.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyApp.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyApp.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyApp.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyApp.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyApp.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyApp.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyApp.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyApp.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyApp.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyApp.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyApp.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyApp.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyApp.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyApp.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccAmplifyApp resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyApp.isConstruct"></a>

```typescript
import { dataAwsccAmplifyApp } from '@cdktn/provider-awscc'

dataAwsccAmplifyApp.DataAwsccAmplifyApp.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyApp.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyApp.isTerraformElement"></a>

```typescript
import { dataAwsccAmplifyApp } from '@cdktn/provider-awscc'

dataAwsccAmplifyApp.DataAwsccAmplifyApp.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyApp.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyApp.isTerraformDataSource"></a>

```typescript
import { dataAwsccAmplifyApp } from '@cdktn/provider-awscc'

dataAwsccAmplifyApp.DataAwsccAmplifyApp.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyApp.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyApp.generateConfigForImport"></a>

```typescript
import { dataAwsccAmplifyApp } from '@cdktn/provider-awscc'

dataAwsccAmplifyApp.DataAwsccAmplifyApp.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccAmplifyApp resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyApp.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyApp.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccAmplifyApp to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyApp.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccAmplifyApp that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/amplify_app#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyApp.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccAmplifyApp to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyApp.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyApp.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyApp.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyApp.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyApp.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyApp.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyApp.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyApp.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyApp.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyApp.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyApp.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyApp.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyApp.property.accessToken">accessToken</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyApp.property.appId">appId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyApp.property.appName">appName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyApp.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyApp.property.autoBranchCreationConfig">autoBranchCreationConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigOutputReference">DataAwsccAmplifyAppAutoBranchCreationConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyApp.property.basicAuthConfig">basicAuthConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppBasicAuthConfigOutputReference">DataAwsccAmplifyAppBasicAuthConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyApp.property.buildSpec">buildSpec</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyApp.property.cacheConfig">cacheConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppCacheConfigOutputReference">DataAwsccAmplifyAppCacheConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyApp.property.computeRoleArn">computeRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyApp.property.customHeaders">customHeaders</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyApp.property.customRules">customRules</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppCustomRulesList">DataAwsccAmplifyAppCustomRulesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyApp.property.defaultDomain">defaultDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyApp.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyApp.property.enableBranchAutoDeletion">enableBranchAutoDeletion</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyApp.property.environmentVariables">environmentVariables</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppEnvironmentVariablesList">DataAwsccAmplifyAppEnvironmentVariablesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyApp.property.iamServiceRole">iamServiceRole</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyApp.property.jobConfig">jobConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppJobConfigOutputReference">DataAwsccAmplifyAppJobConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyApp.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyApp.property.oauthToken">oauthToken</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyApp.property.platform">platform</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyApp.property.repository">repository</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyApp.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppTagsList">DataAwsccAmplifyAppTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyApp.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyApp.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyApp.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyApp.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyApp.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyApp.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyApp.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyApp.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyApp.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyApp.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyApp.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyApp.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyApp.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyApp.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `accessToken`<sup>Required</sup> <a name="accessToken" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyApp.property.accessToken"></a>

```typescript
public readonly accessToken: string;
```

- *Type:* string

---

##### `appId`<sup>Required</sup> <a name="appId" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyApp.property.appId"></a>

```typescript
public readonly appId: string;
```

- *Type:* string

---

##### `appName`<sup>Required</sup> <a name="appName" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyApp.property.appName"></a>

```typescript
public readonly appName: string;
```

- *Type:* string

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyApp.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `autoBranchCreationConfig`<sup>Required</sup> <a name="autoBranchCreationConfig" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyApp.property.autoBranchCreationConfig"></a>

```typescript
public readonly autoBranchCreationConfig: DataAwsccAmplifyAppAutoBranchCreationConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigOutputReference">DataAwsccAmplifyAppAutoBranchCreationConfigOutputReference</a>

---

##### `basicAuthConfig`<sup>Required</sup> <a name="basicAuthConfig" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyApp.property.basicAuthConfig"></a>

```typescript
public readonly basicAuthConfig: DataAwsccAmplifyAppBasicAuthConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppBasicAuthConfigOutputReference">DataAwsccAmplifyAppBasicAuthConfigOutputReference</a>

---

##### `buildSpec`<sup>Required</sup> <a name="buildSpec" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyApp.property.buildSpec"></a>

```typescript
public readonly buildSpec: string;
```

- *Type:* string

---

##### `cacheConfig`<sup>Required</sup> <a name="cacheConfig" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyApp.property.cacheConfig"></a>

```typescript
public readonly cacheConfig: DataAwsccAmplifyAppCacheConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppCacheConfigOutputReference">DataAwsccAmplifyAppCacheConfigOutputReference</a>

---

##### `computeRoleArn`<sup>Required</sup> <a name="computeRoleArn" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyApp.property.computeRoleArn"></a>

```typescript
public readonly computeRoleArn: string;
```

- *Type:* string

---

##### `customHeaders`<sup>Required</sup> <a name="customHeaders" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyApp.property.customHeaders"></a>

```typescript
public readonly customHeaders: string;
```

- *Type:* string

---

##### `customRules`<sup>Required</sup> <a name="customRules" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyApp.property.customRules"></a>

```typescript
public readonly customRules: DataAwsccAmplifyAppCustomRulesList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppCustomRulesList">DataAwsccAmplifyAppCustomRulesList</a>

---

##### `defaultDomain`<sup>Required</sup> <a name="defaultDomain" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyApp.property.defaultDomain"></a>

```typescript
public readonly defaultDomain: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyApp.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `enableBranchAutoDeletion`<sup>Required</sup> <a name="enableBranchAutoDeletion" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyApp.property.enableBranchAutoDeletion"></a>

```typescript
public readonly enableBranchAutoDeletion: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `environmentVariables`<sup>Required</sup> <a name="environmentVariables" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyApp.property.environmentVariables"></a>

```typescript
public readonly environmentVariables: DataAwsccAmplifyAppEnvironmentVariablesList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppEnvironmentVariablesList">DataAwsccAmplifyAppEnvironmentVariablesList</a>

---

##### `iamServiceRole`<sup>Required</sup> <a name="iamServiceRole" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyApp.property.iamServiceRole"></a>

```typescript
public readonly iamServiceRole: string;
```

- *Type:* string

---

##### `jobConfig`<sup>Required</sup> <a name="jobConfig" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyApp.property.jobConfig"></a>

```typescript
public readonly jobConfig: DataAwsccAmplifyAppJobConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppJobConfigOutputReference">DataAwsccAmplifyAppJobConfigOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyApp.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `oauthToken`<sup>Required</sup> <a name="oauthToken" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyApp.property.oauthToken"></a>

```typescript
public readonly oauthToken: string;
```

- *Type:* string

---

##### `platform`<sup>Required</sup> <a name="platform" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyApp.property.platform"></a>

```typescript
public readonly platform: string;
```

- *Type:* string

---

##### `repository`<sup>Required</sup> <a name="repository" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyApp.property.repository"></a>

```typescript
public readonly repository: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyApp.property.tags"></a>

```typescript
public readonly tags: DataAwsccAmplifyAppTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppTagsList">DataAwsccAmplifyAppTagsList</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyApp.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyApp.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyApp.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyApp.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccAmplifyAppAutoBranchCreationConfig <a name="DataAwsccAmplifyAppAutoBranchCreationConfig" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfig.Initializer"></a>

```typescript
import { dataAwsccAmplifyApp } from '@cdktn/provider-awscc'

const dataAwsccAmplifyAppAutoBranchCreationConfig: dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfig = { ... }
```


### DataAwsccAmplifyAppAutoBranchCreationConfigBasicAuthConfig <a name="DataAwsccAmplifyAppAutoBranchCreationConfigBasicAuthConfig" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigBasicAuthConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigBasicAuthConfig.Initializer"></a>

```typescript
import { dataAwsccAmplifyApp } from '@cdktn/provider-awscc'

const dataAwsccAmplifyAppAutoBranchCreationConfigBasicAuthConfig: dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigBasicAuthConfig = { ... }
```


### DataAwsccAmplifyAppAutoBranchCreationConfigEnvironmentVariables <a name="DataAwsccAmplifyAppAutoBranchCreationConfigEnvironmentVariables" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigEnvironmentVariables"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigEnvironmentVariables.Initializer"></a>

```typescript
import { dataAwsccAmplifyApp } from '@cdktn/provider-awscc'

const dataAwsccAmplifyAppAutoBranchCreationConfigEnvironmentVariables: dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigEnvironmentVariables = { ... }
```


### DataAwsccAmplifyAppBasicAuthConfig <a name="DataAwsccAmplifyAppBasicAuthConfig" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppBasicAuthConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppBasicAuthConfig.Initializer"></a>

```typescript
import { dataAwsccAmplifyApp } from '@cdktn/provider-awscc'

const dataAwsccAmplifyAppBasicAuthConfig: dataAwsccAmplifyApp.DataAwsccAmplifyAppBasicAuthConfig = { ... }
```


### DataAwsccAmplifyAppCacheConfig <a name="DataAwsccAmplifyAppCacheConfig" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppCacheConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppCacheConfig.Initializer"></a>

```typescript
import { dataAwsccAmplifyApp } from '@cdktn/provider-awscc'

const dataAwsccAmplifyAppCacheConfig: dataAwsccAmplifyApp.DataAwsccAmplifyAppCacheConfig = { ... }
```


### DataAwsccAmplifyAppConfig <a name="DataAwsccAmplifyAppConfig" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppConfig.Initializer"></a>

```typescript
import { dataAwsccAmplifyApp } from '@cdktn/provider-awscc'

const dataAwsccAmplifyAppConfig: dataAwsccAmplifyApp.DataAwsccAmplifyAppConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/amplify_app#id DataAwsccAmplifyApp#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccAmplifyAppCustomRules <a name="DataAwsccAmplifyAppCustomRules" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppCustomRules"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppCustomRules.Initializer"></a>

```typescript
import { dataAwsccAmplifyApp } from '@cdktn/provider-awscc'

const dataAwsccAmplifyAppCustomRules: dataAwsccAmplifyApp.DataAwsccAmplifyAppCustomRules = { ... }
```


### DataAwsccAmplifyAppEnvironmentVariables <a name="DataAwsccAmplifyAppEnvironmentVariables" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppEnvironmentVariables"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppEnvironmentVariables.Initializer"></a>

```typescript
import { dataAwsccAmplifyApp } from '@cdktn/provider-awscc'

const dataAwsccAmplifyAppEnvironmentVariables: dataAwsccAmplifyApp.DataAwsccAmplifyAppEnvironmentVariables = { ... }
```


### DataAwsccAmplifyAppJobConfig <a name="DataAwsccAmplifyAppJobConfig" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppJobConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppJobConfig.Initializer"></a>

```typescript
import { dataAwsccAmplifyApp } from '@cdktn/provider-awscc'

const dataAwsccAmplifyAppJobConfig: dataAwsccAmplifyApp.DataAwsccAmplifyAppJobConfig = { ... }
```


### DataAwsccAmplifyAppTags <a name="DataAwsccAmplifyAppTags" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppTags.Initializer"></a>

```typescript
import { dataAwsccAmplifyApp } from '@cdktn/provider-awscc'

const dataAwsccAmplifyAppTags: dataAwsccAmplifyApp.DataAwsccAmplifyAppTags = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccAmplifyAppAutoBranchCreationConfigBasicAuthConfigOutputReference <a name="DataAwsccAmplifyAppAutoBranchCreationConfigBasicAuthConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigBasicAuthConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigBasicAuthConfigOutputReference.Initializer"></a>

```typescript
import { dataAwsccAmplifyApp } from '@cdktn/provider-awscc'

new dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigBasicAuthConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigBasicAuthConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigBasicAuthConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigBasicAuthConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigBasicAuthConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigBasicAuthConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigBasicAuthConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigBasicAuthConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigBasicAuthConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigBasicAuthConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigBasicAuthConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigBasicAuthConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigBasicAuthConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigBasicAuthConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigBasicAuthConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigBasicAuthConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigBasicAuthConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigBasicAuthConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigBasicAuthConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigBasicAuthConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigBasicAuthConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigBasicAuthConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigBasicAuthConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigBasicAuthConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigBasicAuthConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigBasicAuthConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigBasicAuthConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigBasicAuthConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigBasicAuthConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigBasicAuthConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigBasicAuthConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigBasicAuthConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigBasicAuthConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigBasicAuthConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigBasicAuthConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigBasicAuthConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigBasicAuthConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigBasicAuthConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigBasicAuthConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigBasicAuthConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigBasicAuthConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigBasicAuthConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigBasicAuthConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigBasicAuthConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigBasicAuthConfigOutputReference.property.enableBasicAuth">enableBasicAuth</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigBasicAuthConfigOutputReference.property.password">password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigBasicAuthConfigOutputReference.property.username">username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigBasicAuthConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigBasicAuthConfig">DataAwsccAmplifyAppAutoBranchCreationConfigBasicAuthConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigBasicAuthConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigBasicAuthConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `enableBasicAuth`<sup>Required</sup> <a name="enableBasicAuth" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigBasicAuthConfigOutputReference.property.enableBasicAuth"></a>

```typescript
public readonly enableBasicAuth: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigBasicAuthConfigOutputReference.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigBasicAuthConfigOutputReference.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigBasicAuthConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccAmplifyAppAutoBranchCreationConfigBasicAuthConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigBasicAuthConfig">DataAwsccAmplifyAppAutoBranchCreationConfigBasicAuthConfig</a>

---


### DataAwsccAmplifyAppAutoBranchCreationConfigEnvironmentVariablesList <a name="DataAwsccAmplifyAppAutoBranchCreationConfigEnvironmentVariablesList" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigEnvironmentVariablesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigEnvironmentVariablesList.Initializer"></a>

```typescript
import { dataAwsccAmplifyApp } from '@cdktn/provider-awscc'

new dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigEnvironmentVariablesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigEnvironmentVariablesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigEnvironmentVariablesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigEnvironmentVariablesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigEnvironmentVariablesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigEnvironmentVariablesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigEnvironmentVariablesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigEnvironmentVariablesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigEnvironmentVariablesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigEnvironmentVariablesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigEnvironmentVariablesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigEnvironmentVariablesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigEnvironmentVariablesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigEnvironmentVariablesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigEnvironmentVariablesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigEnvironmentVariablesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigEnvironmentVariablesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigEnvironmentVariablesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigEnvironmentVariablesList.get"></a>

```typescript
public get(index: number): DataAwsccAmplifyAppAutoBranchCreationConfigEnvironmentVariablesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigEnvironmentVariablesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigEnvironmentVariablesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigEnvironmentVariablesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigEnvironmentVariablesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigEnvironmentVariablesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccAmplifyAppAutoBranchCreationConfigEnvironmentVariablesOutputReference <a name="DataAwsccAmplifyAppAutoBranchCreationConfigEnvironmentVariablesOutputReference" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigEnvironmentVariablesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigEnvironmentVariablesOutputReference.Initializer"></a>

```typescript
import { dataAwsccAmplifyApp } from '@cdktn/provider-awscc'

new dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigEnvironmentVariablesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigEnvironmentVariablesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigEnvironmentVariablesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigEnvironmentVariablesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigEnvironmentVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigEnvironmentVariablesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigEnvironmentVariablesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigEnvironmentVariablesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigEnvironmentVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigEnvironmentVariablesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigEnvironmentVariablesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigEnvironmentVariablesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigEnvironmentVariablesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigEnvironmentVariablesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigEnvironmentVariablesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigEnvironmentVariablesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigEnvironmentVariablesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigEnvironmentVariablesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigEnvironmentVariablesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigEnvironmentVariablesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigEnvironmentVariablesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigEnvironmentVariablesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigEnvironmentVariablesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigEnvironmentVariablesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigEnvironmentVariablesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigEnvironmentVariablesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigEnvironmentVariablesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigEnvironmentVariablesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigEnvironmentVariablesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigEnvironmentVariablesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigEnvironmentVariablesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigEnvironmentVariablesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigEnvironmentVariablesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigEnvironmentVariablesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigEnvironmentVariablesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigEnvironmentVariablesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigEnvironmentVariablesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigEnvironmentVariablesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigEnvironmentVariablesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigEnvironmentVariablesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigEnvironmentVariablesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigEnvironmentVariablesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigEnvironmentVariablesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigEnvironmentVariablesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigEnvironmentVariablesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigEnvironmentVariablesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigEnvironmentVariablesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigEnvironmentVariablesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigEnvironmentVariablesOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigEnvironmentVariablesOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigEnvironmentVariablesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigEnvironmentVariables">DataAwsccAmplifyAppAutoBranchCreationConfigEnvironmentVariables</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigEnvironmentVariablesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigEnvironmentVariablesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigEnvironmentVariablesOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigEnvironmentVariablesOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigEnvironmentVariablesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccAmplifyAppAutoBranchCreationConfigEnvironmentVariables;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigEnvironmentVariables">DataAwsccAmplifyAppAutoBranchCreationConfigEnvironmentVariables</a>

---


### DataAwsccAmplifyAppAutoBranchCreationConfigOutputReference <a name="DataAwsccAmplifyAppAutoBranchCreationConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigOutputReference.Initializer"></a>

```typescript
import { dataAwsccAmplifyApp } from '@cdktn/provider-awscc'

new dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigOutputReference.property.autoBranchCreationPatterns">autoBranchCreationPatterns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigOutputReference.property.basicAuthConfig">basicAuthConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigBasicAuthConfigOutputReference">DataAwsccAmplifyAppAutoBranchCreationConfigBasicAuthConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigOutputReference.property.buildSpec">buildSpec</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigOutputReference.property.enableAutoBranchCreation">enableAutoBranchCreation</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigOutputReference.property.enableAutoBuild">enableAutoBuild</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigOutputReference.property.enablePerformanceMode">enablePerformanceMode</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigOutputReference.property.enablePullRequestPreview">enablePullRequestPreview</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigOutputReference.property.environmentVariables">environmentVariables</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigEnvironmentVariablesList">DataAwsccAmplifyAppAutoBranchCreationConfigEnvironmentVariablesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigOutputReference.property.framework">framework</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigOutputReference.property.pullRequestEnvironmentName">pullRequestEnvironmentName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigOutputReference.property.stage">stage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfig">DataAwsccAmplifyAppAutoBranchCreationConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `autoBranchCreationPatterns`<sup>Required</sup> <a name="autoBranchCreationPatterns" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigOutputReference.property.autoBranchCreationPatterns"></a>

```typescript
public readonly autoBranchCreationPatterns: string[];
```

- *Type:* string[]

---

##### `basicAuthConfig`<sup>Required</sup> <a name="basicAuthConfig" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigOutputReference.property.basicAuthConfig"></a>

```typescript
public readonly basicAuthConfig: DataAwsccAmplifyAppAutoBranchCreationConfigBasicAuthConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigBasicAuthConfigOutputReference">DataAwsccAmplifyAppAutoBranchCreationConfigBasicAuthConfigOutputReference</a>

---

##### `buildSpec`<sup>Required</sup> <a name="buildSpec" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigOutputReference.property.buildSpec"></a>

```typescript
public readonly buildSpec: string;
```

- *Type:* string

---

##### `enableAutoBranchCreation`<sup>Required</sup> <a name="enableAutoBranchCreation" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigOutputReference.property.enableAutoBranchCreation"></a>

```typescript
public readonly enableAutoBranchCreation: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `enableAutoBuild`<sup>Required</sup> <a name="enableAutoBuild" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigOutputReference.property.enableAutoBuild"></a>

```typescript
public readonly enableAutoBuild: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `enablePerformanceMode`<sup>Required</sup> <a name="enablePerformanceMode" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigOutputReference.property.enablePerformanceMode"></a>

```typescript
public readonly enablePerformanceMode: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `enablePullRequestPreview`<sup>Required</sup> <a name="enablePullRequestPreview" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigOutputReference.property.enablePullRequestPreview"></a>

```typescript
public readonly enablePullRequestPreview: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `environmentVariables`<sup>Required</sup> <a name="environmentVariables" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigOutputReference.property.environmentVariables"></a>

```typescript
public readonly environmentVariables: DataAwsccAmplifyAppAutoBranchCreationConfigEnvironmentVariablesList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigEnvironmentVariablesList">DataAwsccAmplifyAppAutoBranchCreationConfigEnvironmentVariablesList</a>

---

##### `framework`<sup>Required</sup> <a name="framework" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigOutputReference.property.framework"></a>

```typescript
public readonly framework: string;
```

- *Type:* string

---

##### `pullRequestEnvironmentName`<sup>Required</sup> <a name="pullRequestEnvironmentName" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigOutputReference.property.pullRequestEnvironmentName"></a>

```typescript
public readonly pullRequestEnvironmentName: string;
```

- *Type:* string

---

##### `stage`<sup>Required</sup> <a name="stage" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigOutputReference.property.stage"></a>

```typescript
public readonly stage: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccAmplifyAppAutoBranchCreationConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfig">DataAwsccAmplifyAppAutoBranchCreationConfig</a>

---


### DataAwsccAmplifyAppBasicAuthConfigOutputReference <a name="DataAwsccAmplifyAppBasicAuthConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppBasicAuthConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppBasicAuthConfigOutputReference.Initializer"></a>

```typescript
import { dataAwsccAmplifyApp } from '@cdktn/provider-awscc'

new dataAwsccAmplifyApp.DataAwsccAmplifyAppBasicAuthConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppBasicAuthConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppBasicAuthConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppBasicAuthConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppBasicAuthConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppBasicAuthConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppBasicAuthConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppBasicAuthConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppBasicAuthConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppBasicAuthConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppBasicAuthConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppBasicAuthConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppBasicAuthConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppBasicAuthConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppBasicAuthConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppBasicAuthConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppBasicAuthConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppBasicAuthConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppBasicAuthConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppBasicAuthConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppBasicAuthConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppBasicAuthConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppBasicAuthConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppBasicAuthConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppBasicAuthConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppBasicAuthConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppBasicAuthConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppBasicAuthConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppBasicAuthConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppBasicAuthConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppBasicAuthConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppBasicAuthConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppBasicAuthConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppBasicAuthConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppBasicAuthConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppBasicAuthConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppBasicAuthConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppBasicAuthConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppBasicAuthConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppBasicAuthConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppBasicAuthConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppBasicAuthConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppBasicAuthConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppBasicAuthConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppBasicAuthConfigOutputReference.property.enableBasicAuth">enableBasicAuth</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppBasicAuthConfigOutputReference.property.password">password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppBasicAuthConfigOutputReference.property.username">username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppBasicAuthConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppBasicAuthConfig">DataAwsccAmplifyAppBasicAuthConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppBasicAuthConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppBasicAuthConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `enableBasicAuth`<sup>Required</sup> <a name="enableBasicAuth" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppBasicAuthConfigOutputReference.property.enableBasicAuth"></a>

```typescript
public readonly enableBasicAuth: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppBasicAuthConfigOutputReference.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppBasicAuthConfigOutputReference.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppBasicAuthConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccAmplifyAppBasicAuthConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppBasicAuthConfig">DataAwsccAmplifyAppBasicAuthConfig</a>

---


### DataAwsccAmplifyAppCacheConfigOutputReference <a name="DataAwsccAmplifyAppCacheConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppCacheConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppCacheConfigOutputReference.Initializer"></a>

```typescript
import { dataAwsccAmplifyApp } from '@cdktn/provider-awscc'

new dataAwsccAmplifyApp.DataAwsccAmplifyAppCacheConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppCacheConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppCacheConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppCacheConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppCacheConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppCacheConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppCacheConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppCacheConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppCacheConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppCacheConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppCacheConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppCacheConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppCacheConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppCacheConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppCacheConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppCacheConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppCacheConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppCacheConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppCacheConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppCacheConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppCacheConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppCacheConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppCacheConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppCacheConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppCacheConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppCacheConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppCacheConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppCacheConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppCacheConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppCacheConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppCacheConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppCacheConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppCacheConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppCacheConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppCacheConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppCacheConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppCacheConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppCacheConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppCacheConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppCacheConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppCacheConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppCacheConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppCacheConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppCacheConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppCacheConfigOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppCacheConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppCacheConfig">DataAwsccAmplifyAppCacheConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppCacheConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppCacheConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppCacheConfigOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppCacheConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccAmplifyAppCacheConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppCacheConfig">DataAwsccAmplifyAppCacheConfig</a>

---


### DataAwsccAmplifyAppCustomRulesList <a name="DataAwsccAmplifyAppCustomRulesList" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppCustomRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppCustomRulesList.Initializer"></a>

```typescript
import { dataAwsccAmplifyApp } from '@cdktn/provider-awscc'

new dataAwsccAmplifyApp.DataAwsccAmplifyAppCustomRulesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppCustomRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppCustomRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppCustomRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppCustomRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppCustomRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppCustomRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppCustomRulesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppCustomRulesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppCustomRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppCustomRulesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppCustomRulesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppCustomRulesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppCustomRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppCustomRulesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppCustomRulesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppCustomRulesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppCustomRulesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppCustomRulesList.get"></a>

```typescript
public get(index: number): DataAwsccAmplifyAppCustomRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppCustomRulesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppCustomRulesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppCustomRulesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppCustomRulesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppCustomRulesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccAmplifyAppCustomRulesOutputReference <a name="DataAwsccAmplifyAppCustomRulesOutputReference" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppCustomRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppCustomRulesOutputReference.Initializer"></a>

```typescript
import { dataAwsccAmplifyApp } from '@cdktn/provider-awscc'

new dataAwsccAmplifyApp.DataAwsccAmplifyAppCustomRulesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppCustomRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppCustomRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppCustomRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppCustomRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppCustomRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppCustomRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppCustomRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppCustomRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppCustomRulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppCustomRulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppCustomRulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppCustomRulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppCustomRulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppCustomRulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppCustomRulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppCustomRulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppCustomRulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppCustomRulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppCustomRulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppCustomRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppCustomRulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppCustomRulesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppCustomRulesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppCustomRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppCustomRulesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppCustomRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppCustomRulesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppCustomRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppCustomRulesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppCustomRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppCustomRulesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppCustomRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppCustomRulesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppCustomRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppCustomRulesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppCustomRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppCustomRulesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppCustomRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppCustomRulesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppCustomRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppCustomRulesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppCustomRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppCustomRulesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppCustomRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppCustomRulesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppCustomRulesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppCustomRulesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppCustomRulesOutputReference.property.condition">condition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppCustomRulesOutputReference.property.source">source</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppCustomRulesOutputReference.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppCustomRulesOutputReference.property.target">target</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppCustomRulesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppCustomRules">DataAwsccAmplifyAppCustomRules</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppCustomRulesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppCustomRulesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppCustomRulesOutputReference.property.condition"></a>

```typescript
public readonly condition: string;
```

- *Type:* string

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppCustomRulesOutputReference.property.source"></a>

```typescript
public readonly source: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppCustomRulesOutputReference.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppCustomRulesOutputReference.property.target"></a>

```typescript
public readonly target: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppCustomRulesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccAmplifyAppCustomRules;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppCustomRules">DataAwsccAmplifyAppCustomRules</a>

---


### DataAwsccAmplifyAppEnvironmentVariablesList <a name="DataAwsccAmplifyAppEnvironmentVariablesList" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppEnvironmentVariablesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppEnvironmentVariablesList.Initializer"></a>

```typescript
import { dataAwsccAmplifyApp } from '@cdktn/provider-awscc'

new dataAwsccAmplifyApp.DataAwsccAmplifyAppEnvironmentVariablesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppEnvironmentVariablesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppEnvironmentVariablesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppEnvironmentVariablesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppEnvironmentVariablesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppEnvironmentVariablesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppEnvironmentVariablesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppEnvironmentVariablesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppEnvironmentVariablesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppEnvironmentVariablesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppEnvironmentVariablesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppEnvironmentVariablesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppEnvironmentVariablesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppEnvironmentVariablesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppEnvironmentVariablesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppEnvironmentVariablesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppEnvironmentVariablesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppEnvironmentVariablesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppEnvironmentVariablesList.get"></a>

```typescript
public get(index: number): DataAwsccAmplifyAppEnvironmentVariablesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppEnvironmentVariablesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppEnvironmentVariablesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppEnvironmentVariablesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppEnvironmentVariablesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppEnvironmentVariablesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccAmplifyAppEnvironmentVariablesOutputReference <a name="DataAwsccAmplifyAppEnvironmentVariablesOutputReference" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppEnvironmentVariablesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppEnvironmentVariablesOutputReference.Initializer"></a>

```typescript
import { dataAwsccAmplifyApp } from '@cdktn/provider-awscc'

new dataAwsccAmplifyApp.DataAwsccAmplifyAppEnvironmentVariablesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppEnvironmentVariablesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppEnvironmentVariablesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppEnvironmentVariablesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppEnvironmentVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppEnvironmentVariablesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppEnvironmentVariablesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppEnvironmentVariablesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppEnvironmentVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppEnvironmentVariablesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppEnvironmentVariablesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppEnvironmentVariablesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppEnvironmentVariablesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppEnvironmentVariablesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppEnvironmentVariablesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppEnvironmentVariablesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppEnvironmentVariablesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppEnvironmentVariablesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppEnvironmentVariablesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppEnvironmentVariablesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppEnvironmentVariablesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppEnvironmentVariablesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppEnvironmentVariablesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppEnvironmentVariablesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppEnvironmentVariablesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppEnvironmentVariablesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppEnvironmentVariablesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppEnvironmentVariablesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppEnvironmentVariablesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppEnvironmentVariablesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppEnvironmentVariablesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppEnvironmentVariablesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppEnvironmentVariablesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppEnvironmentVariablesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppEnvironmentVariablesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppEnvironmentVariablesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppEnvironmentVariablesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppEnvironmentVariablesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppEnvironmentVariablesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppEnvironmentVariablesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppEnvironmentVariablesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppEnvironmentVariablesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppEnvironmentVariablesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppEnvironmentVariablesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppEnvironmentVariablesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppEnvironmentVariablesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppEnvironmentVariablesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppEnvironmentVariablesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppEnvironmentVariablesOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppEnvironmentVariablesOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppEnvironmentVariablesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppEnvironmentVariables">DataAwsccAmplifyAppEnvironmentVariables</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppEnvironmentVariablesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppEnvironmentVariablesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppEnvironmentVariablesOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppEnvironmentVariablesOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppEnvironmentVariablesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccAmplifyAppEnvironmentVariables;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppEnvironmentVariables">DataAwsccAmplifyAppEnvironmentVariables</a>

---


### DataAwsccAmplifyAppJobConfigOutputReference <a name="DataAwsccAmplifyAppJobConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppJobConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppJobConfigOutputReference.Initializer"></a>

```typescript
import { dataAwsccAmplifyApp } from '@cdktn/provider-awscc'

new dataAwsccAmplifyApp.DataAwsccAmplifyAppJobConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppJobConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppJobConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppJobConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppJobConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppJobConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppJobConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppJobConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppJobConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppJobConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppJobConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppJobConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppJobConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppJobConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppJobConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppJobConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppJobConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppJobConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppJobConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppJobConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppJobConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppJobConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppJobConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppJobConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppJobConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppJobConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppJobConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppJobConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppJobConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppJobConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppJobConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppJobConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppJobConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppJobConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppJobConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppJobConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppJobConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppJobConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppJobConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppJobConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppJobConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppJobConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppJobConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppJobConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppJobConfigOutputReference.property.buildComputeType">buildComputeType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppJobConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppJobConfig">DataAwsccAmplifyAppJobConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppJobConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppJobConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `buildComputeType`<sup>Required</sup> <a name="buildComputeType" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppJobConfigOutputReference.property.buildComputeType"></a>

```typescript
public readonly buildComputeType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppJobConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccAmplifyAppJobConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppJobConfig">DataAwsccAmplifyAppJobConfig</a>

---


### DataAwsccAmplifyAppTagsList <a name="DataAwsccAmplifyAppTagsList" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppTagsList.Initializer"></a>

```typescript
import { dataAwsccAmplifyApp } from '@cdktn/provider-awscc'

new dataAwsccAmplifyApp.DataAwsccAmplifyAppTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppTagsList.get"></a>

```typescript
public get(index: number): DataAwsccAmplifyAppTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccAmplifyAppTagsOutputReference <a name="DataAwsccAmplifyAppTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppTagsOutputReference.Initializer"></a>

```typescript
import { dataAwsccAmplifyApp } from '@cdktn/provider-awscc'

new dataAwsccAmplifyApp.DataAwsccAmplifyAppTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppTags">DataAwsccAmplifyAppTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccAmplifyAppTags;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppTags">DataAwsccAmplifyAppTags</a>

---



