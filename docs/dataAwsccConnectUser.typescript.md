# `dataAwsccConnectUser` Submodule <a name="`dataAwsccConnectUser` Submodule" id="@cdktn/provider-awscc.dataAwsccConnectUser"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccConnectUser <a name="DataAwsccConnectUser" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUser"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/connect_user awscc_connect_user}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUser.Initializer"></a>

```typescript
import { dataAwsccConnectUser } from '@cdktn/provider-awscc'

new dataAwsccConnectUser.DataAwsccConnectUser(scope: Construct, id: string, config: DataAwsccConnectUserConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUser.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUser.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUser.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserConfig">DataAwsccConnectUserConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUser.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUser.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUser.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserConfig">DataAwsccConnectUserConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUser.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUser.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUser.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUser.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUser.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUser.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUser.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUser.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUser.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUser.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUser.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUser.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUser.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUser.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUser.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUser.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUser.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUser.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUser.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUser.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUser.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUser.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUser.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUser.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUser.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUser.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUser.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUser.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUser.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUser.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUser.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUser.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUser.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUser.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUser.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUser.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUser.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUser.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUser.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUser.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUser.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUser.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUser.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUser.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUser.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUser.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUser.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUser.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUser.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUser.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUser.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUser.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUser.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUser.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccConnectUser resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUser.isConstruct"></a>

```typescript
import { dataAwsccConnectUser } from '@cdktn/provider-awscc'

dataAwsccConnectUser.DataAwsccConnectUser.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUser.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUser.isTerraformElement"></a>

```typescript
import { dataAwsccConnectUser } from '@cdktn/provider-awscc'

dataAwsccConnectUser.DataAwsccConnectUser.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUser.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUser.isTerraformDataSource"></a>

```typescript
import { dataAwsccConnectUser } from '@cdktn/provider-awscc'

dataAwsccConnectUser.DataAwsccConnectUser.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUser.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUser.generateConfigForImport"></a>

```typescript
import { dataAwsccConnectUser } from '@cdktn/provider-awscc'

dataAwsccConnectUser.DataAwsccConnectUser.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccConnectUser resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUser.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUser.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccConnectUser to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUser.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccConnectUser that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/connect_user#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUser.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccConnectUser to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUser.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUser.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUser.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUser.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUser.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUser.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUser.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUser.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUser.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUser.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUser.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUser.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUser.property.afterContactWorkConfigs">afterContactWorkConfigs</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsList">DataAwsccConnectUserAfterContactWorkConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUser.property.autoAcceptConfigs">autoAcceptConfigs</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAutoAcceptConfigsList">DataAwsccConnectUserAutoAcceptConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUser.property.directoryUserId">directoryUserId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUser.property.hierarchyGroupArn">hierarchyGroupArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUser.property.identityInfo">identityInfo</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserIdentityInfoOutputReference">DataAwsccConnectUserIdentityInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUser.property.instanceArn">instanceArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUser.property.password">password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUser.property.persistentConnectionConfigs">persistentConnectionConfigs</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPersistentConnectionConfigsList">DataAwsccConnectUserPersistentConnectionConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUser.property.phoneConfig">phoneConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneConfigOutputReference">DataAwsccConnectUserPhoneConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUser.property.phoneNumberConfigs">phoneNumberConfigs</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneNumberConfigsList">DataAwsccConnectUserPhoneNumberConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUser.property.routingProfileArn">routingProfileArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUser.property.securityProfileArns">securityProfileArns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUser.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserTagsList">DataAwsccConnectUserTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUser.property.userArn">userArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUser.property.username">username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUser.property.userProficiencies">userProficiencies</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserUserProficienciesList">DataAwsccConnectUserUserProficienciesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUser.property.voiceEnhancementConfigs">voiceEnhancementConfigs</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserVoiceEnhancementConfigsList">DataAwsccConnectUserVoiceEnhancementConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUser.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUser.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUser.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUser.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUser.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUser.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUser.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUser.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUser.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUser.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUser.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUser.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUser.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUser.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `afterContactWorkConfigs`<sup>Required</sup> <a name="afterContactWorkConfigs" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUser.property.afterContactWorkConfigs"></a>

```typescript
public readonly afterContactWorkConfigs: DataAwsccConnectUserAfterContactWorkConfigsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsList">DataAwsccConnectUserAfterContactWorkConfigsList</a>

---

##### `autoAcceptConfigs`<sup>Required</sup> <a name="autoAcceptConfigs" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUser.property.autoAcceptConfigs"></a>

```typescript
public readonly autoAcceptConfigs: DataAwsccConnectUserAutoAcceptConfigsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAutoAcceptConfigsList">DataAwsccConnectUserAutoAcceptConfigsList</a>

---

##### `directoryUserId`<sup>Required</sup> <a name="directoryUserId" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUser.property.directoryUserId"></a>

```typescript
public readonly directoryUserId: string;
```

- *Type:* string

---

##### `hierarchyGroupArn`<sup>Required</sup> <a name="hierarchyGroupArn" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUser.property.hierarchyGroupArn"></a>

```typescript
public readonly hierarchyGroupArn: string;
```

- *Type:* string

---

##### `identityInfo`<sup>Required</sup> <a name="identityInfo" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUser.property.identityInfo"></a>

```typescript
public readonly identityInfo: DataAwsccConnectUserIdentityInfoOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserIdentityInfoOutputReference">DataAwsccConnectUserIdentityInfoOutputReference</a>

---

