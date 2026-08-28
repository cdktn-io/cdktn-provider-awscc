# `dataAwsccIdentitystoreUser` Submodule <a name="`dataAwsccIdentitystoreUser` Submodule" id="@cdktn/provider-awscc.dataAwsccIdentitystoreUser"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccIdentitystoreUser <a name="DataAwsccIdentitystoreUser" id="@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUser"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/identitystore_user awscc_identitystore_user}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUser.Initializer"></a>

```typescript
import { dataAwsccIdentitystoreUser } from '@cdktn/provider-awscc'

new dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUser(scope: Construct, id: string, config: DataAwsccIdentitystoreUserConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUser.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUser.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUser.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserConfig">DataAwsccIdentitystoreUserConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUser.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUser.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUser.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserConfig">DataAwsccIdentitystoreUserConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUser.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUser.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUser.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUser.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUser.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUser.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUser.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUser.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUser.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUser.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUser.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUser.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUser.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUser.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUser.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUser.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUser.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUser.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUser.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUser.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUser.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUser.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUser.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUser.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUser.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUser.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUser.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUser.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUser.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUser.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUser.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUser.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUser.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUser.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUser.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUser.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUser.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUser.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUser.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUser.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUser.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUser.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUser.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUser.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUser.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUser.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUser.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUser.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUser.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUser.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUser.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUser.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUser.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUser.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccIdentitystoreUser resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUser.isConstruct"></a>

```typescript
import { dataAwsccIdentitystoreUser } from '@cdktn/provider-awscc'

dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUser.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUser.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUser.isTerraformElement"></a>

```typescript
import { dataAwsccIdentitystoreUser } from '@cdktn/provider-awscc'

dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUser.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUser.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUser.isTerraformDataSource"></a>

```typescript
import { dataAwsccIdentitystoreUser } from '@cdktn/provider-awscc'

dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUser.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUser.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUser.generateConfigForImport"></a>

```typescript
import { dataAwsccIdentitystoreUser } from '@cdktn/provider-awscc'

dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUser.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccIdentitystoreUser resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUser.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUser.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccIdentitystoreUser to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUser.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccIdentitystoreUser that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/identitystore_user#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUser.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccIdentitystoreUser to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUser.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUser.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUser.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUser.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUser.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUser.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUser.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUser.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUser.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUser.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUser.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUser.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUser.property.addresses">addresses</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserAddressesList">DataAwsccIdentitystoreUserAddressesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUser.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUser.property.birthdate">birthdate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUser.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUser.property.createdBy">createdBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUser.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUser.property.emails">emails</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserEmailsList">DataAwsccIdentitystoreUserEmailsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUser.property.identityStoreId">identityStoreId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUser.property.locale">locale</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUser.property.name">name</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserNameOutputReference">DataAwsccIdentitystoreUserNameOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUser.property.nickName">nickName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUser.property.phoneNumbers">phoneNumbers</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserPhoneNumbersList">DataAwsccIdentitystoreUserPhoneNumbersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUser.property.photos">photos</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserPhotosList">DataAwsccIdentitystoreUserPhotosList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUser.property.preferredLanguage">preferredLanguage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUser.property.profileUrl">profileUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUser.property.roles">roles</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserRolesList">DataAwsccIdentitystoreUserRolesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUser.property.timezone">timezone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUser.property.title">title</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUser.property.updatedAt">updatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUser.property.updatedBy">updatedBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUser.property.userId">userId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUser.property.userName">userName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUser.property.userStatus">userStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUser.property.userType">userType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUser.property.website">website</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUser.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUser.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUser.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUser.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUser.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUser.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUser.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUser.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUser.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUser.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUser.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUser.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUser.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUser.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `addresses`<sup>Required</sup> <a name="addresses" id="@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUser.property.addresses"></a>

```typescript
public readonly addresses: DataAwsccIdentitystoreUserAddressesList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserAddressesList">DataAwsccIdentitystoreUserAddressesList</a>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUser.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `birthdate`<sup>Required</sup> <a name="birthdate" id="@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUser.property.birthdate"></a>

```typescript
public readonly birthdate: string;
```

- *Type:* string

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUser.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `createdBy`<sup>Required</sup> <a name="createdBy" id="@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUser.property.createdBy"></a>

```typescript
public readonly createdBy: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUser.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `emails`<sup>Required</sup> <a name="emails" id="@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUser.property.emails"></a>

```typescript
public readonly emails: DataAwsccIdentitystoreUserEmailsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserEmailsList">DataAwsccIdentitystoreUserEmailsList</a>

---

##### `identityStoreId`<sup>Required</sup> <a name="identityStoreId" id="@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUser.property.identityStoreId"></a>

```typescript
public readonly identityStoreId: string;
```

- *Type:* string

---

##### `locale`<sup>Required</sup> <a name="locale" id="@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUser.property.locale"></a>

```typescript
public readonly locale: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUser.property.name"></a>

```typescript
public readonly name: DataAwsccIdentitystoreUserNameOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserNameOutputReference">DataAwsccIdentitystoreUserNameOutputReference</a>

---

##### `nickName`<sup>Required</sup> <a name="nickName" id="@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUser.property.nickName"></a>

```typescript
public readonly nickName: string;
```

- *Type:* string

---

##### `phoneNumbers`<sup>Required</sup> <a name="phoneNumbers" id="@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUser.property.phoneNumbers"></a>

```typescript
public readonly phoneNumbers: DataAwsccIdentitystoreUserPhoneNumbersList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserPhoneNumbersList">DataAwsccIdentitystoreUserPhoneNumbersList</a>

---

##### `photos`<sup>Required</sup> <a name="photos" id="@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUser.property.photos"></a>

```typescript
public readonly photos: DataAwsccIdentitystoreUserPhotosList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserPhotosList">DataAwsccIdentitystoreUserPhotosList</a>

---

##### `preferredLanguage`<sup>Required</sup> <a name="preferredLanguage" id="@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUser.property.preferredLanguage"></a>

```typescript
public readonly preferredLanguage: string;
```

- *Type:* string

---

##### `profileUrl`<sup>Required</sup> <a name="profileUrl" id="@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUser.property.profileUrl"></a>

```typescript
public readonly profileUrl: string;
```

- *Type:* string

---

##### `roles`<sup>Required</sup> <a name="roles" id="@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUser.property.roles"></a>

```typescript
public readonly roles: DataAwsccIdentitystoreUserRolesList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserRolesList">DataAwsccIdentitystoreUserRolesList</a>

---

##### `timezone`<sup>Required</sup> <a name="timezone" id="@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUser.property.timezone"></a>

```typescript
public readonly timezone: string;
```

- *Type:* string

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUser.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUser.property.updatedAt"></a>

```typescript
public readonly updatedAt: string;
```

- *Type:* string

---

##### `updatedBy`<sup>Required</sup> <a name="updatedBy" id="@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUser.property.updatedBy"></a>

```typescript
public readonly updatedBy: string;
```

- *Type:* string

---

##### `userId`<sup>Required</sup> <a name="userId" id="@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUser.property.userId"></a>

```typescript
public readonly userId: string;
```

- *Type:* string

---

##### `userName`<sup>Required</sup> <a name="userName" id="@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUser.property.userName"></a>

```typescript
public readonly userName: string;
```

- *Type:* string

---

##### `userStatus`<sup>Required</sup> <a name="userStatus" id="@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUser.property.userStatus"></a>

```typescript
public readonly userStatus: string;
```

- *Type:* string

---

##### `userType`<sup>Required</sup> <a name="userType" id="@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUser.property.userType"></a>

```typescript
public readonly userType: string;
```

- *Type:* string

---

##### `website`<sup>Required</sup> <a name="website" id="@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUser.property.website"></a>

```typescript
public readonly website: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUser.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUser.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUser.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUser.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccIdentitystoreUserAddresses <a name="DataAwsccIdentitystoreUserAddresses" id="@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserAddresses"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserAddresses.Initializer"></a>

```typescript
import { dataAwsccIdentitystoreUser } from '@cdktn/provider-awscc'

const dataAwsccIdentitystoreUserAddresses: dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserAddresses = { ... }
```


### DataAwsccIdentitystoreUserConfig <a name="DataAwsccIdentitystoreUserConfig" id="@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserConfig.Initializer"></a>

```typescript
import { dataAwsccIdentitystoreUser } from '@cdktn/provider-awscc'

const dataAwsccIdentitystoreUserConfig: dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/identitystore_user#id DataAwsccIdentitystoreUser#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccIdentitystoreUserEmails <a name="DataAwsccIdentitystoreUserEmails" id="@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserEmails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserEmails.Initializer"></a>

```typescript
import { dataAwsccIdentitystoreUser } from '@cdktn/provider-awscc'

const dataAwsccIdentitystoreUserEmails: dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserEmails = { ... }
```


### DataAwsccIdentitystoreUserName <a name="DataAwsccIdentitystoreUserName" id="@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserName"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserName.Initializer"></a>

```typescript
import { dataAwsccIdentitystoreUser } from '@cdktn/provider-awscc'