##### `instanceArn`<sup>Required</sup> <a name="instanceArn" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUser.property.instanceArn"></a>

```typescript
public readonly instanceArn: string;
```

- *Type:* string

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUser.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

---

##### `persistentConnectionConfigs`<sup>Required</sup> <a name="persistentConnectionConfigs" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUser.property.persistentConnectionConfigs"></a>

```typescript
public readonly persistentConnectionConfigs: DataAwsccConnectUserPersistentConnectionConfigsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPersistentConnectionConfigsList">DataAwsccConnectUserPersistentConnectionConfigsList</a>

---

##### `phoneConfig`<sup>Required</sup> <a name="phoneConfig" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUser.property.phoneConfig"></a>

```typescript
public readonly phoneConfig: DataAwsccConnectUserPhoneConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneConfigOutputReference">DataAwsccConnectUserPhoneConfigOutputReference</a>

---

##### `phoneNumberConfigs`<sup>Required</sup> <a name="phoneNumberConfigs" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUser.property.phoneNumberConfigs"></a>

```typescript
public readonly phoneNumberConfigs: DataAwsccConnectUserPhoneNumberConfigsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneNumberConfigsList">DataAwsccConnectUserPhoneNumberConfigsList</a>

---

##### `routingProfileArn`<sup>Required</sup> <a name="routingProfileArn" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUser.property.routingProfileArn"></a>

```typescript
public readonly routingProfileArn: string;
```

- *Type:* string

---

##### `securityProfileArns`<sup>Required</sup> <a name="securityProfileArns" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUser.property.securityProfileArns"></a>

```typescript
public readonly securityProfileArns: string[];
```

- *Type:* string[]

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUser.property.tags"></a>

```typescript
public readonly tags: DataAwsccConnectUserTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserTagsList">DataAwsccConnectUserTagsList</a>

---

##### `userArn`<sup>Required</sup> <a name="userArn" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUser.property.userArn"></a>

```typescript
public readonly userArn: string;
```

- *Type:* string

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUser.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

---

##### `userProficiencies`<sup>Required</sup> <a name="userProficiencies" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUser.property.userProficiencies"></a>

```typescript
public readonly userProficiencies: DataAwsccConnectUserUserProficienciesList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserUserProficienciesList">DataAwsccConnectUserUserProficienciesList</a>

---

##### `voiceEnhancementConfigs`<sup>Required</sup> <a name="voiceEnhancementConfigs" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUser.property.voiceEnhancementConfigs"></a>

```typescript
public readonly voiceEnhancementConfigs: DataAwsccConnectUserVoiceEnhancementConfigsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserVoiceEnhancementConfigsList">DataAwsccConnectUserVoiceEnhancementConfigsList</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUser.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUser.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUser.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUser.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccConnectUserAfterContactWorkConfigs <a name="DataAwsccConnectUserAfterContactWorkConfigs" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigs.Initializer"></a>

```typescript
import { dataAwsccConnectUser } from '@cdktn/provider-awscc'

const dataAwsccConnectUserAfterContactWorkConfigs: dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigs = { ... }
```


### DataAwsccConnectUserAfterContactWorkConfigsAfterContactWorkConfig <a name="DataAwsccConnectUserAfterContactWorkConfigsAfterContactWorkConfig" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsAfterContactWorkConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsAfterContactWorkConfig.Initializer"></a>

```typescript
import { dataAwsccConnectUser } from '@cdktn/provider-awscc'

const dataAwsccConnectUserAfterContactWorkConfigsAfterContactWorkConfig: dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsAfterContactWorkConfig = { ... }
```


### DataAwsccConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfig <a name="DataAwsccConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfig" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfig.Initializer"></a>

```typescript
import { dataAwsccConnectUser } from '@cdktn/provider-awscc'

const dataAwsccConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfig: dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfig = { ... }
```


### DataAwsccConnectUserAutoAcceptConfigs <a name="DataAwsccConnectUserAutoAcceptConfigs" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAutoAcceptConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAutoAcceptConfigs.Initializer"></a>

```typescript
import { dataAwsccConnectUser } from '@cdktn/provider-awscc'

const dataAwsccConnectUserAutoAcceptConfigs: dataAwsccConnectUser.DataAwsccConnectUserAutoAcceptConfigs = { ... }
```


### DataAwsccConnectUserConfig <a name="DataAwsccConnectUserConfig" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserConfig.Initializer"></a>

```typescript
import { dataAwsccConnectUser } from '@cdktn/provider-awscc'

const dataAwsccConnectUserConfig: dataAwsccConnectUser.DataAwsccConnectUserConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/connect_user#id DataAwsccConnectUser#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccConnectUserIdentityInfo <a name="DataAwsccConnectUserIdentityInfo" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserIdentityInfo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserIdentityInfo.Initializer"></a>

```typescript
import { dataAwsccConnectUser } from '@cdktn/provider-awscc'

const dataAwsccConnectUserIdentityInfo: dataAwsccConnectUser.DataAwsccConnectUserIdentityInfo = { ... }
```


### DataAwsccConnectUserPersistentConnectionConfigs <a name="DataAwsccConnectUserPersistentConnectionConfigs" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPersistentConnectionConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPersistentConnectionConfigs.Initializer"></a>

```typescript
import { dataAwsccConnectUser } from '@cdktn/provider-awscc'

const dataAwsccConnectUserPersistentConnectionConfigs: dataAwsccConnectUser.DataAwsccConnectUserPersistentConnectionConfigs = { ... }
```


### DataAwsccConnectUserPhoneConfig <a name="DataAwsccConnectUserPhoneConfig" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneConfig.Initializer"></a>

```typescript
import { dataAwsccConnectUser } from '@cdktn/provider-awscc'

const dataAwsccConnectUserPhoneConfig: dataAwsccConnectUser.DataAwsccConnectUserPhoneConfig = { ... }
```


### DataAwsccConnectUserPhoneNumberConfigs <a name="DataAwsccConnectUserPhoneNumberConfigs" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneNumberConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneNumberConfigs.Initializer"></a>

```typescript
import { dataAwsccConnectUser } from '@cdktn/provider-awscc'

const dataAwsccConnectUserPhoneNumberConfigs: dataAwsccConnectUser.DataAwsccConnectUserPhoneNumberConfigs = { ... }
```


### DataAwsccConnectUserTags <a name="DataAwsccConnectUserTags" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserTags.Initializer"></a>

```typescript
import { dataAwsccConnectUser } from '@cdktn/provider-awscc'

const dataAwsccConnectUserTags: dataAwsccConnectUser.DataAwsccConnectUserTags = { ... }
```


### DataAwsccConnectUserUserProficiencies <a name="DataAwsccConnectUserUserProficiencies" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserUserProficiencies"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserUserProficiencies.Initializer"></a>

```typescript
import { dataAwsccConnectUser } from '@cdktn/provider-awscc'

const dataAwsccConnectUserUserProficiencies: dataAwsccConnectUser.DataAwsccConnectUserUserProficiencies = { ... }
```


### DataAwsccConnectUserVoiceEnhancementConfigs <a name="DataAwsccConnectUserVoiceEnhancementConfigs" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserVoiceEnhancementConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserVoiceEnhancementConfigs.Initializer"></a>

```typescript
import { dataAwsccConnectUser } from '@cdktn/provider-awscc'

const dataAwsccConnectUserVoiceEnhancementConfigs: dataAwsccConnectUser.DataAwsccConnectUserVoiceEnhancementConfigs = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference <a name="DataAwsccConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference.Initializer"></a>

```typescript
import { dataAwsccConnectUser } from '@cdktn/provider-awscc'

new dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference.property.afterContactWorkMode">afterContactWorkMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference.property.afterContactWorkTimeLimit">afterContactWorkTimeLimit</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsAfterContactWorkConfig">DataAwsccConnectUserAfterContactWorkConfigsAfterContactWorkConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `afterContactWorkMode`<sup>Required</sup> <a name="afterContactWorkMode" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference.property.afterContactWorkMode"></a>

```typescript
public readonly afterContactWorkMode: string;
```

- *Type:* string

---

##### `afterContactWorkTimeLimit`<sup>Required</sup> <a name="afterContactWorkTimeLimit" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference.property.afterContactWorkTimeLimit"></a>

```typescript
public readonly afterContactWorkTimeLimit: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccConnectUserAfterContactWorkConfigsAfterContactWorkConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsAfterContactWorkConfig">DataAwsccConnectUserAfterContactWorkConfigsAfterContactWorkConfig</a>

---


### DataAwsccConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference <a name="DataAwsccConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference.Initializer"></a>

```typescript
import { dataAwsccConnectUser } from '@cdktn/provider-awscc'

new dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference.property.afterContactWorkMode">afterContactWorkMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference.property.afterContactWorkTimeLimit">afterContactWorkTimeLimit</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfig">DataAwsccConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `afterContactWorkMode`<sup>Required</sup> <a name="afterContactWorkMode" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference.property.afterContactWorkMode"></a>

```typescript
public readonly afterContactWorkMode: string;
```

- *Type:* string

---

##### `afterContactWorkTimeLimit`<sup>Required</sup> <a name="afterContactWorkTimeLimit" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference.property.afterContactWorkTimeLimit"></a>

```typescript
public readonly afterContactWorkTimeLimit: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfig">DataAwsccConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfig</a>

---


### DataAwsccConnectUserAfterContactWorkConfigsList <a name="DataAwsccConnectUserAfterContactWorkConfigsList" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsList.Initializer"></a>

```typescript
import { dataAwsccConnectUser } from '@cdktn/provider-awscc'

new dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsList.get"></a>

```typescript
public get(index: number): DataAwsccConnectUserAfterContactWorkConfigsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccConnectUserAfterContactWorkConfigsOutputReference <a name="DataAwsccConnectUserAfterContactWorkConfigsOutputReference" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsOutputReference.Initializer"></a>

```typescript
import { dataAwsccConnectUser } from '@cdktn/provider-awscc'

new dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsOutputReference.property.afterContactWorkConfig">afterContactWorkConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference">DataAwsccConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsOutputReference.property.agentFirstCallbackAfterContactWorkConfig">agentFirstCallbackAfterContactWorkConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference">DataAwsccConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsOutputReference.property.channel">channel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigs">DataAwsccConnectUserAfterContactWorkConfigs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `afterContactWorkConfig`<sup>Required</sup> <a name="afterContactWorkConfig" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsOutputReference.property.afterContactWorkConfig"></a>

```typescript
public readonly afterContactWorkConfig: DataAwsccConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference">DataAwsccConnectUserAfterContactWorkConfigsAfterContactWorkConfigOutputReference</a>