const dataAwsccIdentitystoreUserName: dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserName = { ... }
```


### DataAwsccIdentitystoreUserPhoneNumbers <a name="DataAwsccIdentitystoreUserPhoneNumbers" id="@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserPhoneNumbers"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserPhoneNumbers.Initializer"></a>

```typescript
import { dataAwsccIdentitystoreUser } from '@cdktn/provider-awscc'

const dataAwsccIdentitystoreUserPhoneNumbers: dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserPhoneNumbers = { ... }
```


### DataAwsccIdentitystoreUserPhotos <a name="DataAwsccIdentitystoreUserPhotos" id="@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserPhotos"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserPhotos.Initializer"></a>

```typescript
import { dataAwsccIdentitystoreUser } from '@cdktn/provider-awscc'

const dataAwsccIdentitystoreUserPhotos: dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserPhotos = { ... }
```


### DataAwsccIdentitystoreUserRoles <a name="DataAwsccIdentitystoreUserRoles" id="@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserRoles"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserRoles.Initializer"></a>

```typescript
import { dataAwsccIdentitystoreUser } from '@cdktn/provider-awscc'

const dataAwsccIdentitystoreUserRoles: dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserRoles = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccIdentitystoreUserAddressesList <a name="DataAwsccIdentitystoreUserAddressesList" id="@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserAddressesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserAddressesList.Initializer"></a>

```typescript
import { dataAwsccIdentitystoreUser } from '@cdktn/provider-awscc'

new dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserAddressesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserAddressesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserAddressesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserAddressesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserAddressesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserAddressesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserAddressesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserAddressesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserAddressesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserAddressesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserAddressesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserAddressesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserAddressesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserAddressesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserAddressesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserAddressesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserAddressesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserAddressesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserAddressesList.get"></a>

```typescript
public get(index: number): DataAwsccIdentitystoreUserAddressesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserAddressesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserAddressesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserAddressesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserAddressesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserAddressesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccIdentitystoreUserAddressesOutputReference <a name="DataAwsccIdentitystoreUserAddressesOutputReference" id="@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserAddressesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserAddressesOutputReference.Initializer"></a>

```typescript
import { dataAwsccIdentitystoreUser } from '@cdktn/provider-awscc'

new dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserAddressesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserAddressesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserAddressesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserAddressesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserAddressesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserAddressesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserAddressesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserAddressesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserAddressesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserAddressesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserAddressesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserAddressesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserAddressesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserAddressesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserAddressesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserAddressesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserAddressesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserAddressesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserAddressesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserAddressesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserAddressesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserAddressesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserAddressesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserAddressesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserAddressesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserAddressesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserAddressesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserAddressesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserAddressesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserAddressesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserAddressesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserAddressesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserAddressesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserAddressesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserAddressesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserAddressesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserAddressesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserAddressesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserAddressesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserAddressesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserAddressesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserAddressesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserAddressesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserAddressesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserAddressesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserAddressesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserAddressesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserAddressesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserAddressesOutputReference.property.country">country</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserAddressesOutputReference.property.formatted">formatted</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserAddressesOutputReference.property.locality">locality</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserAddressesOutputReference.property.postalCode">postalCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserAddressesOutputReference.property.primary">primary</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserAddressesOutputReference.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserAddressesOutputReference.property.streetAddress">streetAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserAddressesOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserAddressesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserAddresses">DataAwsccIdentitystoreUserAddresses</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserAddressesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserAddressesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `country`<sup>Required</sup> <a name="country" id="@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserAddressesOutputReference.property.country"></a>

```typescript
public readonly country: string;
```

- *Type:* string

---

##### `formatted`<sup>Required</sup> <a name="formatted" id="@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserAddressesOutputReference.property.formatted"></a>

```typescript
public readonly formatted: string;
```

- *Type:* string

---

##### `locality`<sup>Required</sup> <a name="locality" id="@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserAddressesOutputReference.property.locality"></a>

```typescript
public readonly locality: string;
```

- *Type:* string

---

##### `postalCode`<sup>Required</sup> <a name="postalCode" id="@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserAddressesOutputReference.property.postalCode"></a>

```typescript
public readonly postalCode: string;
```

- *Type:* string

---

##### `primary`<sup>Required</sup> <a name="primary" id="@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserAddressesOutputReference.property.primary"></a>

```typescript
public readonly primary: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserAddressesOutputReference.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `streetAddress`<sup>Required</sup> <a name="streetAddress" id="@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserAddressesOutputReference.property.streetAddress"></a>