---

##### `agentFirstCallbackAfterContactWorkConfig`<sup>Required</sup> <a name="agentFirstCallbackAfterContactWorkConfig" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsOutputReference.property.agentFirstCallbackAfterContactWorkConfig"></a>

```typescript
public readonly agentFirstCallbackAfterContactWorkConfig: DataAwsccConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference">DataAwsccConnectUserAfterContactWorkConfigsAgentFirstCallbackAfterContactWorkConfigOutputReference</a>

---

##### `channel`<sup>Required</sup> <a name="channel" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsOutputReference.property.channel"></a>

```typescript
public readonly channel: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccConnectUserAfterContactWorkConfigs;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAfterContactWorkConfigs">DataAwsccConnectUserAfterContactWorkConfigs</a>

---


### DataAwsccConnectUserAutoAcceptConfigsList <a name="DataAwsccConnectUserAutoAcceptConfigsList" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAutoAcceptConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAutoAcceptConfigsList.Initializer"></a>

```typescript
import { dataAwsccConnectUser } from '@cdktn/provider-awscc'

new dataAwsccConnectUser.DataAwsccConnectUserAutoAcceptConfigsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAutoAcceptConfigsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAutoAcceptConfigsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAutoAcceptConfigsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAutoAcceptConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAutoAcceptConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAutoAcceptConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAutoAcceptConfigsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAutoAcceptConfigsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAutoAcceptConfigsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAutoAcceptConfigsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAutoAcceptConfigsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAutoAcceptConfigsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAutoAcceptConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAutoAcceptConfigsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAutoAcceptConfigsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAutoAcceptConfigsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAutoAcceptConfigsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAutoAcceptConfigsList.get"></a>

```typescript
public get(index: number): DataAwsccConnectUserAutoAcceptConfigsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAutoAcceptConfigsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAutoAcceptConfigsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAutoAcceptConfigsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAutoAcceptConfigsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAutoAcceptConfigsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccConnectUserAutoAcceptConfigsOutputReference <a name="DataAwsccConnectUserAutoAcceptConfigsOutputReference" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAutoAcceptConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAutoAcceptConfigsOutputReference.Initializer"></a>

```typescript
import { dataAwsccConnectUser } from '@cdktn/provider-awscc'

new dataAwsccConnectUser.DataAwsccConnectUserAutoAcceptConfigsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAutoAcceptConfigsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAutoAcceptConfigsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAutoAcceptConfigsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAutoAcceptConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAutoAcceptConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAutoAcceptConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAutoAcceptConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAutoAcceptConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAutoAcceptConfigsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAutoAcceptConfigsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAutoAcceptConfigsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAutoAcceptConfigsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAutoAcceptConfigsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAutoAcceptConfigsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAutoAcceptConfigsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAutoAcceptConfigsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAutoAcceptConfigsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAutoAcceptConfigsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAutoAcceptConfigsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAutoAcceptConfigsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAutoAcceptConfigsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAutoAcceptConfigsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAutoAcceptConfigsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAutoAcceptConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAutoAcceptConfigsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAutoAcceptConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAutoAcceptConfigsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAutoAcceptConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAutoAcceptConfigsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAutoAcceptConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAutoAcceptConfigsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAutoAcceptConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAutoAcceptConfigsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAutoAcceptConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAutoAcceptConfigsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAutoAcceptConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAutoAcceptConfigsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAutoAcceptConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAutoAcceptConfigsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAutoAcceptConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAutoAcceptConfigsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAutoAcceptConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAutoAcceptConfigsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAutoAcceptConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAutoAcceptConfigsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAutoAcceptConfigsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAutoAcceptConfigsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAutoAcceptConfigsOutputReference.property.agentFirstCallbackAutoAccept">agentFirstCallbackAutoAccept</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAutoAcceptConfigsOutputReference.property.autoAccept">autoAccept</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAutoAcceptConfigsOutputReference.property.channel">channel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAutoAcceptConfigsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAutoAcceptConfigs">DataAwsccConnectUserAutoAcceptConfigs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAutoAcceptConfigsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAutoAcceptConfigsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `agentFirstCallbackAutoAccept`<sup>Required</sup> <a name="agentFirstCallbackAutoAccept" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAutoAcceptConfigsOutputReference.property.agentFirstCallbackAutoAccept"></a>

```typescript
public readonly agentFirstCallbackAutoAccept: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `autoAccept`<sup>Required</sup> <a name="autoAccept" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAutoAcceptConfigsOutputReference.property.autoAccept"></a>

```typescript
public readonly autoAccept: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `channel`<sup>Required</sup> <a name="channel" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAutoAcceptConfigsOutputReference.property.channel"></a>

```typescript
public readonly channel: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAutoAcceptConfigsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccConnectUserAutoAcceptConfigs;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserAutoAcceptConfigs">DataAwsccConnectUserAutoAcceptConfigs</a>

---


### DataAwsccConnectUserIdentityInfoOutputReference <a name="DataAwsccConnectUserIdentityInfoOutputReference" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserIdentityInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserIdentityInfoOutputReference.Initializer"></a>

```typescript
import { dataAwsccConnectUser } from '@cdktn/provider-awscc'

new dataAwsccConnectUser.DataAwsccConnectUserIdentityInfoOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserIdentityInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserIdentityInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserIdentityInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserIdentityInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserIdentityInfoOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserIdentityInfoOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserIdentityInfoOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserIdentityInfoOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserIdentityInfoOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserIdentityInfoOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserIdentityInfoOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserIdentityInfoOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserIdentityInfoOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserIdentityInfoOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserIdentityInfoOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserIdentityInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserIdentityInfoOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserIdentityInfoOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserIdentityInfoOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserIdentityInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserIdentityInfoOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserIdentityInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserIdentityInfoOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserIdentityInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserIdentityInfoOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserIdentityInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserIdentityInfoOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserIdentityInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserIdentityInfoOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserIdentityInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserIdentityInfoOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserIdentityInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserIdentityInfoOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserIdentityInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserIdentityInfoOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserIdentityInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserIdentityInfoOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserIdentityInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserIdentityInfoOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserIdentityInfoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserIdentityInfoOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserIdentityInfoOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserIdentityInfoOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserIdentityInfoOutputReference.property.email">email</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserIdentityInfoOutputReference.property.firstName">firstName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserIdentityInfoOutputReference.property.lastName">lastName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserIdentityInfoOutputReference.property.mobile">mobile</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserIdentityInfoOutputReference.property.secondaryEmail">secondaryEmail</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserIdentityInfoOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserIdentityInfo">DataAwsccConnectUserIdentityInfo</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserIdentityInfoOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserIdentityInfoOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserIdentityInfoOutputReference.property.email"></a>

```typescript
public readonly email: string;
```

- *Type:* string

---

##### `firstName`<sup>Required</sup> <a name="firstName" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserIdentityInfoOutputReference.property.firstName"></a>

```typescript
public readonly firstName: string;
```

- *Type:* string

---

##### `lastName`<sup>Required</sup> <a name="lastName" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserIdentityInfoOutputReference.property.lastName"></a>

```typescript
public readonly lastName: string;
```

- *Type:* string

---

##### `mobile`<sup>Required</sup> <a name="mobile" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserIdentityInfoOutputReference.property.mobile"></a>

```typescript
public readonly mobile: string;
```

- *Type:* string

---

##### `secondaryEmail`<sup>Required</sup> <a name="secondaryEmail" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserIdentityInfoOutputReference.property.secondaryEmail"></a>

```typescript
public readonly secondaryEmail: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserIdentityInfoOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccConnectUserIdentityInfo;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserIdentityInfo">DataAwsccConnectUserIdentityInfo</a>

---


### DataAwsccConnectUserPersistentConnectionConfigsList <a name="DataAwsccConnectUserPersistentConnectionConfigsList" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPersistentConnectionConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPersistentConnectionConfigsList.Initializer"></a>

```typescript
import { dataAwsccConnectUser } from '@cdktn/provider-awscc'

new dataAwsccConnectUser.DataAwsccConnectUserPersistentConnectionConfigsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPersistentConnectionConfigsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPersistentConnectionConfigsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPersistentConnectionConfigsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPersistentConnectionConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPersistentConnectionConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPersistentConnectionConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPersistentConnectionConfigsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPersistentConnectionConfigsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPersistentConnectionConfigsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPersistentConnectionConfigsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPersistentConnectionConfigsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPersistentConnectionConfigsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPersistentConnectionConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPersistentConnectionConfigsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPersistentConnectionConfigsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPersistentConnectionConfigsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPersistentConnectionConfigsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPersistentConnectionConfigsList.get"></a>

```typescript
public get(index: number): DataAwsccConnectUserPersistentConnectionConfigsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPersistentConnectionConfigsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPersistentConnectionConfigsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPersistentConnectionConfigsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPersistentConnectionConfigsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPersistentConnectionConfigsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccConnectUserPersistentConnectionConfigsOutputReference <a name="DataAwsccConnectUserPersistentConnectionConfigsOutputReference" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPersistentConnectionConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPersistentConnectionConfigsOutputReference.Initializer"></a>