```typescript
public readonly streetAddress: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserAddressesOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserAddressesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccIdentitystoreUserAddresses;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserAddresses">DataAwsccIdentitystoreUserAddresses</a>

---


### DataAwsccIdentitystoreUserEmailsList <a name="DataAwsccIdentitystoreUserEmailsList" id="@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserEmailsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserEmailsList.Initializer"></a>

```typescript
import { dataAwsccIdentitystoreUser } from '@cdktn/provider-awscc'

new dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserEmailsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserEmailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserEmailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserEmailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserEmailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserEmailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserEmailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserEmailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserEmailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserEmailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserEmailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserEmailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserEmailsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserEmailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserEmailsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserEmailsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserEmailsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserEmailsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserEmailsList.get"></a>

```typescript
public get(index: number): DataAwsccIdentitystoreUserEmailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserEmailsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserEmailsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserEmailsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserEmailsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserEmailsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccIdentitystoreUserEmailsOutputReference <a name="DataAwsccIdentitystoreUserEmailsOutputReference" id="@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserEmailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserEmailsOutputReference.Initializer"></a>

```typescript
import { dataAwsccIdentitystoreUser } from '@cdktn/provider-awscc'

new dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserEmailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserEmailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserEmailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserEmailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserEmailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserEmailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserEmailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserEmailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserEmailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserEmailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserEmailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserEmailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserEmailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserEmailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserEmailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserEmailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserEmailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserEmailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserEmailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserEmailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserEmailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserEmailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserEmailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserEmailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserEmailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserEmailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserEmailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserEmailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserEmailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserEmailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserEmailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserEmailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserEmailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserEmailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserEmailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserEmailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserEmailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserEmailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserEmailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserEmailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserEmailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserEmailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserEmailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserEmailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserEmailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserEmailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserEmailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserEmailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserEmailsOutputReference.property.primary">primary</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserEmailsOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserEmailsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserEmailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserEmails">DataAwsccIdentitystoreUserEmails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserEmailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserEmailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `primary`<sup>Required</sup> <a name="primary" id="@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserEmailsOutputReference.property.primary"></a>

```typescript
public readonly primary: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserEmailsOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserEmailsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserEmailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccIdentitystoreUserEmails;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserEmails">DataAwsccIdentitystoreUserEmails</a>

---


### DataAwsccIdentitystoreUserNameOutputReference <a name="DataAwsccIdentitystoreUserNameOutputReference" id="@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserNameOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserNameOutputReference.Initializer"></a>

```typescript
import { dataAwsccIdentitystoreUser } from '@cdktn/provider-awscc'

new dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserNameOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserNameOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserNameOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserNameOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserNameOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserNameOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserNameOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserNameOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserNameOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserNameOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserNameOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserNameOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserNameOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserNameOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserNameOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserNameOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserNameOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserNameOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserNameOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserNameOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserNameOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserNameOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserNameOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserNameOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserNameOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserNameOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserNameOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserNameOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserNameOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserNameOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserNameOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserNameOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserNameOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserNameOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserNameOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserNameOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserNameOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserNameOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserNameOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserNameOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserNameOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserNameOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserNameOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserNameOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserNameOutputReference.property.familyName">familyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserNameOutputReference.property.formatted">formatted</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserNameOutputReference.property.givenName">givenName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserNameOutputReference.property.honorificPrefix">honorificPrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserNameOutputReference.property.honorificSuffix">honorificSuffix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserNameOutputReference.property.middleName">middleName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserNameOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserName">DataAwsccIdentitystoreUserName</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserNameOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserNameOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `familyName`<sup>Required</sup> <a name="familyName" id="@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserNameOutputReference.property.familyName"></a>

```typescript
public readonly familyName: string;
```

- *Type:* string

---

##### `formatted`<sup>Required</sup> <a name="formatted" id="@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserNameOutputReference.property.formatted"></a>

```typescript
public readonly formatted: string;
```

- *Type:* string

---

##### `givenName`<sup>Required</sup> <a name="givenName" id="@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserNameOutputReference.property.givenName"></a>

```typescript
public readonly givenName: string;
```

- *Type:* string

---

##### `honorificPrefix`<sup>Required</sup> <a name="honorificPrefix" id="@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserNameOutputReference.property.honorificPrefix"></a>

```typescript
public readonly honorificPrefix: string;
```

- *Type:* string

---

##### `honorificSuffix`<sup>Required</sup> <a name="honorificSuffix" id="@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserNameOutputReference.property.honorificSuffix"></a>

```typescript
public readonly honorificSuffix: string;
```

- *Type:* string

---

##### `middleName`<sup>Required</sup> <a name="middleName" id="@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserNameOutputReference.property.middleName"></a>

```typescript
public readonly middleName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserNameOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccIdentitystoreUserName;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserName">DataAwsccIdentitystoreUserName</a>

---


### DataAwsccIdentitystoreUserPhoneNumbersList <a name="DataAwsccIdentitystoreUserPhoneNumbersList" id="@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserPhoneNumbersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserPhoneNumbersList.Initializer"></a>

```typescript
import { dataAwsccIdentitystoreUser } from '@cdktn/provider-awscc'

new dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserPhoneNumbersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserPhoneNumbersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserPhoneNumbersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserPhoneNumbersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserPhoneNumbersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserPhoneNumbersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserPhoneNumbersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserPhoneNumbersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserPhoneNumbersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserPhoneNumbersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserPhoneNumbersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserPhoneNumbersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserPhoneNumbersList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserPhoneNumbersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserPhoneNumbersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserPhoneNumbersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserPhoneNumbersList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserPhoneNumbersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserPhoneNumbersList.get"></a>

```typescript
public get(index: number): DataAwsccIdentitystoreUserPhoneNumbersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserPhoneNumbersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserPhoneNumbersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserPhoneNumbersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserPhoneNumbersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserPhoneNumbersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccIdentitystoreUserPhoneNumbersOutputReference <a name="DataAwsccIdentitystoreUserPhoneNumbersOutputReference" id="@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserPhoneNumbersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserPhoneNumbersOutputReference.Initializer"></a>

```typescript
import { dataAwsccIdentitystoreUser } from '@cdktn/provider-awscc'

new dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserPhoneNumbersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserPhoneNumbersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserPhoneNumbersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserPhoneNumbersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserPhoneNumbersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserPhoneNumbersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserPhoneNumbersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserPhoneNumbersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserPhoneNumbersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserPhoneNumbersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserPhoneNumbersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserPhoneNumbersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserPhoneNumbersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserPhoneNumbersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserPhoneNumbersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserPhoneNumbersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserPhoneNumbersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserPhoneNumbersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserPhoneNumbersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserPhoneNumbersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserPhoneNumbersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserPhoneNumbersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserPhoneNumbersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserPhoneNumbersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserPhoneNumbersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserPhoneNumbersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserPhoneNumbersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserPhoneNumbersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserPhoneNumbersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserPhoneNumbersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserPhoneNumbersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserPhoneNumbersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserPhoneNumbersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserPhoneNumbersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserPhoneNumbersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserPhoneNumbersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserPhoneNumbersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserPhoneNumbersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserPhoneNumbersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserPhoneNumbersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserPhoneNumbersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserPhoneNumbersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserPhoneNumbersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserPhoneNumbersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserPhoneNumbersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserPhoneNumbersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserPhoneNumbersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserPhoneNumbersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserPhoneNumbersOutputReference.property.primary">primary</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserPhoneNumbersOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserPhoneNumbersOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserPhoneNumbersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserPhoneNumbers">DataAwsccIdentitystoreUserPhoneNumbers</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserPhoneNumbersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserPhoneNumbersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `primary`<sup>Required</sup> <a name="primary" id="@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserPhoneNumbersOutputReference.property.primary"></a>

```typescript
public readonly primary: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserPhoneNumbersOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserPhoneNumbersOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserPhoneNumbersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccIdentitystoreUserPhoneNumbers;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserPhoneNumbers">DataAwsccIdentitystoreUserPhoneNumbers</a>

---


### DataAwsccIdentitystoreUserPhotosList <a name="DataAwsccIdentitystoreUserPhotosList" id="@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserPhotosList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserPhotosList.Initializer"></a>

```typescript
import { dataAwsccIdentitystoreUser } from '@cdktn/provider-awscc'

new dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserPhotosList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserPhotosList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserPhotosList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserPhotosList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserPhotosList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserPhotosList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserPhotosList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserPhotosList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserPhotosList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserPhotosList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserPhotosList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserPhotosList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserPhotosList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserPhotosList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserPhotosList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserPhotosList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserPhotosList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserPhotosList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserPhotosList.get"></a>

```typescript
public get(index: number): DataAwsccIdentitystoreUserPhotosOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserPhotosList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserPhotosList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserPhotosList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserPhotosList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserPhotosList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccIdentitystoreUserPhotosOutputReference <a name="DataAwsccIdentitystoreUserPhotosOutputReference" id="@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserPhotosOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserPhotosOutputReference.Initializer"></a>

```typescript
import { dataAwsccIdentitystoreUser } from '@cdktn/provider-awscc'

new dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserPhotosOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserPhotosOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserPhotosOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserPhotosOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserPhotosOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserPhotosOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserPhotosOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserPhotosOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserPhotosOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserPhotosOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserPhotosOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserPhotosOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserPhotosOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserPhotosOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserPhotosOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserPhotosOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserPhotosOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserPhotosOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserPhotosOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserPhotosOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserPhotosOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserPhotosOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserPhotosOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserPhotosOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserPhotosOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserPhotosOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserPhotosOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserPhotosOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserPhotosOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserPhotosOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserPhotosOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserPhotosOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserPhotosOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserPhotosOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserPhotosOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserPhotosOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserPhotosOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserPhotosOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserPhotosOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserPhotosOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserPhotosOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserPhotosOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserPhotosOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserPhotosOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserPhotosOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserPhotosOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserPhotosOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserPhotosOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserPhotosOutputReference.property.display">display</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserPhotosOutputReference.property.primary">primary</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserPhotosOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserPhotosOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserPhotosOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserPhotos">DataAwsccIdentitystoreUserPhotos</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserPhotosOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserPhotosOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `display`<sup>Required</sup> <a name="display" id="@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserPhotosOutputReference.property.display"></a>

```typescript
public readonly display: string;
```

- *Type:* string

---

##### `primary`<sup>Required</sup> <a name="primary" id="@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserPhotosOutputReference.property.primary"></a>

```typescript
public readonly primary: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserPhotosOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserPhotosOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserPhotosOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccIdentitystoreUserPhotos;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserPhotos">DataAwsccIdentitystoreUserPhotos</a>

---


### DataAwsccIdentitystoreUserRolesList <a name="DataAwsccIdentitystoreUserRolesList" id="@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserRolesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserRolesList.Initializer"></a>

```typescript
import { dataAwsccIdentitystoreUser } from '@cdktn/provider-awscc'

new dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserRolesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserRolesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserRolesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserRolesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserRolesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserRolesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserRolesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserRolesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserRolesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserRolesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserRolesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserRolesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserRolesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserRolesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserRolesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserRolesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserRolesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserRolesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserRolesList.get"></a>

```typescript
public get(index: number): DataAwsccIdentitystoreUserRolesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserRolesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserRolesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserRolesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserRolesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserRolesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccIdentitystoreUserRolesOutputReference <a name="DataAwsccIdentitystoreUserRolesOutputReference" id="@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserRolesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserRolesOutputReference.Initializer"></a>

```typescript
import { dataAwsccIdentitystoreUser } from '@cdktn/provider-awscc'

new dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserRolesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserRolesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserRolesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserRolesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserRolesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserRolesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserRolesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserRolesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserRolesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserRolesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserRolesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserRolesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserRolesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserRolesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserRolesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserRolesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserRolesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserRolesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserRolesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserRolesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserRolesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserRolesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserRolesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserRolesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserRolesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserRolesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserRolesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserRolesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserRolesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserRolesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserRolesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserRolesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserRolesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserRolesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserRolesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserRolesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserRolesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserRolesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserRolesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserRolesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserRolesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserRolesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserRolesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserRolesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserRolesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserRolesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserRolesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserRolesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserRolesOutputReference.property.primary">primary</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserRolesOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserRolesOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserRolesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserRoles">DataAwsccIdentitystoreUserRoles</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserRolesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserRolesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `primary`<sup>Required</sup> <a name="primary" id="@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserRolesOutputReference.property.primary"></a>

```typescript
public readonly primary: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserRolesOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserRolesOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserRolesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccIdentitystoreUserRoles;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIdentitystoreUser.DataAwsccIdentitystoreUserRoles">DataAwsccIdentitystoreUserRoles</a>

---