```typescript
import { dataAwsccConnectUser } from '@cdktn/provider-awscc'

new dataAwsccConnectUser.DataAwsccConnectUserPersistentConnectionConfigsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPersistentConnectionConfigsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPersistentConnectionConfigsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPersistentConnectionConfigsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPersistentConnectionConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPersistentConnectionConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPersistentConnectionConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPersistentConnectionConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPersistentConnectionConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPersistentConnectionConfigsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPersistentConnectionConfigsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPersistentConnectionConfigsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPersistentConnectionConfigsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPersistentConnectionConfigsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPersistentConnectionConfigsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPersistentConnectionConfigsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPersistentConnectionConfigsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPersistentConnectionConfigsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPersistentConnectionConfigsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPersistentConnectionConfigsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPersistentConnectionConfigsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPersistentConnectionConfigsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPersistentConnectionConfigsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPersistentConnectionConfigsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPersistentConnectionConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPersistentConnectionConfigsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPersistentConnectionConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPersistentConnectionConfigsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPersistentConnectionConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPersistentConnectionConfigsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPersistentConnectionConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPersistentConnectionConfigsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPersistentConnectionConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPersistentConnectionConfigsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPersistentConnectionConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPersistentConnectionConfigsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPersistentConnectionConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPersistentConnectionConfigsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPersistentConnectionConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPersistentConnectionConfigsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPersistentConnectionConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPersistentConnectionConfigsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPersistentConnectionConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPersistentConnectionConfigsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPersistentConnectionConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPersistentConnectionConfigsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPersistentConnectionConfigsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPersistentConnectionConfigsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPersistentConnectionConfigsOutputReference.property.channel">channel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPersistentConnectionConfigsOutputReference.property.persistentConnection">persistentConnection</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPersistentConnectionConfigsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPersistentConnectionConfigs">DataAwsccConnectUserPersistentConnectionConfigs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPersistentConnectionConfigsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPersistentConnectionConfigsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `channel`<sup>Required</sup> <a name="channel" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPersistentConnectionConfigsOutputReference.property.channel"></a>

```typescript
public readonly channel: string;
```

- *Type:* string

---

##### `persistentConnection`<sup>Required</sup> <a name="persistentConnection" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPersistentConnectionConfigsOutputReference.property.persistentConnection"></a>

```typescript
public readonly persistentConnection: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPersistentConnectionConfigsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccConnectUserPersistentConnectionConfigs;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPersistentConnectionConfigs">DataAwsccConnectUserPersistentConnectionConfigs</a>

---


### DataAwsccConnectUserPhoneConfigOutputReference <a name="DataAwsccConnectUserPhoneConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneConfigOutputReference.Initializer"></a>

```typescript
import { dataAwsccConnectUser } from '@cdktn/provider-awscc'

new dataAwsccConnectUser.DataAwsccConnectUserPhoneConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneConfigOutputReference.property.afterContactWorkTimeLimit">afterContactWorkTimeLimit</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneConfigOutputReference.property.autoAccept">autoAccept</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneConfigOutputReference.property.deskPhoneNumber">deskPhoneNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneConfigOutputReference.property.persistentConnection">persistentConnection</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneConfigOutputReference.property.phoneType">phoneType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneConfig">DataAwsccConnectUserPhoneConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `afterContactWorkTimeLimit`<sup>Required</sup> <a name="afterContactWorkTimeLimit" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneConfigOutputReference.property.afterContactWorkTimeLimit"></a>

```typescript
public readonly afterContactWorkTimeLimit: number;
```

- *Type:* number

---

##### `autoAccept`<sup>Required</sup> <a name="autoAccept" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneConfigOutputReference.property.autoAccept"></a>

```typescript
public readonly autoAccept: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `deskPhoneNumber`<sup>Required</sup> <a name="deskPhoneNumber" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneConfigOutputReference.property.deskPhoneNumber"></a>

```typescript
public readonly deskPhoneNumber: string;
```

- *Type:* string

---

##### `persistentConnection`<sup>Required</sup> <a name="persistentConnection" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneConfigOutputReference.property.persistentConnection"></a>

```typescript
public readonly persistentConnection: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `phoneType`<sup>Required</sup> <a name="phoneType" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneConfigOutputReference.property.phoneType"></a>

```typescript
public readonly phoneType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccConnectUserPhoneConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneConfig">DataAwsccConnectUserPhoneConfig</a>

---


### DataAwsccConnectUserPhoneNumberConfigsList <a name="DataAwsccConnectUserPhoneNumberConfigsList" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneNumberConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneNumberConfigsList.Initializer"></a>

```typescript
import { dataAwsccConnectUser } from '@cdktn/provider-awscc'

new dataAwsccConnectUser.DataAwsccConnectUserPhoneNumberConfigsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneNumberConfigsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneNumberConfigsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneNumberConfigsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneNumberConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneNumberConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneNumberConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneNumberConfigsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneNumberConfigsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneNumberConfigsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneNumberConfigsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneNumberConfigsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneNumberConfigsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneNumberConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneNumberConfigsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneNumberConfigsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneNumberConfigsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneNumberConfigsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneNumberConfigsList.get"></a>

```typescript
public get(index: number): DataAwsccConnectUserPhoneNumberConfigsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneNumberConfigsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneNumberConfigsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneNumberConfigsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneNumberConfigsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneNumberConfigsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccConnectUserPhoneNumberConfigsOutputReference <a name="DataAwsccConnectUserPhoneNumberConfigsOutputReference" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneNumberConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneNumberConfigsOutputReference.Initializer"></a>

```typescript
import { dataAwsccConnectUser } from '@cdktn/provider-awscc'

new dataAwsccConnectUser.DataAwsccConnectUserPhoneNumberConfigsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneNumberConfigsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneNumberConfigsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneNumberConfigsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneNumberConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneNumberConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneNumberConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneNumberConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneNumberConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneNumberConfigsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneNumberConfigsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneNumberConfigsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneNumberConfigsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneNumberConfigsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneNumberConfigsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneNumberConfigsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneNumberConfigsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneNumberConfigsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneNumberConfigsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneNumberConfigsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneNumberConfigsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneNumberConfigsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneNumberConfigsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneNumberConfigsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneNumberConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneNumberConfigsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneNumberConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneNumberConfigsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneNumberConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneNumberConfigsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneNumberConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneNumberConfigsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneNumberConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneNumberConfigsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneNumberConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneNumberConfigsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneNumberConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneNumberConfigsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneNumberConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneNumberConfigsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneNumberConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneNumberConfigsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneNumberConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneNumberConfigsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneNumberConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneNumberConfigsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneNumberConfigsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneNumberConfigsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneNumberConfigsOutputReference.property.channel">channel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneNumberConfigsOutputReference.property.phoneNumber">phoneNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneNumberConfigsOutputReference.property.phoneType">phoneType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneNumberConfigsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneNumberConfigs">DataAwsccConnectUserPhoneNumberConfigs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneNumberConfigsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneNumberConfigsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `channel`<sup>Required</sup> <a name="channel" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneNumberConfigsOutputReference.property.channel"></a>

```typescript
public readonly channel: string;
```

- *Type:* string

---

##### `phoneNumber`<sup>Required</sup> <a name="phoneNumber" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneNumberConfigsOutputReference.property.phoneNumber"></a>

```typescript
public readonly phoneNumber: string;
```

- *Type:* string

---

##### `phoneType`<sup>Required</sup> <a name="phoneType" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneNumberConfigsOutputReference.property.phoneType"></a>

```typescript
public readonly phoneType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneNumberConfigsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccConnectUserPhoneNumberConfigs;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserPhoneNumberConfigs">DataAwsccConnectUserPhoneNumberConfigs</a>

---


### DataAwsccConnectUserTagsList <a name="DataAwsccConnectUserTagsList" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserTagsList.Initializer"></a>

```typescript
import { dataAwsccConnectUser } from '@cdktn/provider-awscc'

new dataAwsccConnectUser.DataAwsccConnectUserTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserTagsList.get"></a>

```typescript
public get(index: number): DataAwsccConnectUserTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccConnectUserTagsOutputReference <a name="DataAwsccConnectUserTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserTagsOutputReference.Initializer"></a>

```typescript
import { dataAwsccConnectUser } from '@cdktn/provider-awscc'

new dataAwsccConnectUser.DataAwsccConnectUserTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserTags">DataAwsccConnectUserTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccConnectUserTags;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserTags">DataAwsccConnectUserTags</a>

---


### DataAwsccConnectUserUserProficienciesList <a name="DataAwsccConnectUserUserProficienciesList" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserUserProficienciesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserUserProficienciesList.Initializer"></a>

```typescript
import { dataAwsccConnectUser } from '@cdktn/provider-awscc'

new dataAwsccConnectUser.DataAwsccConnectUserUserProficienciesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserUserProficienciesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserUserProficienciesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserUserProficienciesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserUserProficienciesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserUserProficienciesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserUserProficienciesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserUserProficienciesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserUserProficienciesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserUserProficienciesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserUserProficienciesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserUserProficienciesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserUserProficienciesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserUserProficienciesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserUserProficienciesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserUserProficienciesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserUserProficienciesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserUserProficienciesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserUserProficienciesList.get"></a>

```typescript
public get(index: number): DataAwsccConnectUserUserProficienciesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserUserProficienciesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserUserProficienciesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserUserProficienciesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserUserProficienciesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserUserProficienciesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccConnectUserUserProficienciesOutputReference <a name="DataAwsccConnectUserUserProficienciesOutputReference" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserUserProficienciesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserUserProficienciesOutputReference.Initializer"></a>

```typescript
import { dataAwsccConnectUser } from '@cdktn/provider-awscc'

new dataAwsccConnectUser.DataAwsccConnectUserUserProficienciesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserUserProficienciesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserUserProficienciesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserUserProficienciesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserUserProficienciesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserUserProficienciesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserUserProficienciesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserUserProficienciesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserUserProficienciesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserUserProficienciesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserUserProficienciesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserUserProficienciesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserUserProficienciesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserUserProficienciesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserUserProficienciesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserUserProficienciesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserUserProficienciesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserUserProficienciesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserUserProficienciesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserUserProficienciesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserUserProficienciesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserUserProficienciesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserUserProficienciesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserUserProficienciesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserUserProficienciesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserUserProficienciesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserUserProficienciesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserUserProficienciesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserUserProficienciesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserUserProficienciesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserUserProficienciesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserUserProficienciesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserUserProficienciesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserUserProficienciesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserUserProficienciesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserUserProficienciesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserUserProficienciesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserUserProficienciesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserUserProficienciesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserUserProficienciesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserUserProficienciesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserUserProficienciesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserUserProficienciesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserUserProficienciesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserUserProficienciesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserUserProficienciesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserUserProficienciesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserUserProficienciesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserUserProficienciesOutputReference.property.attributeName">attributeName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserUserProficienciesOutputReference.property.attributeValue">attributeValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserUserProficienciesOutputReference.property.level">level</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserUserProficienciesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserUserProficiencies">DataAwsccConnectUserUserProficiencies</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserUserProficienciesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserUserProficienciesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `attributeName`<sup>Required</sup> <a name="attributeName" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserUserProficienciesOutputReference.property.attributeName"></a>

```typescript
public readonly attributeName: string;
```

- *Type:* string

---

##### `attributeValue`<sup>Required</sup> <a name="attributeValue" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserUserProficienciesOutputReference.property.attributeValue"></a>

```typescript
public readonly attributeValue: string;
```

- *Type:* string

---

##### `level`<sup>Required</sup> <a name="level" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserUserProficienciesOutputReference.property.level"></a>

```typescript
public readonly level: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserUserProficienciesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccConnectUserUserProficiencies;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserUserProficiencies">DataAwsccConnectUserUserProficiencies</a>

---


### DataAwsccConnectUserVoiceEnhancementConfigsList <a name="DataAwsccConnectUserVoiceEnhancementConfigsList" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserVoiceEnhancementConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserVoiceEnhancementConfigsList.Initializer"></a>

```typescript
import { dataAwsccConnectUser } from '@cdktn/provider-awscc'

new dataAwsccConnectUser.DataAwsccConnectUserVoiceEnhancementConfigsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserVoiceEnhancementConfigsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserVoiceEnhancementConfigsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserVoiceEnhancementConfigsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserVoiceEnhancementConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserVoiceEnhancementConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserVoiceEnhancementConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserVoiceEnhancementConfigsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserVoiceEnhancementConfigsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserVoiceEnhancementConfigsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserVoiceEnhancementConfigsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserVoiceEnhancementConfigsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserVoiceEnhancementConfigsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserVoiceEnhancementConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserVoiceEnhancementConfigsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserVoiceEnhancementConfigsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserVoiceEnhancementConfigsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserVoiceEnhancementConfigsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserVoiceEnhancementConfigsList.get"></a>

```typescript
public get(index: number): DataAwsccConnectUserVoiceEnhancementConfigsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserVoiceEnhancementConfigsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserVoiceEnhancementConfigsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserVoiceEnhancementConfigsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserVoiceEnhancementConfigsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserVoiceEnhancementConfigsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccConnectUserVoiceEnhancementConfigsOutputReference <a name="DataAwsccConnectUserVoiceEnhancementConfigsOutputReference" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserVoiceEnhancementConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserVoiceEnhancementConfigsOutputReference.Initializer"></a>

```typescript
import { dataAwsccConnectUser } from '@cdktn/provider-awscc'

new dataAwsccConnectUser.DataAwsccConnectUserVoiceEnhancementConfigsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserVoiceEnhancementConfigsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserVoiceEnhancementConfigsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserVoiceEnhancementConfigsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserVoiceEnhancementConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserVoiceEnhancementConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserVoiceEnhancementConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserVoiceEnhancementConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserVoiceEnhancementConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserVoiceEnhancementConfigsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserVoiceEnhancementConfigsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserVoiceEnhancementConfigsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserVoiceEnhancementConfigsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserVoiceEnhancementConfigsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserVoiceEnhancementConfigsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserVoiceEnhancementConfigsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserVoiceEnhancementConfigsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserVoiceEnhancementConfigsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserVoiceEnhancementConfigsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserVoiceEnhancementConfigsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserVoiceEnhancementConfigsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserVoiceEnhancementConfigsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserVoiceEnhancementConfigsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserVoiceEnhancementConfigsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserVoiceEnhancementConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserVoiceEnhancementConfigsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserVoiceEnhancementConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserVoiceEnhancementConfigsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserVoiceEnhancementConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserVoiceEnhancementConfigsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserVoiceEnhancementConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserVoiceEnhancementConfigsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserVoiceEnhancementConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserVoiceEnhancementConfigsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserVoiceEnhancementConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserVoiceEnhancementConfigsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserVoiceEnhancementConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserVoiceEnhancementConfigsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserVoiceEnhancementConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserVoiceEnhancementConfigsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserVoiceEnhancementConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserVoiceEnhancementConfigsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserVoiceEnhancementConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserVoiceEnhancementConfigsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserVoiceEnhancementConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserVoiceEnhancementConfigsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserVoiceEnhancementConfigsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserVoiceEnhancementConfigsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserVoiceEnhancementConfigsOutputReference.property.channel">channel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserVoiceEnhancementConfigsOutputReference.property.voiceEnhancementMode">voiceEnhancementMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserVoiceEnhancementConfigsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserVoiceEnhancementConfigs">DataAwsccConnectUserVoiceEnhancementConfigs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserVoiceEnhancementConfigsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserVoiceEnhancementConfigsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `channel`<sup>Required</sup> <a name="channel" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserVoiceEnhancementConfigsOutputReference.property.channel"></a>

```typescript
public readonly channel: string;
```

- *Type:* string

---

##### `voiceEnhancementMode`<sup>Required</sup> <a name="voiceEnhancementMode" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserVoiceEnhancementConfigsOutputReference.property.voiceEnhancementMode"></a>

```typescript
public readonly voiceEnhancementMode: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserVoiceEnhancementConfigsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccConnectUserVoiceEnhancementConfigs;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectUser.DataAwsccConnectUserVoiceEnhancementConfigs">DataAwsccConnectUserVoiceEnhancementConfigs</a>

---



